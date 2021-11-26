import FavoriteRestaurant from '../../data/database';
import { createRestaurantList } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
        <div class="container-favorit">
            <h2 class="favorit-title">Restoran Favorit Anda</h2>
            <section id="favorit"></section>
        </div>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurant.getAllRestaurant();
        const Container = document.querySelector('#favorit');
        restaurants.forEach((restaurant) => {
            Container.innerHTML += createRestaurantList(restaurant);
        });
    },
};

export default Favorite;
