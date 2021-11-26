import CONFIG from '../../globals/config';

const createRestaurantDetail = (restaurant) => `
  <div class="card card-detail">
    <h2 tabindex="0" class="detail-title">${restaurant.name}</h2>
    <img tabindex="0" class="detail-content lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
       <p tabindex="0" class="location">Adress: ${restaurant.address} - ${restaurant.city}</p>
       <p tabindex="0" class="category">Category: ${restaurant.categories.map((category) => category.name)}</p>
       <p tabindex="0" class="description">${restaurant.description}</p>
    <h2 tabindex="0" class="foods">Foods Menu</h2>
       <p tabindex="0" class="foods-list">${restaurant.menus.foods.map((food) => `${food.name}<br />`).join('')}</p>
    <h2 tabindex="0" class="drinks">Drinks Menu</h2>
       <p tabindex="0" class="drink-list">${restaurant.menus.drinks.map((drink) => `${drink.name}<br />`).join('')}</p>
    <h2 tabindex="0" class="customer-title">Customer Reviews</h2>
       <div class="review">
          ${restaurant.customerReviews.map((review) => `
          <h3 tabindex="0">Name : ${review.name}</h3>
          <p tabindex="0">Date : ${review.date}</p>
          <p tabindex="0">Review : ${review.review}</p>
          `).join('')}
       </div>
  </div>
`;

const createRestaurantList = (restaurants) => `
  <div class="liked-restaurant">
  <div class="card">
    <a tabindex="0" class="button-detail" href="${`/#/detail/${restaurants.id}`}">
    <div class="card-image">
      <img tabindex="0" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="Nama Toko ${restaurants.name}" class="image lazyload" />
      <span tabindex="0" class="rating">Rating: ${restaurants.rating}</span>
  </div>

  <div class="card-content">
    <h3 class="resto-name" tabindex="0">${restaurants.name}</h3>
    <h4 tabindex="0">Lokasi: ${restaurants.city}</h4>
    <p tabindex="0" class="deskripsi">${restaurants.description}</p>
  </div>
  </a>
  </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetail,
  createRestaurantList,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
