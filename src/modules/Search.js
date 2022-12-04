class Search {
  constructor() {
    this.searchIcon = document.querySelector('.dashicons-search');
    this.searchModal = document.querySelector('.search-wrapper-hidden');
    this.searchInput = document.querySelector('.search-input');
    this.searchResults = document.querySelector('.search-results');
    this.closeIcon = document.querySelector('.close-icon');
    this.typerTimer;
    this.previousValue;
    this.isSpinnerVisible = false;
    this.events();
  }

  events() {
    this.searchIcon.addEventListener('click', () => {
      this.searchModal.classList.add('show');
      this.searchInput.focus();
    });

    this.closeIcon.addEventListener('click', () => {
      this.searchModal.classList.remove('show');
      this.searchResults.innerHTML = '';
      this.searchInput.value = '';
    });

    this.searchInput.addEventListener('keyup', () => {
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
    });
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
          ${results.length ? '<ul>' : '<p>No information found.</p>'}
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
