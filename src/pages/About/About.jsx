import './About.css';
import aboutTeamPhoto from '../../assets/about-team.png';

const Diamond = () => <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 17h32l-16 22L8 17Zm0 0 8-9h16l8 9M16 8l8 31 8-31M8 17h32M16 8l8 9 8-9"/></svg>;
const Scale = () => <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 7v32M12 40h24M16 11h16M8 15h32M12 15 5 29h14l-7-14Zm24 0-7 14h14l-7-14ZM5 29c2 5 12 5 14 0m10 0c2 5 12 5 14 0"/></svg>;
const Heart = () => <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 39 8 23C-1 13 12 3 24 16 36 3 49 13 40 23L24 39Z"/><path d="m15 25 7-5 5 5 6-4"/></svg>;
const Picture = () => <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="7" y="9" width="34" height="30" rx="3"/><circle cx="17" cy="19" r="3"/><path d="m9 34 11-11 8 8 5-5 7 8"/></svg>;

const principles = [
  { title: 'Якість', description: 'Контроль і сертифікація кожного виробу', Icon: Diamond },
  { title: 'Чесність', description: 'Прозорі ціни та точні характеристики', Icon: Scale },
  { title: 'Турбота', description: 'Допомога з вибором і після покупки', Icon: Heart },
];

export default function About() {
  return <main className="about-page">
    <div className="about-container">
      <nav className="about-breadcrumbs" aria-label="Навігаційний шлях"><a href="/">Головна</a> / Про нас</nav>
      <header className="about-intro"><h1>Про нас</h1><span className="about-line"/><p>Прикраси, створені з любов’ю до деталей</p></header>
      <section className="about-story" aria-labelledby="about-story-heading">
        <div className="about-story-copy"><h2 id="about-story-heading">Наша історія</h2><span className="about-line"/><p>Velvet &amp; Gold народився з любові до справжніх прикрас, що передаються з покоління в покоління. Ми обираємо золото 585 проби та ретельно перевіряємо кожен виріб.</p><p>Наша мета — зробити вибір прикрас простим і приємним.</p></div>
        <div className="about-story-frame"><img className="about-story-photo" src={aboutTeamPhoto} alt="Спільна фотографія команди на заході" /></div>
      </section>
    </div>
    <section className="about-stats" aria-label="Наші досягнення"><div className="about-stats-inner"><div><strong>10+</strong><span>РОКІВ ДОСВІДУ</span></div><div><strong>5000+</strong><span>КЛІЄНТІВ</span></div><div><strong>585</strong><span>ПРОБА ЗОЛОТА</span></div><div><strong>14 ДНІВ</strong><span>НА ПОВЕРНЕННЯ</span></div></div></section>
    <div className="about-container"><section className="about-principles" aria-labelledby="principles-heading"><h2 id="principles-heading">Наші принципи</h2><span className="about-line"/><div className="about-principles-grid">{principles.map(({title,description,Icon}) => <article className="about-principle" key={title}><Icon/><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className="about-cta"><div><h2>Знайдіть прикрасу, яка розповість<br className="about-desktop-break"/> вашу історію</h2><a href="/#categories">ДИВИТИСЯ КАТАЛОГ</a></div></section>
    </div>
  </main>;
}
