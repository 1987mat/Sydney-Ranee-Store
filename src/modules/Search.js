class Search {
  constructor() {
    this.searchIcon = document.querySelector('.search-icon-btn');
    this.searchModal = document.querySelector('.search-wrapper-hidden');
    this.searchInput = document.querySelector('.search-input');
    this.searchResults = document.querySelector('.search-results');
    this.closeIcon = document.querySelector('.close-icon');
    this.navMenu = document.querySelector('.nav-menu-wrapper');
    this.hamburger = document.querySelector('.hamburger');
    this.typerTimer;
    this.previousValue;
    this.isSpinnerVisible = false;
    this.events();
  }

  events() {
    // Click search icon
    this.searchIcon.addEventListener(
      'click',
      this.openSearchOverlay.bind(this)
    );

    // Click close icon
    this.closeIcon.addEventListener(
      'click',
      this.closeSearchOverlay.bind(this)
    );

    // Keyboard events
    document.addEventListener('keyup', this.keyPressed.bind(this));

    // Typing events
    this.searchInput.addEventListener('keyup', this.handleTyping.bind(this));
  }

  // METHODS
  openSearchOverlay() {
    this.searchModal.classList.add('show');
    this.searchInput.focus();
  }

  closeSearchOverlay() {
    if (this.navMenu.classList.contains('open')) {
      this.navMenu.classList.remove('open');
      this.hamburger.classList.remove('active');
    }

    this.searchModal.classList.remove('show');
    this.searchInput.blur();
    this.searchResults.innerHTML = '';
    this.searchInput.value = '';
  }

  keyPressed(e) {
    let key = e.key;

    // Open overlay
    if (
      key === 's' &&
      !this.searchModal.classList.contains('show') &&
      !document.querySelector('input:focus, textarea:focus')
    ) {
      this.openSearchOverlay();
    }

    // Close overlay
    if (key === 'Escape' && this.searchModal.classList.contains('show')) {
      this.closeSearchOverlay();
    }
  }

  handleTyping() {
    if (this.searchInput.value !== this.previousValue) {
      clearTimeout(this.typerTimer);

      if (this.searchInput.value) {
        this.typerTimer = setTimeout(this.displayResults.bind(this), 500);

        // Display loading spinner
        if (!this.isSpinnerVisible) {
          this.searchResults.innerHTML = '<div class="spinner"></div>';
          this.isSpinnerVisible = true;
        }
      } else {
        this.isSpinnerVisible = false;
        this.searchInput.value = '';
        this.searchResults.innerHTML = '';
      }
    }

    this.previousValue = this.searchInput.value;
  }

  displayResults() {
    fetch(
      siteData.root_url +
        '/wp-json/store/v1/search?term=' +
        this.searchInput.value
    )
      .then((response) => response.json())
      .then((results) => {
        this.searchResults.innerHTML = `
          ${results.length ? '<ul>' : '<p>No product found.</p>'}
          ${results
            .map(
              (product) => `
            <li>
              <a href="${product.url}" class="product-search-link">
                <img src="${product.image}">
                <h3>${product.title}</h3>
                <span>$${product.price}</span>
              </a>
            </li>`
            )
            .join('')}
          </ul>`;
      });
    this.isSpinnerVisible = false;
  }
}

export default Search;
