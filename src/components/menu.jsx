import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/menu.css";

import {
    faBars,
    faXmark,
    faMagnifyingGlass,
    faHeart,
    faBagShopping,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastScrollTop = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Не прячем меню около верхней части страницы
            if (currentScroll <= 20) {
                setHidden(false);
                lastScrollTop = currentScroll;
                return;
            }

            if (currentScroll > lastScrollTop) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            lastScrollTop = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Запрещаем прокрутку страницы,
    // когда открыто мобильное меню
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header className={`menu ${hidden ? "menu-hidden" : ""}`}>
                <nav className="menu-nav">

                    {/* LOGO */}
                    <Link
                        to="/"
                        className="menu-logo"
                        onClick={closeMenu}
                    >
                        <img
                            src="/logo-blue.png"
                            alt="O2"
                        />
                    </Link>

                    {/* SEARCH */}
                    <div className="menu-search">
                        <input
                            type="text"
                            placeholder="Поиск по товарам"
                        />

                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        />
                    </div>

                    {/* DESKTOP ACTIONS */}
                    <div className="menu-actions">

                        <Link to="/" className="menu-action">
                            <FontAwesomeIcon icon={faHeart} />
                            <span>Избранное</span>
                        </Link>

                        <Link to="/" className="menu-action">
                            <FontAwesomeIcon icon={faBagShopping} />
                            <span>Корзина</span>
                        </Link>

                        <Link to="/" className="menu-action">
                            <FontAwesomeIcon icon={faUser} />
                            <span>Войти</span>
                        </Link>

                        <Link
                            to="/catalog"
                            className="menu-catalog"
                        >
                            <FontAwesomeIcon icon={faBars} />
                            <span>Каталог</span>
                        </Link>

                    </div>

                    {/* MOBILE BUTTONS */}
                    <div className="mobile-actions">

                        <Link
                            to="/"
                            className="mobile-cart"
                            onClick={closeMenu}
                        >
                            <FontAwesomeIcon icon={faBagShopping} />
                        </Link>

                        <button
                            className="mobile-menu-button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Открыть меню"
                        >
                            <FontAwesomeIcon
                                icon={menuOpen ? faXmark : faBars}
                            />
                        </button>

                    </div>
                </nav>
            </header>

            {/* MOBILE MENU */}
            <div
                className={`mobile-menu ${menuOpen ? "open" : ""}`}
            >
                <div className="mobile-menu-inner">

                    <div className="mobile-search">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                        />

                        <input
                            type="text"
                            placeholder="Поиск по товарам"
                        />
                    </div>

                    <div className="mobile-links">

                        <Link
                            to="/catalog"
                            onClick={closeMenu}
                        >
                            <FontAwesomeIcon icon={faBars} />
                            Каталог
                        </Link>

                        <Link
                            to="/"
                            onClick={closeMenu}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                            Избранное
                        </Link>

                        <Link
                            to="/"
                            onClick={closeMenu}
                        >
                            <FontAwesomeIcon icon={faBagShopping} />
                            Корзина
                        </Link>

                        <Link
                            to="/"
                            onClick={closeMenu}
                        >
                            <FontAwesomeIcon icon={faUser} />
                            Войти
                        </Link>

                    </div>

                    <div className="mobile-menu-info">
                        <Link to="/" onClick={closeMenu}>
                            Доставка
                        </Link>

                        <Link to="/" onClick={closeMenu}>
                            Гарантия
                        </Link>

                        <Link to="/" onClick={closeMenu}>
                            Контакты
                        </Link>
                    </div>

                </div>
            </div>

            {/* OVERLAY */}
            <div
                className={`menu-overlay ${menuOpen ? "show" : ""}`}
                onClick={closeMenu}
            />
        </>
    );
}