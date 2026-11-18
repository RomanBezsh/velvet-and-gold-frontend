import { Link } from 'react-router-dom';
import './Footer.css'

const InstagramIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
const FacebookIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 21v-8h3l.5-4h-3.5V7c0-1.2.4-2 2-2H18V2.2A17 17 0 0 0 15.5 2C12.5 2 11 3.8 11 7v2H8v4h3v8"/></svg>
const TelegramIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 3-3.8 18-5.8-5-3 2.8.5-4.2L21 3 3 10.5l5.5 2.2"/></svg>

export default function Footer() {
  return <footer className="vg-footer" id="contacts">
    <div className="vg-footer-inner">
      <div className="vg-footer-grid">
        <div className="vg-footer-brand"><Link className="vg-footer-logo" to="/">Velvet &amp; Gold</Link><p>Ювелірні прикраси з золота та срібла з гарантією якості.</p><div className="vg-footer-social"><a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><InstagramIcon/></a><a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer"><FacebookIcon/></a><a href="https://t.me/" aria-label="Telegram" target="_blank" rel="noreferrer"><TelegramIcon/></a></div></div>
        <nav className="vg-footer-column" aria-label="Каталог"><h3>Каталог</h3><Link to="/#categories">Каблучки</Link><Link to="/#categories">Сережки</Link><Link to="/#categories">Браслети</Link><Link to="/#categories">Кольє</Link></nav>
        <nav className="vg-footer-column" aria-label="Інформація"><h3>Інформація</h3><Link to="/about">Про нас</Link><Link to="/#delivery">Доставка і оплата</Link><Link to="/#delivery">Гарантія та повернення</Link><Link to="/#contacts">Контакти</Link></nav>
        <div className="vg-footer-column vg-footer-contacts"><h3>Контакти</h3><a href="tel:+380440000000">♧ &nbsp; +38 (044) 000-00-00</a><a href="mailto:info@velvetgold.com">✉ &nbsp; info@velvetgold.com</a><span>♧ &nbsp; м. Київ, вул. Прикладна, 10</span><span>◷ &nbsp; Пн–Нд, 10:00–20:00</span></div>
      </div>
      <div className="vg-footer-bottom"><span>© 2026 Velvet &amp; Gold. Усі права захищені.</span><span><Link to="/#privacy">Політика конфіденційності</Link> · <Link to="/#terms">Публічна оферта</Link></span></div>
    </div>
  </footer>
}
