import FavoriteRestaurant from '../src/scripts/data/database';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resturant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('Should show the like button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeTruthy();
    });

    it('Should not show the unlike button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonWithRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeFalsy();
    });

    it('Should be able to like restaurant', async () => {
        await TestFactories.createLikeButtonWithRestaurant({ id: 1 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurant.getRestaurant(1);

        expect(restaurant).toEqual({ id: 1 });
        FavoriteRestaurant.deleteRestaurant(1);
    });

    it('Should not add restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonWithRestaurant({ id: 1 });
        await FavoriteRestaurant.putRestaurant({ id: 1 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 1 }]);
        FavoriteRestaurant.deleteRestaurant(1);
    });

    it('Should not add a restaurant when it has no id', async () => {
        await TestFactories.createLikeButtonWithRestaurant({});
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
    });
});
