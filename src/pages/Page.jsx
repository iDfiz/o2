import { useState } from "react";
import Icon from "../components/Icon";
import "../components/css/page.css";

const productImages = [
    "/catalog/iphone/iphone 17 pro/iphone-17-pro-cosmicorange-1181x865.png",
    "/catalog/iphone/iphone 17 pro/e82dc1f40d1ed0a09dc8170d1a2fc3d5.avif",
    "/catalog/iphone/iphone 17 pro/62f8c2f3-8319-43a7-9729-880d29777437.avif",
];

const memories = ["128 ГБ", "256 ГБ", "512 ГБ", "1 ТБ"];

const colors = [
    {
        name: "Космический оранжевый",
        value: "#F77E2D",
    },
    {
        name: "Тёмно-синий",
        value: "#32374A",
    },
    {
        name: "Серебристый",
        value: "#F5F5F5",
    },
];

export default function Page() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedMemory, setSelectedMemory] = useState("256 ГБ");
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [isFavorite, setIsFavorite] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const price = 108990;

    return (
        <main className="page">
            <div className="way">
                <a href="/">Главная</a>
                <Icon name="arrowRight" size={10}/>
                <a href="/catalog">Смартфоны</a>
                <Icon name="arrowRight" size={10}/>
                <a href="/catalog/apple">Apple</a>
                <Icon name="arrowRight" size={10}/>
                <span>iPhone 17 Pro</span>
            </div>

            <section className="product">
                <div className="product-gallery">
                    <div className="product-thumbnails">
                        {productImages.map((image, index) => (
                            <button
                                key={image}
                                className={
                                    selectedImage === index
                                        ? "product-thumbnail active"
                                        : "product-thumbnail"
                                }
                                onClick={() => setSelectedImage(index)}
                            >
                                <img
                                    src={image}
                                    alt={`iPhone 17 Pro ${index + 1}`}
                                />
                            </button>
                        ))}
                    </div>
                    <div className="product-preview">
                        <span className="hero-badge">
                            Новинка
                        </span>
                        <button
                            className={
                                isFavorite
                                    ? "product-favorite active"
                                    : "product-favorite"
                            }
                            onClick={() =>
                                setIsFavorite(!isFavorite)
                            }
                        >
                            <Icon name="heart"/>
                        </button>
                        <img
                            src={productImages[selectedImage]}
                            alt="Apple iPhone 17 Pro"
                        />
                    </div>
                </div>
                <div className="product-info">
                    <div className="product-top">
                        <span className="product-brand">
                            Apple
                        </span>
                        <h1 className="product-title">
                            Apple iPhone 17 Pro
                        </h1>
                        <p className="product-color">
                            {selectedColor.name}
                        </p>
                    </div>
                    <div className="product-rating">
                        <div className="rating-value">
                            <Icon name="star" size={15}/>
                            <strong>4.9</strong>
                        </div>
                        <a href="#reviews">
                            128 отзывов
                        </a>
                        <span className="product-code">
                            Код товара: 123456
                        </span>
                    </div>
                    <div className="product-option">
                        <div className="option-header">
                            <h3 style={{minHeight: "0"}}>Память</h3>
                            <span>{selectedMemory}</span>
                        </div>
                        <div className="memory-list">
                            {memories.map((memory) => (
                                <button
                                    key={memory}
                                    className={
                                        selectedMemory === memory
                                            ? "memory-button active"
                                            : "memory-button"
                                    }
                                    onClick={() =>
                                        setSelectedMemory(memory)
                                    }
                                >
                                    {memory}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="product-option">
                        <div className="option-header">
                            <h3 style={{minHeight: "0"}}>Цвет</h3>
                            <span>{selectedColor.name}</span>
                        </div>
                        <div className="color-list">
                            {colors.map((color) => (
                                <button
                                    key={color.name}
                                    title={color.name}
                                    className={
                                        selectedColor.name === color.name
                                            ? "color-button active"
                                            : "color-button"
                                    }
                                    onClick={() =>
                                        setSelectedColor(color)
                                    }
                                    style={{
                                        "--product-color": color.value,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="buy">
                        <div className="price-block">
                            <h2 className="price">
                                {price.toLocaleString("ru-RU")} ₽
                            </h2>
                            <div className="credit">
                                <span>
                                    от 9 082 ₽ / мес. в кредит
                                </span>
                                <span className="credit-info">
                                    i
                                </span>
                            </div>
                        </div>
                        <div className="buy-actions">
                            <div className="quantity">
                                <button
                                    onClick={() =>
                                        setQuantity(
                                            Math.max(1, quantity - 1)
                                        )
                                    }
                                >
                                    <Icon name="minus" size={15}/>
                                </button>
                                <span>{quantity}</span>
                                <button
                                    onClick={() =>
                                        setQuantity(quantity + 1)
                                    }
                                >
                                    <Icon name="plus" size={15}/>
                                </button>
                            </div>
                            <button className="btn-blue add-cart">
                                <Icon name="basket"/>
                                В корзину
                            </button>
                            <button
                                className={
                                    isFavorite
                                        ? "btn-white favorite-action active"
                                        : "btn-white favorite-action"
                                }
                                onClick={() =>
                                    setIsFavorite(!isFavorite)
                                }
                            >
                                <Icon name="heart"/>
                            </button>
                        </div>
                        <div className="delivery">
                            <div className="delivery-item">
                                <div className="delivery-icon">
                                    <Icon name="delivery" size={20}/>
                                </div>
                                <div>
                                    <h3>Доставка</h3>
                                    <p>1–2 дня, бесплатно</p>
                                </div>
                            </div>
                            <div className="delivery-divider" />
                            <div className="delivery-item">
                                <div className="delivery-icon">
                                    <Icon name="shop" size={20}/>
                                </div>
                                <div>
                                    <h3>Самовывоз</h3>
                                    <p>Сегодня, бесплатно</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-advantages">
                <div className="advantage">
                    <div className="advantage-icon">
                        <Icon name="delivery" size={20}/>
                    </div>
                    <div>
                        <h3>Быстрая доставка</h3>
                        <p>
                            Доставим заказ в удобное
                            для вас время
                        </p>
                    </div>
                </div>
                <div className="advantage">
                    <div className="advantage-icon">
                        <Icon name="shield" size={20}/>
                    </div>
                    <div>
                        <h3>Официальная гарантия</h3>
                        <p>
                            Гарантия производителя
                            до 1 года
                        </p>
                    </div>
                </div>
                <div className="advantage">
                    <div className="advantage-icon">
                        <Icon name="bankCard" size={20}/>
                    </div>
                    <div>
                        <h3>Удобная оплата</h3>
                        <p>
                            Картой, наличными
                            или в кредит
                        </p>
                    </div>
                </div>
                <div className="advantage">
                    <div className="advantage-icon">
                        <Icon name="verification" size={20}/>
                    </div>
                    <div>
                        <h3>Проверенный товар</h3>
                        <p>
                            Только оригинальная
                            техника
                        </p>
                    </div>
                </div>
            </section>
            <section className="product-details">
                <div className="details-navigation">
                    <button className="active">
                        Характеристики
                    </button>
                    <button>
                        Описание
                    </button>
                    <button id="reviews">
                        Отзывы
                        <span>128</span>
                    </button>
                </div>
                <div className="specifications">
                    <h2>
                        Ключевые особенности
                    </h2>
                    <div className="spec-grid">
                        <div className="spec-item">
                            <span>Экран</span>
                            <strong>
                                6.3″ Super Retina XDR
                            </strong>
                        </div>
                        <div className="spec-item">
                            <span>Процессор</span>
                            <strong>
                                Apple A19 Pro
                            </strong>
                        </div>
                        <div className="spec-item">
                            <span>Основная камера</span>
                            <strong>
                                48 Мп
                            </strong>
                        </div>
                        <div className="spec-item">
                            <span>Фронтальная камера</span>
                            <strong>
                                24 Мп
                            </strong>
                        </div>
                        <div className="spec-item">
                            <span>Аккумулятор</span>
                            <strong>
                                До 27 часов видео
                            </strong>
                        </div>
                        <div className="spec-item">
                            <span>Защита</span>
                            <strong>
                                IP68
                            </strong>
                        </div>
                        <div className="spec-item">
                            <span>Операционная система</span>
                            <strong>
                                iOS
                            </strong>
                        </div>
                        <div className="spec-item">
                            <span>Вес</span>
                            <strong>
                                199 г
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="product-description">
                    <h2>
                        Apple iPhone 17 Pro
                    </h2>
                    <p>
                        iPhone 17 Pro — производительный смартфон
                        с профессиональной камерой, ярким дисплеем
                        Super Retina XDR и новым поколением процессора.
                    </p>
                    <p>
                        Устройство сочетает премиальный дизайн,
                        высокую производительность и современные
                        технологии для работы, игр и съёмки.
                    </p>
                </div>
            </section>
        </main>
    );
}