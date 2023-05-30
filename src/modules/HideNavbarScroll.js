class HideNavbarScroll {
  constructor() {
    this.header = document.querySelector('header');
    this.headerHeight = this.header.clientHeight;
    this.lastScroll = 0;
    this.events();
  }

  events() {
    window.addEventListener('scroll', () => {
      if (window.innerWidth >= 992) {
        let currentScroll = window.scrollY;

        if (currentScroll === 0) {
          this.header.classList.remove('show');
        } else {
          this.header.classList.add('show');
        }

        // Scroll down
        if (
          currentScroll > this.headerHeight &&
          currentScroll > this.lastScroll
        ) {
          this.header.classList.add('hide');
          // Scroll up
        } else {
          this.header.classList.remove('hide');
        }

        this.lastScroll = currentScroll;
      }
    });
  }
}

export default HideNavbarScroll;
