import FavoriteRestaurant from '../src/scripts/data/database';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurant.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurant.deleteRestaurant(1);
    });

    it('Should display unlike widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeTruthy();
    });

    it('Should not display like widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeFalsy();
    });

    it('Should be able to remove liked restaurant from the list', async () => {
        await TestFactories.createLikeButtonWithRestaurant({ id: 1 });
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
    });

    it('Should not throw error if the unliked restaurant is not in list', async () => {
        await TestFactories.createLikeButtonWithRestaurant({ id: 1 });
        await FavoriteRestaurant.deleteRestaurant(1);
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
    });
});
