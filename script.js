const products = [
  {
    id: 1,
    name: 'Гречневый корм для щенков',
    category: 'dogs',
    price: 1490,
    oldPrice: 1890,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
    badge: 'Новинка',
    description: 'Сбалансированный сухой корм для активных щенков с гречкой, мясом и полезными витаминами. Подходит для ежедневного питания и помогает поддерживать иммунитет, крепкие зубы и стабильный обмен веществ.',
    features: ['Гречка и мясо в основе рецепта', 'Поддержка иммунитета и энергии', 'Мягкий вкус для капризных щенков']
  },
  {
    id: 2,
    name: 'Когтеточка "Клубок"',
    category: 'cats',
    price: 980,
    oldPrice: 1300,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80',
    badge: 'Хит',
    description: 'Высокая когтеточка из плотного сизаля с устойчивым основанием, чтобы кошка могла точить когти, играть и отдыхать без лишнего шума в квартире.',
    features: ['Устойчивое основание для безопасности', 'Грубая поверхность для заточки когтей', 'Компактный размер для дома и квартиры']
  },
  {
    id: 3,
    name: 'Игрушка для зубов Bone',
    category: 'toys',
    price: 540,
    oldPrice: 760,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80',
    badge: 'Популярно',
    description: 'Игрушка-кача для жевания и игры помогает снять стресс, поддерживает гигиену зубов и даёт питомцу занятие на несколько часов.',
    features: ['Мягкая текстура для безопасного жевания', 'Подходит для щенков и молодых собак', 'Лёгкий материал без резкого запаха']
  },
  {
    id: 4,
    name: 'Дождевик для прогулок',
    category: 'accessories',
    price: 1290,
    oldPrice: 1690,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80',
    badge: 'Осень',
    description: 'Лёгкий и тёплый дождевик для прогулок в ветреную погоду: защищает от сырости, не мешает движениям и удобен для ежедневного использования.',
    features: ['Водонепроницаемая ткань', 'Свободный крой для комфортных прогулок', 'Отражающие детали для видимости вечером']
  },
  {
    id: 5,
    name: 'Лежанка Luxe Cloud',
    category: 'dogs',
    price: 2190,
    oldPrice: 2790,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
    badge: 'Топ',
    description: 'Премиальная лежанка с мягкой поддержкой спины и антискользящим дном, которая создаёт уютное место для сна после активных прогулок.',
    features: ['Мягкая пена и приятная ткань', 'Прочный каркас и антискользящее основание', 'Подходит для крупных и средних собак']
  },
  {
    id: 6,
    name: 'Корм с лососем для кошек',
    category: 'cats',
    price: 860,
    oldPrice: 1100,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=900&q=80',
    badge: 'Премиум',
    description: 'Корм с лососем и овощами для взрослых кошек, который помогает поддерживать здоровую шерсть, нормальный вес и хороший аппетит.',
    features: ['Белок лосося в составе', 'Поддержка блестящей шерсти', 'Сбалансированный состав без лишних добавок']
  },
  {
    id: 7,
    name: 'Мяч-головоломка',
    category: 'toys',
    price: 690,
    oldPrice: 930,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=900&q=80',
    badge: 'Игровой',
    description: 'Интерактивная игрушка с скрытыми лакомствами, которая развлекает собаку и помогает тренировать внимание, ловкость и терпение.',
    features: ['Развивает интеллект и ловкость', 'Внутренний отсек для лакомства', 'Прочный корпус для длительной игры']
  },
  {
    id: 8,
    name: 'Шлейка Urban Pet',
    category: 'accessories',
    price: 1420,
    oldPrice: 1860,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    badge: 'Удобно',
    description: 'Комфортная шлейка с мягкими вставками и регулировкой по размеру. Подходит для ежедневных прогулок и помогает распределять нагрузку равномерно.',
    features: ['Мягкая обивка без натирания', 'Регулировка под рост и размер питомца', 'Надёжный замок и крепление для поводка']
  },
  {
    id: 9,
    name: 'Миска антискользящая',
    category: 'dogs',
    price: 640,
    oldPrice: 820,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    badge: 'Легко',
    description: 'Антискользящая миска со стальным основанием и широким дном, которая снижает шум и помогает любимцу комфортно есть и пить.',
    features: ['Противоскользящее основание', 'Лёгкая в уходе поверхность', 'Подходит для корма и воды']
  },
  {
    id: 10,
    name: 'Домик для кота Soft Nest',
    category: 'cats',
    price: 2490,
    oldPrice: 3090,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=80',
    badge: 'Комфорт',
    description: 'Тёплый домик для кота с мягким внутренним слоем и уютной формой, который создаёт место для отдыха, сна и спокойствия в доме.',
    features: ['Тёплая и мягкая внутренняя поверхность', 'Спокойное место для сна и отдыха', 'Прочная форма и комфортный размер']
  }
];

