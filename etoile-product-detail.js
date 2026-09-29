(() => {
  const page = document.querySelector('.etoile-product-page');
  if (!page) return;

  const gallery = page.querySelector('.ep-thumbnails');
  const mainImage = page.querySelector('.ep-main-photo img');
  const lightbox = page.querySelector('.ep-lightbox');
  let quantity = 1;

  gallery?.addEventListener('click', (event) => {
    const thumbnail = event.target.closest('button[data-image]');
    if (!thumbnail) return;
    gallery.querySelectorAll('button').forEach((button) => {
      const active = button === thumbnail;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-selected', String(active));
    });
    mainImage.src = thumbnail.dataset.image;
    mainImage.alt = thumbnail.dataset.alt;
  });

  page.querySelector('.ep-main-photo')?.addEventListener('click', () => {
    const image = lightbox.querySelector('img');
    image.src = mainImage.src;
    image.alt = mainImage.alt;
    lightbox.showModal();
  });
  lightbox?.querySelector('button')?.addEventListener('click', () => lightbox.close());
  lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });

  page.querySelectorAll('[data-quantity]').forEach((button) => button.addEventListener('click', () => {
    quantity = Math.max(1, quantity + (button.dataset.quantity === 'increase' ? 1 : -1));
    page.querySelector('.ep-quantity output').textContent = quantity;
  }));

  page.querySelectorAll('[data-cart-action]').forEach((button) => button.addEventListener('click', () => {
    if (typeof window.goCart123_mask === 'function') {
      window.goCart123_mask(page.dataset.productNo);
      return;
    }
    window.location.href = 'index.php?action=shopping_cart';
  }));

  page.querySelector('[data-wishlist]')?.addEventListener('click', (event) => {
    const button = event.currentTarget;
    const active = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', String(!active));
    button.classList.toggle('is-saved', !active);
  });

  const menuButton = page.querySelector('.ep-menu-toggle');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    page.querySelector('.ep-nav').classList.toggle('is-open', !open);
  });
})();
