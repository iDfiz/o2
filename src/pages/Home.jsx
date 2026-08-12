import "../components/css/home.css"
import { Link } from 'react-router-dom';
import Icon from "../components/Icon";

export default function Home() {
    return (
        <>
            <div className="home">
                <section className="hero">
                    <div className="hero-content">
                        <span className="hero-badge">
                            Новинка
                        </span>
                        <h1>
                            iPhone 17 Pro Max
                        </h1>
                        <p>
                            Максимальная производительность.
                            Совершенно новая камера.
                            Создан для будущего.
                        </p>
                        <div className="hero-buttons">
                            <button className="primary-btn">
                                Подробнее
                            </button>

                            <button className="secondary-btn">
                                Смотреть каталог
                            </button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/public/catalog/iphone/iphone 17 pro/i.webp" alt="iPhone" />
                    </div>
                </section>
                <section className="buttons-block">
                    <button className="btn-null">
                        <Icon name="phone" />
                        <strong>Смартфоны</strong>
                    </button>

                    <button className="btn-null">
                        <Icon name="headphones" />
                        <strong>Наушники</strong>
                    </button>

                    <button className="btn-null">
                        <Icon name="watch" />
                        <strong>Умные часы</strong>
                    </button>

                    <button className="btn-null">
                        <Icon name="tablet" />
                        <strong>Планшеты</strong>
                    </button>

                    <button className="btn-null">
                        <Icon name="laptop" />
                        <strong>Ноутбуки</strong>
                    </button>

                    <button className="btn-null">
                        <Icon name="accessories" />
                        <strong>Аксессуары</strong>
                    </button>
                </section>
                <section className="flex-ai_c-jc_sb">
                    <div className="block">
                        <Icon name="shield" size={100}/>
                        <div className="right">
                            <h1>Гарантия качества</h1>
                            <p>Оригинальная техника<br/>с гарантией от 1 года</p>
                        </div>
                    </div>
                    <div className="block">
                        <Icon name="delivery" size={100}/>
                        <div className="right">
                            <h1>Быстрая доставка</h1>
                            <p>Доставим заказ по всему<br/>Крыму от 1 дня</p>
                        </div>
                    </div>
                    <div className="block">
                        <Icon name="procent" size={100}/>
                        <div className="right">
                            <h1>Выгодные цены</h1>
                            <p>Регулярные акции<br/>и специальные предложения</p>
                        </div>
                    </div>
                </section>
                <section className="new-product">
                    <h1>Новинки</h1>
                    <div className="products-slider">
                        <div className="block">
                            <span className="hero-badge">
                                Новинка
                            </span>
                            <div className="img">
                                <img src="/public/catalog/iphone/iphone 17 pro/iphone-17-pro-cosmicorange-1181x865.png" alt="" />
                            </div>
                            <div className="text">
                               <h2>Apple iPhone 17 Pro</h2>
                                <p>Космический ораньжевый</p> 
                            </div>
                            <h1 style={{color: "var(--text)"}}>108 990 ₽</h1>
                            <div className="btns">
                                <button className="btn-null-icon">
                                    <Icon name="heart" size={20}/>
                                </button>
                                <Link to="/page" className="btn-blue-icon">
                                    <Icon name="basket" size={20}/>
                                </Link>
                            </div>
                        </div>
                        <div className="block">
                            <span className="hero-badge">
                                Новинка
                            </span>
                            <div className="img">
                                <img src="/public/catalog/samsung/samsung Galaxy S25 Ultra/6140e74195d24772aa1bf6dc5152c1b9-1181x865.png" alt="" />
                            </div>
                            <div className="text">
                               <h2>Samsung Galaxy S25 Ultra</h2>
                                <p>Чёрный</p> 
                            </div>
                            <h1 style={{color: "var(--text)"}}>73 990 ₽</h1>
                            <div className="btns">
                                <button className="btn-null-icon">
                                    <Icon name="heart" size={20}/>
                                </button>
                                <Link to="/page" className="btn-blue-icon">
                                    <Icon name="basket" size={20}/>
                                </Link>
                            </div>
                        </div>
                        <div className="block">
                            <span className="hero-badge">
                                Новинка
                            </span>
                            <div className="img">
                                <img src="/public/catalog/iphone/airpods/airpods-1181x865.png" alt="" />
                            </div>
                            <div className="text">
                               <h2>AirPods Pro 2025</h2>
                                <p>Белый</p> 
                            </div>
                            <h1 style={{color: "var(--text)"}}>17 500 ₽</h1>
                            <div className="btns">
                                <button className="btn-null-icon">
                                    <Icon name="heart" size={20}/>
                                </button>
                                <Link to="/page" className="btn-blue-icon">
                                    <Icon name="basket" size={20}/>
                                </Link>
                            </div>
                        </div>
                        <div className="block">
                            <span className="hero-badge">
                                Новинка
                            </span>
                            <div className="img">
                                <img src="/public/catalog/iphone/watch/4-1181x865.png" alt="" />
                            </div>
                            <div className="text">
                               <h2>Apple Watch Ultra 3</h2>
                                <p>Чёрный титан</p> 
                            </div>
                            <h1 style={{color: "var(--text)"}}>74 990 ₽</h1>
                            <div className="btns">
                                <button className="btn-null-icon">
                                    <Icon name="heart" size={20}/>
                                </button>
                                <Link to="/page" className="btn-blue-icon">
                                    <Icon name="basket" size={20}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mailing">
                    <div className="icon">
                        <Icon name="mail" size={60}/>
                    </div>

                    <div className="right">
                        <h1>Будьте в курсе новинок и акций</h1>
                        <p>Подпишитесь на рассылку</p>
                    </div>

                    <div className="mailing-input">
                        <input type="text" placeholder="Ваш e-mail"/>
                    </div>

                    <button className="btn-blue mailing-button">
                        Подписаться
                    </button>
                </section>
            </div>
        </>
    )
}