const categoryMap = {
  all: 'Все',
  dogs: 'Собаки',
  cats: 'Кошки',
  toys: 'Игрушки',
  accessories: 'Аксессуары'
};

const requestedCategory = new URLSearchParams(window.location.search).get('category');

const state = {
  filter: Object.hasOwn(categoryMap, requestedCategory) ? requestedCategory : 'all',
  sort: 'default',
  search: '',
  favorites: JSON.parse(localStorage.getItem('pawshop-favorites') || '[]'),
  cart: JSON.parse(localStorage.getItem('pawshop-cart') || '[]'),
  balance: Number(localStorage.getItem('pawshop-balance') || 15000),
  orders: JSON.parse(localStorage.getItem('pawshop-orders') || 'null') || [
    {
      id: 1,
      name: 'Гречневый корм для щенков',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
      orderDate: '12.09.2026',
      shipmentDate: '15.09.2026',
      status: 'Отправлен',
      tracking: 'Алматы → Астана',
      location: 'Пункт выдачи в Астане'
    },
    {
      id: 2,
      name: 'Лежанка Luxe Cloud',
      image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
      orderDate: '20.09.2026',
      shipmentDate: '22.09.2026',
      status: 'В пути',
      tracking: 'Караганда → Астана',
      location: 'Склад в Астане'
    },
    {
      id: 3,
      name: 'Игрушка для зубов Bone',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80',
      orderDate: '03.10.2026',
      shipmentDate: '05.10.2026',
      status: 'Доставляется',
      tracking: 'Шымкент → Астана',
      location: 'Курьер в Астане'
    }
  ]
};

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const favoriteButton = document.getElementById('favoriteButton');
const favoriteCount = document.getElementById('favoriteCount');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartContent = document.getElementById('cartContent');
const promoButton = document.getElementById('promoButton');
const promoButtonStrip = document.getElementById('promoButtonStrip');
const scrollTopButton = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const toastContainer = document.getElementById('toastContainer');
const themeToggle = document.getElementById('themeToggle');
const themeToggleLabel = document.querySelector('[data-theme-label]');

const cartModal = document.getElementById('cartModal');
const promoModal = document.getElementById('promoModal');
const paymentModal = document.getElementById('paymentModal');
const paymentTotal = document.getElementById('paymentTotal');
const paymentBalance = document.getElementById('paymentBalance');
const savedCardBox = document.getElementById('savedCardBox');
const paymentMethodInputs = document.querySelectorAll('input[name="paymentMethod"]');
const cardPaymentPanel = document.getElementById('cardPaymentPanel');
const cardHolderInput = document.getElementById('cardHolder');
const cardNumberInput = document.getElementById('cardNumber');
const cardExpiryInput = document.getElementById('cardExpiry');
const cardCvvInput = document.getElementById('cardCvv');
const saveCardCheckbox = document.getElementById('saveCardCheckbox');
const ordersGrid = document.getElementById('ordersGrid');

function saveCart() {
  localStorage.setItem('pawshop-cart', JSON.stringify(state.cart));
}

function saveFavorites() {
  localStorage.setItem('pawshop-favorites', JSON.stringify(state.favorites));
}

function saveOrders() {
  localStorage.setItem('pawshop-orders', JSON.stringify(state.orders));
}

function saveBalance() {
  localStorage.setItem('pawshop-balance', String(state.balance));
}

function updateBalanceDisplay() {
  const balanceNodes = document.querySelectorAll('[data-balance-display]');
  balanceNodes.forEach((node) => {
    node.textContent = formatPrice(state.balance);
  });
}

