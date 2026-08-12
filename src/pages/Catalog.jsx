import { useMemo, useState } from "react";
import { Link } from 'react-router-dom';
import Icon from "../components/Icon";
import {
    FiSliders,
    FiGrid,
    FiList,
    FiCheck,
    FiSmartphone,
    FiTablet,
    FiMonitor,
    FiHeadphones,
    FiWatch,
    FiBatteryCharging,
} from "react-icons/fi";

import "../components/css/catalog.css";

const products = [
    {
        id: 1,
        brand: "Apple",
        name: "Apple iPhone 17 Pro",
        color: "Космический ораньжевый",
        memory: "128 ГБ",
        price: 119990,
        image: "/catalog/iphone/iphone 17 pro/iphone-17-pro-cosmicorange-1181x865.png",
        isNew: true,
    },
    {
        id: 2,
        brand: "Samsung",
        name: "Samsung Galaxy S25 Ultra",
        color: "Чёрный",
        memory: "256 ГБ",
        price: 89990,
        image: "/catalog/samsung/samsung Galaxy S25 Ultra/6140e74195d24772aa1bf6dc5152c1b9-1181x865.png",
    },
    {
        id: 3,
        brand: "Xiaomi",
        name: "Xiaomi 14",
        color: "Чёрный",
        memory: "256 ГБ",
        price: 69990,
        image: "/catalog/xiaomi/xiaomi 14/400381497b.avif",
    },
    {
        id: 4,
        brand: "Apple",
        name: "Apple iPhone 14",
        color: "Синий",
        memory: "128 ГБ",
        price: 69990,
        image: "/catalog/iphone/iphone 14/orig.webp",
    },
    {
        id: 5,
        brand: "Samsung",
        name: "Samsung Galaxy A55",
        color: "Светло-фиолетовый",
        memory: "128 ГБ",
        price: 34990,
        image: "/catalog/samsung/samsung A55/orig (1).webp",
    },
    {
        id: 6,
        brand: "Google",
        name: "Google Pixel 8a",
        color: "Мятный",
        memory: "128 ГБ",
        price: 39990,
        image: "/catalog/google/Google Pixel 8a/8ri3qa1q3ck1co5yxl6ouce67ogrkpvq.jpg",
    },
    {
        id: 7,
        brand: "Realme",
        name: "Realme 12 Pro+",
        color: "Синий",
        memory: "256 ГБ",
        price: 29990,
        image: "/catalog/realme/Realme 12 Pro+/7319db1eeeceaa44aaee1a17a5b5fc08.webp",
    },
    {
        id: 8,
        brand: "Samsung",
        name: "Samsung Galaxy S24 Ultra",
        color: "Титановый серый",
        memory: "512 ГБ",
        price: 139990,
        image: "/catalog/samsung/samsung Galaxy S24 Ultra/orig.webp",
    },
    {
        id: 9,
        brand: "Xiaomi",
        name: "Xiaomi Redmi Note 13 Pro",
        color: "Чёрный",
        memory: "256 ГБ",
        price: 24990,
        image: "/catalog/xiaomi/Xiaomi Redmi Note 13 Pro/orig (1).webp",
    },
    {
        id: 10,
        brand: "POCO",
        name: "POCO X6 Pro",
        color: "Серый",
        memory: "256 ГБ",
        price: 23990,
        image: "/catalog/poco/POCO X6 Pro/orig.webp",
    },
];

const categories = [
    {
        title: "Смартфоны",
        icon: <Icon name="phone" size={25}/>,
    },
    {
        title: "Планшеты",
        icon: <Icon name="tablet" size={25}/>,
    },
    {
        title: "Ноутбуки",
        icon: <Icon name="laptop" size={30}/>,
    },
    {
        title: "Наушники",
        icon: <Icon name="headphones" size={25}/>,
    },
    {
        title: "Умные часы",
        icon: <Icon name="watch" size={25}/>,
    },
    {
        title: "Аксессуары",
        icon: <Icon name="accessories" size={25}/>,
    },
];

const brands = [
    "Apple",
    "Samsung",
    "Xiaomi",
    "Realme",
    "Google",
];

const memories = [
    "128 ГБ",
    "256 ГБ",
    "512 ГБ",
    "1 ТБ",
];

function formatPrice(price) {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
}

