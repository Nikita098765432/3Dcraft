// Функция для добавления товара в корзину
function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity += 1; // Увеличить количество, если товар уже есть
    } else {
        cart.push({ id, name, price, quantity: 1 }); // Добавить новый товар
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} добавлен в корзину!`);
}

// Функция для инициализации добавления товара в корзину
function setupAddToCartButtons() {
    const buttons = document.querySelectorAll('.product-card .add-to-cart'); // Кнопки внутри карточек товаров

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card'); // Найти родительскую карточку товара
            const id = parseInt(productCard.getAttribute('data-id'));
            const name = productCard.getAttribute('data-name');
            const price = parseFloat(productCard.getAttribute('data-price'));

            addToCart(id, name, price); // Добавить товар в корзину
        });
    });
}

// Инициализация кнопок при загрузке страницы
document.addEventListener('DOMContentLoaded', setupAddToCartButtons);
}