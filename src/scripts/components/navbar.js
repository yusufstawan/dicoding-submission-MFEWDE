class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
        <div class="logo">
            <h1 tabindex="0">Delicius Resto</h1>
        </div>
        <div class="menu-button">
            <button type="submit" aria-label="tampilan menu dropdown pada mobile">☰</button>
        </div>
        <ul id="drawer">
            <li><a href="#/home">Home</a></li>
            <li><a href="#/favorit">Favorite</a></li>
            <li><a href="https://www.linkedin.com/in/yusufstawan/" target="_blank" rel="noopener">About</a></li>
        </ul>
        </nav>
        `;
  }
}

customElements.define('nav-bar', Navbar);
