import "./css/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-logo">
                    <img src="/public/logo-blue.png" alt="" />
                    <p>Магазин мобильной техники</p>
                    <span>© 2026 O2</span>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>Покупателям</h4>
                        <a href="/">Доставка и оплата</a>
                        <a href="/">Гарантия и возврат</a>
                        <a href="/">Частые вопросы</a>
                    </div>

                    <div>
                        <h4>Компания</h4>
                        <a href="/">О нас</a>
                        <a href="/">Контакты</a>
                        <a href="/">Новости</a>
                    </div>

                    <div>
                        <h4>Помощь</h4>
                        <a href="/">Поддержка</a>
                        <a href="/">Пользовательское соглашение</a>
                        <a href="/">Политика конфиденциальности</a>
                    </div>
                </div>

                <div className="footer-social">
                    <h4>Мы в соцсетях</h4>

                    <div className="socials">
                        <a href="/">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>

                        <a href="/">
                            <FontAwesomeIcon icon={faVk} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}