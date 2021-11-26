class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
            <p tabindex="0">Copyright © 2020 - Delicius Resto</p>
        </footer>
        `;
    }
}

customElements.define('foot-bar', Footer);
