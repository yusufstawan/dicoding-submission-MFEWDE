class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron">
        <h2 tabindex="0" class="jumbotron-title">Selamat Datang di Delicius Resto</h2>
            <picture>
            <source media="(max-width: 500px)" srcset="./images/heros/hero-small.jpg" type="image/jpeg">
            <source media="(min-width: 500px)" srcset="./images/heros/hero-medium.jpg" type="image/jpeg">
            <source media="(min-width: 1200px)" srcset="./images/heros/hero-large.jpg" type="image/jpeg">
            <img class="jumbotron" src=".images/heros/hero.jpg" alt="Banner Restaurant"></img>
            </picture>
        </div>
        `;
    }
}

customElements.define('hero-jumbotron', Hero);
