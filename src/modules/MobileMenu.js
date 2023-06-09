class MobileMenu {
  constructor() {
    this.navMenu = document.querySelector('.nav-menu-wrapper');
    this.hamburger = document.querySelector('.hamburger');
    this.events();
  }

  events() {
    this.hamburger.addEventListener('click', () => {
      this.navMenu.classList.toggle('open');
      this.hamburger.classList.toggle('active');
      document.documentElement.classList.toggle('no-scroll');
    });
  }
}

export default MobileMenu;
