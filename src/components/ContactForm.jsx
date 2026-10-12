import { useState } from 'react';
import { WEB3FORMS_KEY, CONTACT_EMAIL } from '../config';
import styles from './ContactForm.module.css';

const SendIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const EMPTY = { nom: '', email: '', telephone: '', sujet: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};
  if (!form.nom.trim()) errors.nom = 'Veuillez indiquer votre nom.';
  if (!EMAIL_RE.test(form.email.trim())) errors.email = 'Adresse email invalide.';
  if (!form.message.trim()) errors.message = 'Veuillez décrire votre besoin.';
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  // idle | sending | success | error
  const [status, setStatus] = useState('idle');
  const [botcheck, setBotcheck] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;
    if (botcheck) return; // champ piège rempli : robot

    if (!WEB3FORMS_KEY) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Site web — ${form.sujet.trim() || 'Nouvelle demande'}`,
          from_name: 'Site ISIS Consulting',
          replyto: form.email.trim(),
          Nom: form.nom.trim(),
          Email: form.email.trim(),
          Téléphone: form.telephone.trim() || '—',
          Sujet: form.sujet.trim() || '—',
          Message: form.message.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      setStatus('success');
      setForm(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  const sending = status === 'sending';

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="nom">Nom complet</label>
          <input
            id="nom"
            name="nom"
            type="text"
            placeholder="Votre nom"
            value={form.nom}
            onChange={handleChange}
            required
            aria-invalid={!!errors.nom}
            className={errors.nom ? styles.invalid : undefined}
          />
          {errors.nom && <span className={styles.fieldError}>{errors.nom}</span>}
        </div>
        <div className={styles.group}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="votre@email.com"
            value={form.email}
            onChange={handleChange}
            required
            aria-invalid={!!errors.email}
            className={errors.email ? styles.invalid : undefined}
          />
          {errors.email && <span className={styles.fieldError}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.group}>
          <label htmlFor="telephone">Téléphone</label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            placeholder="+223 00 00 00 00"
            value={form.telephone}
            onChange={handleChange}
          />
        </div>
        <div className={styles.group}>
          <label htmlFor="sujet">Sujet</label>
          <input
            id="sujet"
            name="sujet"
            type="text"
            placeholder="Objet de votre message"
            value={form.sujet}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.group}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Décrivez votre besoin..."
          value={form.message}
          onChange={handleChange}
          required
          aria-invalid={!!errors.message}
          className={errors.message ? styles.invalid : undefined}
        />
        {errors.message && <span className={styles.fieldError}>{errors.message}</span>}
      </div>

      {/* Champ piège anti-spam, invisible pour les humains */}
      <input
        type="checkbox"
        name="botcheck"
        className={styles.botcheck}
        tabIndex={-1}
        autoComplete="off"
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
        aria-hidden="true"
      />

      <div aria-live="polite">
        {status === 'success' && (
          <div className={styles.success}>
            ✓ Message envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
          </div>
        )}
        {status === 'error' && (
          <div className={styles.error}>
            L'envoi a échoué. Réessayez dans un instant ou écrivez-nous directement à{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </div>
        )}
      </div>

      <button type="submit" className={styles.submit} disabled={sending}>
        {sending ? 'Envoi en cours…' : <>Envoyer le message <SendIcon /></>}
      </button>
    </form>
  );
}
