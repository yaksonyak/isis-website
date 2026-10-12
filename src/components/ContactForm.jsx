import { useState } from 'react';
import styles from './ContactForm.module.css';

const SendIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function ContactForm() {
  const [form, setForm] = useState({
    nom: '', email: '', telephone: '', sujet: '', message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to your API / form handler
    setSent(true);
    setForm({ nom: '', email: '', telephone: '', sujet: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

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
          />
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
          />
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
        />
      </div>

      {sent && (
        <div className={styles.success}>
          ✓ Message envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
        </div>
      )}

      <button type="submit" className={styles.submit}>
        Envoyer le message <SendIcon />
      </button>
    </form>
  );
}
