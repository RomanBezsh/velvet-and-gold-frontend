import { useEffect, useRef, useState } from "react";
import Logo from "../Logo/Logo";
import heartIcon from "../../assets/icons/heart.svg?raw";
import bagIcon from "../../assets/icons/bag.svg?raw";
import userIcon from "../../assets/icons/user.svg?raw";
import searchIcon from "../../assets/icons/search.svg?raw";
import filterIcon from "../../assets/icons/filter.svg?raw";
import chevronIcon from "../../assets/icons/chevron.svg?raw";
import accountIcon from "../../assets/icons/account.svg?raw";
import ordersIcon from "../../assets/icons/orders.svg?raw";
import favMenuIcon from "../../assets/icons/heart.svg?raw";
import logoutIcon from "../../assets/icons/logout.svg?raw";
import "./Header.css";

const Icon = ({ svg }) => (
  <span className="header__icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />
);

const catalogColumns = [
  {
    blocks: [
      {
        title: "Вироби",
        links: [
          { label: "каблучки", slug: "rings" },
          { label: "сережки", slug: "earrings" },
          { label: "підвіски", slug: "pendants" },
          { label: "браслети", slug: "bracelets" },
          { label: "ланцюжки", slug: "chains" },
        ],
      },
    ],
  },
  {
    blocks: [
      {
        links: [
          { label: "кольє", slug: "necklaces" },
          { label: "набори", slug: "sets" },
        ],
      },
      {
        title: "За металом",
        links: [
          { label: "золото", slug: "gold" },
          { label: "срібло", slug: "silver" },
          { label: "біле золото", slug: "white-gold" },
        ],
      },
    ],
  },
  {
    blocks: [
      {
        title: "За вставкою",
        links: [
          { label: "діаманти", slug: "diamonds" },
          { label: "рубіни", slug: "rubies" },
          { label: "сапфіри", slug: "sapphires" },
          { label: "перлини", slug: "pearls" },
          { label: "без вставок", slug: "no-stones" },
        ],
      },
    ],
  },
];

// TODO: заменить на данные из стора авторизации; при user = null покажется гостевой дропдаун
const MOCK_USER = {
  name: "Олена Коваленко",
  email: "name@example.com",
  favorites: 5,
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimer = useRef(null);

  const openDropdownNow = (name) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  };

  const closeDropdownSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 160);
  };

  const closeDropdown = () => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown((current) => (current === name ? null : name));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeDropdown();
    };
    const handleClickOutside = (event) => {
      if (!event.target.closest(".header__dropdown")) closeDropdown();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      clearTimeout(closeTimer.current);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const isCatalogOpen = openDropdown === "catalog";
  const isAccountOpen = openDropdown === "account";

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__container header__container--top">
          <a href="/" className="header__logo" aria-label="Velvet & Gold — на головну">
            <Logo />
          </a>

          <nav className="header__nav" aria-label="Головна навігація">
            <div
              className="header__nav-item header__dropdown"
              onMouseEnter={() => openDropdownNow("catalog")}
              onMouseLeave={closeDropdownSoon}
            >
              <a
                href="/catalog"
                className={`header__nav-link header__nav-link--dropdown${isCatalogOpen ? " header__nav-link--open" : ""}`}
                aria-expanded={isCatalogOpen}
                aria-haspopup="true"
                onFocus={() => openDropdownNow("catalog")}
              >
                КАТАЛОГ
                <span className="header__chevron">
                  <Icon svg={chevronIcon} />
                </span>
              </a>

              {isCatalogOpen && (
                <div className="header__mega" role="menu" aria-label="Каталог">
                  {catalogColumns.map((column, columnIndex) => (
                    <div className="header__mega-column" key={columnIndex}>
                      {column.blocks.map((block, blockIndex) => (
                        <div className="header__mega-block" key={blockIndex}>
                          {block.title && (
                            <span className="header__mega-title">{block.title}</span>
                          )}
                          <ul className="header__mega-list">
                            {block.links.map((link) => (
                              <li key={link.slug}>
                                <a
                                  href={`/catalog/${link.slug}`}
                                  className="header__mega-link"
                                  role="menuitem"
                                  onClick={closeDropdown}
                                >
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/about"
              className="header__nav-link"
              onMouseEnter={closeDropdown}
            >
              ПРО НАС
            </a>
            <a
              href="/contacts"
              className="header__nav-link"
              onMouseEnter={closeDropdown}
            >
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

            <div
              className="header__dropdown"
              onMouseEnter={() => openDropdownNow("account")}
              onMouseLeave={closeDropdownSoon}
            >
              <button
                type="button"
                className="header__icon-btn"
                aria-label="Особистий кабінет"
                aria-expanded={isAccountOpen}
                aria-haspopup="true"
                onClick={() => toggleDropdown("account")}
              >
                <Icon svg={userIcon} />
              </button>

              {isAccountOpen && (
                <div className="header__panel header__panel--account">
                  {MOCK_USER ? (
                    <>
                      <div className="header__account-head">
                        <span className="header__account-name">{MOCK_USER.name}</span>
                        <span className="header__account-email">{MOCK_USER.email}</span>
                      </div>
                      <ul className="header__account-menu">
                        <li>
                          <a href="/account" className="header__account-link" onClick={closeDropdown}>
                            <Icon svg={accountIcon} />
                            <span>Особистий кабінет</span>
                          </a>
                        </li>
                        <li>
                          <a href="/orders" className="header__account-link" onClick={closeDropdown}>
                            <Icon svg={ordersIcon} />
                            <span>Мої замовлення</span>
                          </a>
                        </li>
                        <li>
                          <a href="/favorites" className="header__account-link" onClick={closeDropdown}>
                            <Icon svg={favMenuIcon} />
                            <span>Обране</span>
                            <span className="header__account-count">{MOCK_USER.favorites}</span>
                          </a>
                        </li>
                      </ul>
                      <button
                        type="button"
                        className="header__account-logout"
                        onClick={closeDropdown}
                      >
                        <Icon svg={logoutIcon} />
                        <span>Вийти</span>
                      </button>
                    </>
                  ) : (
                    <div className="header__guest">
                      <p className="header__guest-text">
                        Увійдіть, щоб бачити замовлення та зберігати обране
                      </p>
                      <a href="/login" className="header__guest-btn header__guest-btn--primary">
                        УВІЙТИ
                      </a>
                      <a href="/register" className="header__guest-btn header__guest-btn--outline">
                        СТВОРИТИ АКАУНТ
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>

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
