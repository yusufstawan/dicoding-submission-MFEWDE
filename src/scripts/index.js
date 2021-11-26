import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// css
import '../styles/global.css';
import '../styles/navbar.css';
import '../styles/drawing.css';
import '../styles/responsive.css';
import '../styles/footer.css';
import '../styles/skip.css';
import '../styles/card.css';
import '../styles/favorit.css';
import '../styles/like.css';
import '../styles/detail.css';
import '../styles/hero.css';

// components
import './components/navbar';
import './components/hero';
import './components/footer';

// javascript
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.menu-button'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
