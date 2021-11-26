import UrlParser from '../../routes/url-parser';
import DicodingDB from '../../data/dicoding-database';
import { createRestaurantDetail } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
    async render() {
        return `
        <div id="restaurant"></div>
        <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await DicodingDB.DetailPage(url.id);
        const Container = document.querySelector('#restaurant');
        Container.innerHTML = createRestaurantDetail(restaurant);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                rating: restaurant.rating,
                city: restaurant.city,
                pictureId: restaurant.pictureId,
                description: restaurant.description,
            },
        });
    },
};

export default Detail;