export default function Catalog() {
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedMemory, setSelectedMemory] = useState([]);
    const [sort, setSort] = useState("popular");
    const [view, setView] = useState("grid");
    const [favorites, setFavorites] = useState([]);
    const [cart, setCart] = useState([]);
    const [mobileFilters, setMobileFilters] = useState(false);

    const toggleBrand = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand)
                ? prev.filter((item) => item !== brand)
                : [...prev, brand]
        );
    };

    const toggleMemory = (memory) => {
        setSelectedMemory((prev) =>
            prev.includes(memory)
                ? prev.filter((item) => item !== memory)
                : [...prev, memory]
        );
    };

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const addToCart = (id) => {
        if (!cart.includes(id)) {
            setCart((prev) => [...prev, id]);
        }
    };

    const clearFilters = () => {
        setSelectedBrands([]);
        setSelectedMemory([]);
    };

    const filteredProducts = useMemo(() => {
        let result = [...products];

        if (selectedBrands.length > 0) {
            result = result.filter((product) =>
                selectedBrands.includes(product.brand)
            );
        }

        if (selectedMemory.length > 0) {
            result = result.filter((product) =>
                selectedMemory.includes(product.memory)
            );
        }

        if (sort === "price-asc") {
            result.sort((a, b) => a.price - b.price);
        }

        if (sort === "price-desc") {
            result.sort((a, b) => b.price - a.price);
        }

        if (sort === "name") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        }

        return result;
    }, [selectedBrands, selectedMemory, sort]);

    return (
        <main className="catalog">

            {/* Breadcrumbs */}

            <div className="catalog-breadcrumbs">
                <a href="/">Главная</a>
                <Icon name="arrowRight" size={10}/>
                <span>Каталог</span>
            </div>

            {/* Header */}

            <div className="catalog-header">

                <div>
                    <h1>Каталог</h1>
                    <p>
                        Найдено {filteredProducts.length} товаров
                    </p>
                </div>

                <button
                    className="mobile-filter-button"
                    onClick={() => setMobileFilters(true)}
                >
                    <FiSliders />
                    Фильтры
                </button>

            </div>

            <div className="catalog-layout">

                {/* SIDEBAR */}

                <aside
                    className={`catalog-sidebar ${
                        mobileFilters ? "catalog-sidebar-open" : ""
                    }`}
                >

                    <div className="mobile-sidebar-header">
                        <h3>Фильтры</h3>

                        <button
                            onClick={() => setMobileFilters(false)}
                        >
                            ×
                        </button>
                    </div>

                    {/* Categories */}

                    <div className="sidebar-section">

                        <h3>Категории</h3>

                        <div className="category-list">

                            {categories.map((category) => (
                                <button
                                    key={category.title}
                                    className={
                                        category.title === "Смартфоны"
                                            ? "category-item active"
                                            : "category-item"
                                    }
                                >
                                    <span className="category-icon">
                                        {category.icon}
                                    </span>

                                    {category.title}
                                </button>
                            ))}

                        </div>

                    </div>

                    {/* Price */}

                    <div className="sidebar-section">

                        <div className="filter-title">
                            <h3>Цена, ₽</h3>
                        </div>

                        <div className="price-slider">

                            <div className="slider-line">
                                <span />
                                <i />
                                <i />
                            </div>

                        </div>

                        <div className="price-inputs">

                            <input
                                type="text"
                                placeholder="10 000"
                            />

                            <span>—</span>

                            <input
                                type="text"
                                placeholder="150 000"
                            />

                        </div>

                    </div>

                    {/* Brands */}

                    <div className="sidebar-section">

                        <div className="filter-title">
                            <h3>Производитель</h3>

                            <button
                                className="clear-filter"
                                onClick={() => setSelectedBrands([])}
                            >
                                Очистить
                            </button>
                        </div>

                        <div className="checkbox-list">

                            {brands.map((brand) => (
                                <label
                                    className="checkbox-item"
                                    key={brand}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedBrands.includes(brand)}
                                        onChange={() =>
                                            toggleBrand(brand)
                                        }
                                    />

                                    <span className="custom-checkbox">
                                        {selectedBrands.includes(brand) && (
                                            <FiCheck />
                                        )}
                                    </span>

                                    {brand}
                                </label>
                            ))}

                        </div>

                    </div>

                    {/* Memory */}

                    <div className="sidebar-section">

                        <h3>Память</h3>

                        <div className="checkbox-list">

                            {memories.map((memory) => (
                                <label
                                    className="checkbox-item"
                                    key={memory}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedMemory.includes(memory)}
                                        onChange={() =>
                                            toggleMemory(memory)
                                        }
                                    />

                                    <span className="custom-checkbox">
                                        {selectedMemory.includes(memory) && (
                                            <FiCheck />
                                        )}
                                    </span>

                                    {memory}
                                </label>
                            ))}

                        </div>

                    </div>

                    <button
                        className="mobile-apply"
                        onClick={() => setMobileFilters(false)}
                    >
                        Показать товары
                    </button>

                </aside>

                {mobileFilters && (
                    <div
                        className="catalog-overlay"
                        onClick={() => setMobileFilters(false)}
                    />
                )}

                {/* CONTENT */}

                <section className="catalog-content">

                    <div className="products-toolbar">

                        <div className="toolbar-left">

                            <h2>Смартфоны</h2>

                        </div>

                        <div className="toolbar-right">

                            <div className="sort">

                                <span>Сортировка:</span>

                                <select
                                    value={sort}
                                    onChange={(e) =>
                                        setSort(e.target.value)
                                    }
                                >
                                    <option value="popular">
                                        Популярные
                                    </option>

                                    <option value="price-asc">
                                        Сначала дешевле
                                    </option>

                                    <option value="price-desc">
                                        Сначала дороже
                                    </option>

                                    <option value="name">
                                        По названию
                                    </option>
                                </select>
                                
                                <Icon name="arrowDown" size={15}/>

                            </div>

                            <div className="view-switcher">

                                <button
                                    className={
                                        view === "grid"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setView("grid")}
                                >
                                    <FiGrid />
                                </button>

                                <button
                                    className={
                                        view === "list"
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setView("list")}
                                >
                                    <FiList />
                                </button>

                            </div>

                        </div>

                    </div>

                    {/* Active filters */}

                    {(selectedBrands.length > 0 ||
                        selectedMemory.length > 0) && (

                        <div className="active-filters">

                            {selectedBrands.map((brand) => (
                                <button
                                    key={brand}
                                    onClick={() => toggleBrand(brand)}
                                >
                                    {brand} ×
                                </button>
                            ))}

                            {selectedMemory.map((memory) => (
                                <button
                                    key={memory}
                                    onClick={() => toggleMemory(memory)}
                                >
                                    {memory} ×
                                </button>
                            ))}

                            <button
                                className="remove-all"
                                onClick={clearFilters}
                            >
                                Сбросить всё
                            </button>

                        </div>
                    )}

                    {/* Products */}

                    <div
                        className={`products-grid ${
                            view === "list"
                                ? "products-list"
                                : ""
                        }`}
                    >

                        {filteredProducts.map((product) => (

                            <article
                                className="product-card"
                                key={product.id}
                            >

                                <Link to="/page" className="product-image">

                                    {product.isNew && (
                                        <span className="product-badge">
                                            Новинка
                                        </span>
                                    )}

                                    <button
                                        className={`favorite-button ${
                                            favorites.includes(product.id)
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            toggleFavorite(product.id)
                                        }
                                    >
                                        <Icon name="heart" size={15}/>
                                    </button>

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />

                                </Link>

                                <div className="product-info">

                                    <div className="product-brand">
                                        {product.brand}
                                    </div>

                                    <h3>
                                        {product.name}
                                    </h3>

                                    <p className="product-color">
                                        {product.color}
                                    </p>

                                    <div className="product-bottom">

                                        <strong>
                                            {formatPrice(product.price)}
                                        </strong>

                                        <button
                                            className={`cart-button ${
                                                cart.includes(product.id)
                                                    ? "added"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                addToCart(product.id)
                                            }
                                        >
                                            {cart.includes(product.id) ? (
                                                <FiCheck />
                                            ) : (
                                                <Icon name="basket" size={15}/>
                                            )}
                                        </button>

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                    {/* Empty */}

                    {filteredProducts.length === 0 && (

                        <div className="catalog-empty">

                            <div>
                                <FiSliders />
                            </div>

                            <h3>
                                Ничего не найдено
                            </h3>

                            <p>
                                Попробуйте изменить параметры фильтрации
                            </p>

                            <button onClick={clearFilters}>
                                Сбросить фильтры
                            </button>

                        </div>

                    )}

                    {/* Pagination */}

                    {filteredProducts.length > 0 && (

                        <div className="pagination">

                            <button className="pagination-arrow">
                                <Icon name="arrowLeft" size={15}/>
                            </button>

                            <button className="pagination-page active">
                                1
                            </button>

                            <button className="pagination-page">
                                2
                            </button>

                            <button className="pagination-page">
                                3
                            </button>

                            <span>...</span>

                            <button className="pagination-page">
                                18
                            </button>

                            <button className="pagination-arrow">
                                <Icon name="arrowRight" size={15}/>
                            </button>

                        </div>
                    )}

                    <div className="products-count">
                        Показано 1–{filteredProducts.length} из 215 товаров
                    </div>

                </section>

            </div>

        </main>
    );
}