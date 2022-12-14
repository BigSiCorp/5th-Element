(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const bodyRef = document.querySelector('#page');
  const links = document.querySelectorAll('[data-nav]');
  const desktopSize = window.matchMedia('screen and (max-width: 1365px)');

  window.onload = testScreenSize;
  window.addEventListener('resize', testScreenSize);

  function testScreenSize() {
    if (desktopSize.matches) {
      links.forEach(link => link.addEventListener('click', toggleMobileMenu));
    } else {
      links.forEach(link =>
        link.removeEventListener('click', toggleMobileMenu)
      );
    }
  }

  menuBtnRef.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    bodyRef.classList.toggle('no-scroll');
  }
})();
