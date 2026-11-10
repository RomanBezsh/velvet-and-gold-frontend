import Logo from "../Logo/Logo";
import heartIcon from "../../assets/icons/heart.svg?raw";
import bagIcon from "../../assets/icons/bag.svg?raw";
import userIcon from "../../assets/icons/user.svg?raw";
import searchIcon from "../../assets/icons/search.svg?raw";
import filterIcon from "../../assets/icons/filter.svg?raw";
import chevronIcon from "../../assets/icons/chevron.svg?raw";
import "./Header.css";

const Icon = ({ svg }) => (
  <span className="header__icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />
);

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__container header__container--top">
          <a href="/" className="header__logo" aria-label="Velvet & Gold — на головну">
            <Logo />
          </a>

          <nav className="header__nav" aria-label="Головна навігація">
            <a
              href="/catalog"
              className="header__nav-link header__nav-link--dropdown"
            >
              КАТАЛОГ
              <Icon svg={chevronIcon} />
            </a>
            <a href="/about" className="header__nav-link">
              ПРО НАС
            </a>
            <a href="/contacts" className="header__nav-link">
              КОНТАКТИ
            </a>
          </nav>

          <div className="header__actions">
            <button type="button" className="header__icon-btn" aria-label="Обране">
              <Icon svg={heartIcon} />
            </button>
            <button type="button" className="header__icon-btn" aria-label="Кошик">
              <Icon svg={bagIcon} />
            </button>
            <button type="button" className="header__icon-btn" aria-label="Особистий кабінет">
              <Icon svg={userIcon} />
            </button>

            <div className="header__lang">
              <button
                type="button"
                className="header__lang-btn header__lang-btn--active"
                aria-current="true"
              >
                УКР
              </button>
              <span className="header__lang-divider" aria-hidden="true">
                |
              </span>
              <button type="button" className="header__lang-btn">
                ENG
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="header__bottom">
        <div className="header__container header__container--bottom">
          <nav className="header__subnav" aria-label="Категорії">
            <a href="/new" className="header__subnav-link">
              НОВИНКИ
            </a>
            <a href="/promotions" className="header__subnav-link">
              АКЦІЇ
            </a>
            <a href="/wedding" className="header__subnav-link">
              ВЕСІЛЬНА КОЛЕКЦІЯ
            </a>
          </nav>

          <form className="header__search" role="search" onSubmit={(e) => e.preventDefault()}>
            <div className="header__search-field">
              <Icon svg={searchIcon} />
              <input
                type="search"
                className="header__search-input"
                placeholder="Пошук: каблучки, сережки, діаманти ..."
                aria-label="Пошук по каталогу"
              />
              <button
                type="button"
                className="header__search-filter"
                aria-label="Фільтри пошуку"
              >
                <Icon svg={filterIcon} />
              </button>
            </div>
            <button type="submit" className="header__search-btn">
              ЗНАЙТИ
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