function setTheme(theme, persist = true) {
  const activeTheme = theme === 'dark' ? 'dark' : 'light';
  const isDark = activeTheme === 'dark';
  document.documentElement.dataset.theme = activeTheme;

  if (themeToggle) {
    themeToggle.checked = isDark;
    themeToggle.setAttribute('aria-checked', String(isDark));
  }

  if (themeToggleLabel) {
    themeToggleLabel.textContent = isDark ? 'Тёмная' : 'Светлая';
  }

  if (persist) {
    localStorage.setItem('mypet-theme', activeTheme);
  }
}

function initializeTheme() {
  setTheme(localStorage.getItem('mypet-theme') || 'light', false);
}

function highlightCurrentPage() {
  const currentPath = window.location.pathname;
  const navigationLinks = document.querySelectorAll(
    '.main-nav a, .header-tools a.icon-button, .header-tools a.cart-button'
  );

  navigationLinks.forEach((link) => {
    const target = new URL(link.getAttribute('href'), window.location.href);
    if (target.origin === window.location.origin && target.pathname === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

function getFilteredProducts() {
  let result = [...products];

  if (state.filter !== 'all') {
    result = result.filter((product) => product.category === state.filter);
  }

  if (state.search.trim()) {
    const term = state.search.toLowerCase();
    result = result.filter((product) => {
      return (
        product.name.toLowerCase().includes(term) ||
        categoryMap[product.category].toLowerCase().includes(term)
      );
    });
  }

  if (state.sort === 'price-asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (state.sort === 'price-desc') {
    result.sort((a, b) => b.price - a.price);
  } else if (state.sort === 'rating-desc') {
    result.sort((a, b) => b.rating - a.rating);
  }

  return result;
}

function formatPrice(value) {
  return new Intl.NumberFormat('ru-RU').format(value) + ' ₸';
}

function showToast(message) {
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2200);
}

function ensureProductModal() {
  if (document.getElementById('productModal')) return;

  const modal = document.createElement('div');
  modal.id = 'productModal';
  modal.className = 'modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="modal-backdrop" data-close="productModal"></div>
    <div class="modal-dialog product-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="productModalTitle">
      <button class="close-btn" type="button" data-close="productModal" aria-label="Закрыть">×</button>
      <div class="product-modal-content"></div>
    </div>
  `;
  document.body.appendChild(modal);
}

function openProductModal(productId) {
  ensureProductModal();

  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;

  const modal = document.getElementById('productModal');
  if (!modal) return;

  const currentFavorites = state.favorites.includes(product.id);
  const isFavorite = currentFavorites ? '♥' : '♡';

  const content = modal.querySelector('.product-modal-content');
  content.innerHTML = `
    <div class="product-modal-image">
      <img src="${product.image}" alt="${product.name}" />
      <span class="product-badge">${product.badge}</span>
    </div>
    <div class="product-modal-info">
      <span class="eyebrow accent">${categoryMap[product.category]}</span>
      <h3 id="productModalTitle">${product.name}</h3>
      <div class="rating">★ ${product.rating}</div>
      <div class="price-box">
        <span class="price">${formatPrice(product.price)}</span>
        <span class="old-price">${formatPrice(product.oldPrice)}</span>
      </div>
      <p class="product-detail-description">${product.description}</p>
      <ul class="product-detail-list">
        ${product.features.map((feature) => `<li>${feature}</li>`).join('')}
      </ul>
      <div class="product-detail-actions">
        <button type="button" class="primary-btn modal-buy" data-product-id="${product.id}">В корзину</button>
        <button type="button" class="secondary-btn modal-favorite" data-product-id="${product.id}" aria-label="Добавить в избранное">${isFavorite}</button>
      </div>
    </div>
  `;

  openModal('productModal');
}

function renderOrders() {
  if (!ordersGrid) return;

  if (!state.orders.length) {
    ordersGrid.innerHTML = `
      <div class="cart-empty" style="grid-column: 1 / -1; padding: 46px 22px;">
        История заказов пуста. После оформления покупок они появятся здесь.
      </div>
    `;
    return;
  }

  ordersGrid.innerHTML = state.orders
    .map(
      (item) => `
        <article class="order-card">
          <div class="order-card-image">
            <img src="${item.image}" alt="${item.name}" />
          </div>
          <div class="order-card-body">
            <div class="order-card-top">
              <div class="order-name">${item.name}${item.quantity > 1 ? ` × ${item.quantity}` : ''}</div>
              <span class="order-status">${item.status}</span>
            </div>

            <div class="order-meta">
              <div class="order-meta-item">
                <span>Дата заказа</span>
                <strong>${item.orderDate}</strong>
              </div>
              <div class="order-meta-item">
                <span>Дата отправки</span>
                <strong>${item.shipmentDate}</strong>
              </div>
              <div class="order-meta-item">
                <span>Отслеживание</span>
                <strong>${item.tracking}</strong>
              </div>
            </div>

            <div class="order-track">
              <span>${item.location}</span>
              <small>Live tracking</small>
            </div>

            <div class="order-actions">
              <button class="cancel-order-btn" type="button" data-order-id="${item.id}">Отменить заказ</button>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function updateBalanceTopUpPreview() {
  const amountInput = document.getElementById('balanceAmountInput');
  const preview = document.getElementById('balanceTopUpAmount');

  if (!amountInput || !preview) return;

  const value = Number(amountInput.value || 0);
  preview.textContent = formatPrice(value > 0 ? value : 0);
}

function clearOrderHistory() {
  state.orders = [];
  saveOrders();
  renderOrders();
  showToast('История заказов очищена');
}

function cancelOrder(orderId) {
  const id = Number(orderId);
  const order = state.orders.find((item) => item.id === id);
  if (!order) return;

  const product = products.find((item) => item.name === order.name);
  const refundAmount = Number(
    order.total ?? (order.price ?? product?.price ?? 0) * (order.quantity || 1)
  );

  state.orders = state.orders.filter((item) => item.id !== id);
  saveOrders();
  if (Number.isFinite(refundAmount) && refundAmount > 0) {
    state.balance += refundAmount;
    saveBalance();
    updateBalanceDisplay();
  }
  renderOrders();
  showToast(
    refundAmount > 0
      ? `Заказ отменён. ${formatPrice(refundAmount)} возвращено на баланс`
      : 'Заказ отменён'
  );
}

function openBalanceModal() {
  const amountInput = document.getElementById('balanceAmountInput');
  if (amountInput) {
    amountInput.value = '5000';
    updateBalanceTopUpPreview();
  }
  openModal('balanceModal');
}

function confirmTopUp() {
  const amountInput = document.getElementById('balanceAmountInput');
  if (!amountInput) return;

  const amount = Number(amountInput.value || 0);

  if (!Number.isFinite(amount) || amount <= 0) {
    showToast('Введите корректную сумму пополнения');
    return;
  }

  state.balance += amount;
  saveBalance();
  updateBalanceDisplay();
  closeModal('balanceModal');
  showToast(`Баланс пополнен на ${formatPrice(amount)}`);
}

function renderProducts() {
  if (!productGrid) return;

  let filteredProducts = getFilteredProducts();
  const favoritesOnly = productGrid.dataset.favoritesOnly === 'true';

  if (favoritesOnly) {
    filteredProducts = filteredProducts.filter((product) => state.favorites.includes(product.id));
  }

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <div class="cart-empty" style="grid-column: 1 / -1; padding: 46px 22px;">
        ${favoritesOnly ? 'В избранном пока нет товаров.' : 'По вашему запросу ничего не найдено.'}
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts
    .map((product) => {
      const isFavorite = state.favorites.includes(product.id);
      const quantity = state.cart.find((item) => item.id === product.id)?.quantity || 0;

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-image">
            <span class="product-badge">${product.badge}</span>
            <button
              class="favorite-toggle ${isFavorite ? 'active' : ''}"
              type="button"
              data-product-id="${product.id}"
              aria-label="Добавить в избранное"
            >
              ${isFavorite ? '♥' : '♡'}
            </button>
            <img src="${product.image}" alt="${product.name}" />
          </div>
          <div class="product-info">
            <div class="product-top">
              <div class="product-name">${product.name}</div>
            </div>
            <div class="rating">★ ${product.rating}</div>
            <div class="price-box">
              <span class="price">${formatPrice(product.price)}</span>
              <span class="old-price">${formatPrice(product.oldPrice)}</span>
            </div>
            <div class="discount-tag">-${Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%</div>
            <p class="product-short-description">${product.description}</p>
            <div class="product-actions">
              <button class="add-cart-btn" data-product-id="${product.id}" type="button">
                ${quantity > 0 ? 'Добавить ещё' : 'В корзину'}
              </button>
              <button class="secondary-btn details-btn" data-product-id="${product.id}" type="button">
                Подробнее
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

function renderCart() {
  if (!cartContent) return;

  if (!state.cart.length) {
    cartContent.innerHTML = `
      <div class="cart-empty">
        Ваша корзина пуста. Добавьте что-нибудь из каталога.
      </div>
    `;
    return;
  }

  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartContent.innerHTML = `
    ${state.cart
      .map((item) => {
        return `
          <div class="cart-item" data-cart-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" />
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-meta">
                <span>${formatPrice(item.price)}</span>
                <div class="quantity-controls">
                  <button class="qty-btn" data-action="decrease" data-product-id="${item.id}" type="button">−</button>
                  <span>${item.quantity}</span>
                  <button class="qty-btn" data-action="increase" data-product-id="${item.id}" type="button">+</button>
                </div>
              </div>
            </div>
            <div class="cart-item-total">
              <strong>${formatPrice(item.price * item.quantity)}</strong>
              <button class="remove-btn" type="button" data-product-id="${item.id}">Удалить</button>
            </div>
          </div>
        `;
      })
      .join('')}
    <div class="cart-footer">
      <div class="cart-total">Итого: ${formatPrice(total)}</div>
      <button class="primary-btn" id="checkoutButton" type="button">Оформить заказ</button>
    </div>
  `;
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function loadSavedCard() {
  try {
    return JSON.parse(localStorage.getItem('pawshop-bound-card') || 'null');
  } catch (error) {
    return null;
  }
}

function saveSavedCard(card) {
  localStorage.setItem('pawshop-bound-card', JSON.stringify(card));
}

function renderSavedCard() {
  if (!savedCardBox) return;

  const savedCard = loadSavedCard();

  if (savedCard) {
    savedCardBox.innerHTML = `
      <div class="saved-card-meta">
        <span>Привязана карта</span>
        <span class="saved-card-number">•••• ${savedCard.last4}</span>
      </div>
      <button class="link-btn" type="button" id="changeCardButton">Изменить</button>
    `;
    cardHolderInput.value = savedCard.holder || '';
    cardNumberInput.value = formatCardNumber(savedCard.cardNumber || '');
    cardExpiryInput.value = savedCard.expiry || '';
    cardCvvInput.value = savedCard.cvv || '';
    saveCardCheckbox.checked = true;
    return;
  }

  savedCardBox.innerHTML = `
    <div class="saved-card-meta">
      <span>Карта ещё не привязана</span>
      <span class="saved-card-number">Добавьте карту для оплаты</span>
    </div>
    <button class="link-btn" type="button" id="changeCardButton">Привязать</button>
  `;
  saveCardCheckbox.checked = true;
}

function formatCardNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(value) {
  const digits = value.replace(/\D/g, '').slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function updatePaymentSummary() {
  const total = getCartTotal();

  if (paymentTotal) {
    paymentTotal.textContent = formatPrice(total);
  }

  if (paymentBalance) {
    paymentBalance.textContent = formatPrice(state.balance - total);
    paymentBalance.parentElement.classList.toggle('balance-insufficient', state.balance < total);
  }
}

function updatePaymentMethodState() {
  if (!cardPaymentPanel) return;

  const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'card';
  cardPaymentPanel.classList.toggle('hidden', selectedMethod !== 'card');
}

function bindCardFromForm() {
  const cardNumber = cardNumberInput.value.replace(/\s+/g, '');
  const expiry = cardExpiryInput.value.trim();
  const cardHolder = cardHolderInput.value.trim();
  const cvv = cardCvvInput.value.trim();

  if (!/^\d{16}$/.test(cardNumber)) {
    showToast('Введите корректный номер карты из 16 цифр');
    return false;
  }

  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
    showToast('Введите срок карты в формате MM/YY');
    return false;
  }

  if (!/^[A-Za-zА-Яа-яЁё\s-]+$/.test(cardHolder) || cardHolder.length < 2) {
    showToast('Укажите корректное имя владельца карты');
    return false;
  }

  if (!/^\d{3,4}$/.test(cvv)) {
    showToast('Введите корректный CVV');
    return false;
  }

  const cardData = {
    last4: cardNumber.slice(-4),
    expiry,
    holder: cardHolder,
    cardNumber,
    cvv
  };

  if (saveCardCheckbox.checked) {
    saveSavedCard(cardData);
  }

  renderSavedCard();
  return true;
}

function openCheckout() {
  if (!state.cart.length) {
    showToast('Добавьте товары в корзину перед оформлением');
    return;
  }

  updatePaymentSummary();
  renderSavedCard();
  updatePaymentMethodState();
  openModal('paymentModal');
}

function finalizePayment() {
  const orderTotal = getCartTotal();

  if (!Number.isFinite(state.balance) || state.balance < orderTotal) {
    showToast('Недостаточно средств на балансе. Пополните баланс перед покупкой.');
    return;
  }

  const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'card';

  if (selectedMethod === 'card') {
    const cardData = loadSavedCard();
    const isFormValid = bindCardFromForm();

    if (!isFormValid) {
      return;
    }

    if (!cardData && !saveCardCheckbox.checked) {
      showToast('Сначала привяжите карту или включите сохранение карты');
      return;
    }
  }

  state.balance -= orderTotal;
  saveBalance();
  updateBalanceDisplay();

  const orderDate = new Date();
  const shipmentDate = new Date(orderDate);
  shipmentDate.setDate(shipmentDate.getDate() + 3);
  const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const shippingCities = ['Алматы', 'Караганда', 'Шымкент', 'Павлодар', 'Актобе'];
  const newOrders = state.cart.map((item, index) => ({
    id: Date.now() + index,
    name: item.name,
    image: item.image,
    quantity: item.quantity,
    price: item.price,
    total: item.price * item.quantity,
    orderDate: orderDate.toLocaleDateString('ru-RU', dateOptions),
    shipmentDate: shipmentDate.toLocaleDateString('ru-RU', dateOptions),
    status: 'Принят',
    tracking: `${shippingCities[(state.orders.length + index) % shippingCities.length]} → Астана`,
    location: 'Пункт выдачи в Астане'
  }));

  state.orders = [...newOrders, ...state.orders];
  saveOrders();
  state.cart = [];
  saveCart();
  renderCart();
  updateCounts();
  closeModal('paymentModal');
  showToast('Заказ оформлен успешно');
}

function updateCounts() {
  if (favoriteCount) {
    favoriteCount.textContent = state.favorites.length;
  }

  const favoritePanelCount = document.getElementById('favoritePanelCount');
  if (favoritePanelCount) {
    favoritePanelCount.textContent = state.favorites.length;
  }

  if (cartCount) {
    cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  const cartPanelCount = document.getElementById('cartPanelCount');
  if (cartPanelCount) {
    cartPanelCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  }
}

function animateProductFlight(addButton) {
  if (!addButton || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const productImage = addButton.closest('.product-card')?.querySelector('.product-image img');
  const cartControl = document.querySelector('.cart-button');
  if (!productImage || !cartControl) return;

  const start = productImage.getBoundingClientRect();
  const target = cartControl.getBoundingClientRect();
  if (!start.width || !start.height || !target.width || !target.height) return;

  const flightImage = productImage.cloneNode();
  flightImage.className = 'cart-flight-image';
  flightImage.alt = '';
  flightImage.setAttribute('aria-hidden', 'true');
  Object.assign(flightImage.style, {
    left: `${start.left}px`,
    top: `${start.top}px`,
    width: `${start.width}px`,
    height: `${start.height}px`,
    transformOrigin: 'top left'
  });
  document.body.appendChild(flightImage);

  const targetSize = Math.min(28, target.width * 0.22, target.height * 0.45);
  const scale = targetSize / Math.max(start.width, start.height);
  const endX = target.left + target.width / 2 - start.left - (start.width * scale) / 2;
  const endY = target.top + target.height / 2 - start.top - (start.height * scale) / 2;
  const animation = flightImage.animate(
    [
      { transform: 'translate(0, 0) scale(1)', opacity: 1, borderRadius: '18px' },
      {
        transform: `translate(${endX * 0.55}px, ${endY * 0.45 - 64}px) scale(${0.55 + scale * 0.45})`,
        opacity: 0.92,
        borderRadius: '50%',
        offset: 0.58
      },
      { transform: `translate(${endX}px, ${endY}px) scale(${scale})`, opacity: 0.15, borderRadius: '50%' }
    ],
    { duration: 680, easing: 'cubic-bezier(0.22, 0.72, 0.25, 1)', fill: 'forwards' }
  );

  animation.onfinish = () => flightImage.remove();
  animation.oncancel = () => flightImage.remove();
}

function addToCart(productId, addButton) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) return;

  const existingItem = state.cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCounts();
  renderCart();
  animateProductFlight(addButton);
  if (addButton) {
    addButton.textContent = 'Добавлено ✓';
    addButton.classList.add('is-added');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addButton.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(0.96)' }, { transform: 'scale(1)' }],
        { duration: 300, easing: 'ease-out' }
      );

      document.querySelectorAll('.cart-button').forEach((cartControl) => {
        cartControl.animate(
          [{ transform: 'scale(1)' }, { transform: 'scale(1.07)' }, { transform: 'scale(1)' }],
          { duration: 420, easing: 'ease-out' }
        );
      });
    }

    window.clearTimeout(addButton.feedbackTimeout);
    addButton.feedbackTimeout = window.setTimeout(() => {
      addButton.textContent = 'Добавить ещё';
      addButton.classList.remove('is-added');
    }, 850);
  }

  showToast(`${product.name} добавлен в корзину`);
}

function toggleFavorite(productId) {
  const id = Number(productId);

  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter((item) => item !== id);
    showToast('Товар удалён из избранного');
  } else {
    state.favorites.push(id);
    showToast('Товар добавлен в избранное');
  }

  saveFavorites();
  updateCounts();
  renderProducts();
}

function changeQuantity(productId, delta) {
  const item = state.cart.find((entry) => entry.id === Number(productId));
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== Number(productId));
  }

  saveCart();
  updateCounts();
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== Number(productId));
  saveCart();
  updateCounts();
  renderCart();
  showToast('Товар удалён из корзины');
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function initializeCategoryButtons() {
  document.querySelectorAll('.category-card').forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      state.filter = category;

      document.querySelectorAll('.category-card').forEach((card) => {
        card.classList.toggle('active', card.dataset.category === state.filter);
      });

      document.querySelectorAll('.filter-button').forEach((filterButton) => {
        filterButton.classList.toggle('active', filterButton.dataset.filter === state.filter);
      });

      renderProducts();
    });
  });
}

