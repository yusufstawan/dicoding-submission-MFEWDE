import DicodingDB from '../../data/dicoding-database';
import { createRestaurantList } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <div class="container-main">
            <h2 class="explore">Explore Restaurant</h2>
            <section id="data-resto"></section>
        </div>
        `;
    },

    async afterRender() {
        const restaurants = await DicodingDB.HomePage();
        const Container = document.querySelector('#data-resto');
        restaurants.forEach((restaurant) => {
            Container.innerHTML += createRestaurantList(restaurant);
        });
    },
};

export default Home;
