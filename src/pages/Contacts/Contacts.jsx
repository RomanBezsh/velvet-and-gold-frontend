import { useState } from 'react';
import './Contacts.css';

import phoneIcon from '../../assets/icons/phone.svg?raw';
import mailIcon from '../../assets/icons/mail.svg?raw';
import pinIcon from '../../assets/icons/pin.svg?raw';
import clockIcon from '../../assets/icons/clock.svg?raw';

const Icon = ({ svg }) => (
  <span className="contacts-card__icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />
);

const CONTACT_CARDS = [
  {
    id: 'phone',
    icon: <Icon svg={phoneIcon} />,
    label: 'ТЕЛЕФОН',
    value: '+38 (044) 000-00-00',
    href: 'tel:+380440000000',
    note: 'Дзвінок або Telegram',
  },
  {
    id: 'email',
    icon: <Icon svg={mailIcon} />,
    label: 'EMAIL',
    value: 'info@velvetgold.com',
    href: 'mailto:info@velvetgold.com',
    note: 'Відповімо за добу',
  },
  {
    id: 'address',
    icon: <Icon svg={pinIcon} />,
    label: 'АДРЕСА',
    value: 'вул. Прикладна, 10',
    href: null,
    note: 'Шоурум і самовивіз',
  },
  {
    id: 'hours',
    icon: <Icon svg={clockIcon} />,
    label: 'ГОДИНИ РОБОТИ',
    value: 'Пн–Нд, 10:00–20:00',
    href: null,
    note: 'Без вихідних',
  },
];

export default function Contacts() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    agree: false,
  });
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (sent) setSent(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) return;
    setSent(true);
    setForm({
      name: '',
      email: '',
      message: '',
      agree: false,
    });
  };

  return (
    <main className="contacts-page">
      <div className="contacts-container">
        <nav className="contacts-breadcrumbs" aria-label="Хлібні крихти">
          <a href="/" className="contacts-breadcrumbs__link">Головна</a>
          <span className="contacts-breadcrumbs__sep"> / </span>
          <span>Контакти</span>
        </nav>

        <header className="contacts-intro">
          <h1 className="contacts-intro__title">Контакти</h1>
          <span className="contacts-intro__line" aria-hidden="true" />
          <p className="contacts-intro__subtitle">Ми завжди на зв'язку та раді допомогти</p>
        </header>

        <section className="contacts-cards" aria-label="Контактна інформація">
          {CONTACT_CARDS.map((card) => (
            <article className="contacts-card" key={card.id}>
              {card.icon}
              <span className="contacts-card__label">{card.label}</span>
              {card.href ? (
                <a href={card.href} className="contacts-card__value">
                  {card.value}
                </a>
              ) : (
                <p className="contacts-card__value">{card.value}</p>
              )}
              <span className="contacts-card__note">{card.note}</span>
            </article>
          ))}
        </section>

        <section className="contacts-grid" aria-label="Зворотній зв'язок та мапа">
          <div className="contacts-form-card">
            <h2 className="contacts-form-card__title">Напишіть нам</h2>
            <span className="contacts-form-card__line" aria-hidden="true" />

            <form className="contacts-form" onSubmit={onSubmit}>
              <div className="contacts-form__field">
                <label htmlFor="contact-name" className="contacts-form__label">
                  Ім’я
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className="contacts-form__input"
                  placeholder="Ваше ім’я"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="contacts-form__field">
                <label htmlFor="contact-email" className="contacts-form__label">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className="contacts-form__input"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="contacts-form__field">
                <label htmlFor="contact-message" className="contacts-form__label">
                  Повідомлення
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contacts-form__textarea"
                  placeholder="Чим ми можемо допомогти?"
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>

              <label className="contacts-form__checkbox">
                <input
                  type="checkbox"
                  name="agree"
                  className="contacts-form__checkbox-input"
                  checked={form.agree}
                  onChange={onChange}
                  required
                />
                <span className="contacts-form__checkbox-box" aria-hidden="true" />
                <span className="contacts-form__checkbox-text">
                  Погоджуюсь на обробку персональних даних
                </span>
              </label>

              <button type="submit" className="contacts-form__submit">
                НАДІСЛАТИ
              </button>

              {sent && (
                <p className="contacts-form__success" role="status">
                  Дякуємо! Ваше повідомлення успішно надіслано.
                </p>
              )}
            </form>
          </div>

          <div className="contacts-map-card">
            <iframe
              className="contacts-map-card__frame"
              title="Velvet & Gold — вул. Прикладна, 10"
              src="https://www.openstreetmap.org/export/embed.html?bbox=30.514%2C50.443%2C30.534%2C50.453&layer=mapnik&marker=50.448%2C30.524"
              loading="lazy"
            />
          </div>
        </section>
      </div>
    </main>
  );
}