function initializeFilterButtons() {
  document.querySelectorAll('.filter-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.filter === state.filter);

    button.addEventListener('click', () => {
      const value = button.dataset.filter;
      state.filter = value;

      document.querySelectorAll('.filter-button').forEach((item) => {
        item.classList.toggle('active', item === button);
      });

      document.querySelectorAll('.category-card').forEach((card) => {
        card.classList.toggle('active', card.dataset.category === state.filter);
      });

      renderProducts();
    });
  });
}

function bindEvents() {
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      setTheme(themeToggle.checked ? 'dark' : 'light');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      state.search = event.target.value.trim();
      renderProducts();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (event) => {
      state.sort = event.target.value;
      renderProducts();
    });
  }

  if (productGrid) {
    productGrid.addEventListener('click', (event) => {
      const addButton = event.target.closest('.add-cart-btn');
      if (addButton) {
        addToCart(addButton.dataset.productId, addButton);
        return;
      }

      const favoriteButtonElement = event.target.closest('.favorite-toggle');
      if (favoriteButtonElement) {
        toggleFavorite(favoriteButtonElement.dataset.productId);
        return;
      }

      const detailsButton = event.target.closest('.details-btn');
      if (detailsButton) {
        openProductModal(detailsButton.dataset.productId);
        return;
      }

      const card = event.target.closest('.product-card');
      if (card && !event.target.closest('button')) {
        openProductModal(card.dataset.id);
      }
    });
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-product-id]');
    const quantityButton = event.target.closest('[data-action]');

    if (event.target.closest('.modal-buy')) {
      const productId = event.target.closest('.modal-buy').dataset.productId;
      addToCart(productId, event.target.closest('.modal-buy'));
      closeModal('productModal');
      return;
    }

    if (event.target.closest('.modal-favorite')) {
      const productId = event.target.closest('.modal-favorite').dataset.productId;
      toggleFavorite(productId);
      const button = event.target.closest('.modal-favorite');
      const isFavorite = state.favorites.includes(Number(productId));
      button.textContent = isFavorite ? '♥' : '♡';
      button.setAttribute('aria-label', isFavorite ? 'Удалить из избранного' : 'Добавить в избранное');
      return;
    }

    if (quantityButton) {
      const action = quantityButton.dataset.action;
      const productId = quantityButton.dataset.productId;
      if (action === 'increase') changeQuantity(productId, 1);
      if (action === 'decrease') changeQuantity(productId, -1);
    }

    if (event.target.closest('.remove-btn')) {
      const id = event.target.closest('.remove-btn').dataset.productId;
      removeFromCart(id);
    }

    if (event.target.closest('[data-close]')) {
      const modalId = event.target.closest('[data-close]').dataset.close;
      closeModal(modalId);
    }

    if (event.target.closest('#checkoutButton')) {
      closeModal('cartModal');
      openCheckout();
    }

    if (event.target.closest('#promoButton') || event.target.closest('#promoButtonStrip')) {
      openModal('promoModal');
    }

    if (event.target.closest('#copyPromoCode')) {
      const code = document.getElementById('promoCodeBox').textContent;
      navigator.clipboard.writeText(code).then(() => {
        showToast('Промокод скопирован');
      });
    }

    if (event.target.closest('#changeCardButton')) {
      const savedCard = loadSavedCard();
      if (savedCard) {
        cardNumberInput.value = formatCardNumber(savedCard.cardNumber || '');
        cardHolderInput.value = savedCard.holder || '';
        cardExpiryInput.value = savedCard.expiry || '';
        cardCvvInput.value = savedCard.cvv || '';
      }
      showToast('Введите данные карты и нажмите «Оплатить»');
    }

    if (event.target.closest('.cancel-order-btn')) {
      const orderId = event.target.closest('.cancel-order-btn').dataset.orderId;
      cancelOrder(orderId);
    }

    if (event.target.closest('#clearOrdersBtn')) {
      clearOrderHistory();
    }

    if (event.target.closest('#topUpBalanceButton')) {
      openBalanceModal();
    }

    if (event.target.closest('#confirmTopUpBtn')) {
      confirmTopUp();
    }

    if (event.target.closest('#cancelTopUpBtn')) {
      closeModal('balanceModal');
    }

    if (event.target.closest('#confirmPaymentBtn')) {
      finalizePayment();
    }

    if (event.target.closest('.close-btn')) {
      const modalId = event.target.closest('.close-btn').dataset.close;
      if (modalId) {
        closeModal(modalId);
      }
    }
  });

  if (paymentMethodInputs && paymentMethodInputs.length) {
    paymentMethodInputs.forEach((input) => {
      input.addEventListener('change', updatePaymentMethodState);
    });
  }

  if (cardNumberInput) {
    cardNumberInput.addEventListener('input', (event) => {
      event.target.value = formatCardNumber(event.target.value);
    });
  }

  const balanceAmountInput = document.getElementById('balanceAmountInput');
  if (balanceAmountInput) {
    balanceAmountInput.addEventListener('input', updateBalanceTopUpPreview);
  }

  if (cardExpiryInput) {
    cardExpiryInput.addEventListener('input', (event) => {
      event.target.value = formatExpiry(event.target.value);
    });
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('modal-backdrop')) {
      const modalId = target.closest('.modal')?.id;
      if (modalId) closeModal(modalId);
    }
  });

  if (scrollTopButton) {
    window.addEventListener('scroll', () => {
      scrollTopButton.classList.toggle('visible', window.scrollY > 420);
    });

    scrollTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(contactForm);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || name.length < 2) {
      showToast('Пожалуйста, введите корректное имя');
      return;
    }

    if (!emailRegex.test(email)) {
      showToast('Введите корректный email');
      return;
    }

      if (!message || message.length < 10) {
        showToast('Сообщение должно содержать минимум 10 символов');
        return;
      }

      showToast('Ваше сообщение отправлено');
      contactForm.reset();
    });
  }
}

function init() {
  initializeTheme();
  highlightCurrentPage();
  updateCounts();
  updateBalanceDisplay();
  renderProducts();
  renderOrders();
  renderCart();
  if (document.querySelectorAll('.category-card').length) {
    initializeCategoryButtons();
  }
  if (document.querySelectorAll('.filter-button').length) {
    initializeFilterButtons();
  }
  updatePaymentMethodState();
  renderSavedCard();
  bindEvents();
}

init();