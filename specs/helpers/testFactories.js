import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonWithRestaurant = async (restaurant) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
    });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonWithRestaurant };
