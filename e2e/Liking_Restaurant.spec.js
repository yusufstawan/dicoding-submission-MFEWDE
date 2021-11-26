const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorit');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
    I.dontSeeElement('liked-restaurant');
});

Scenario('Liking one restaurant', async ({ I }) => {
    I.dontSeeElement('liked-restaurant');
    I.amOnPage('/');

    const firstRestaurant = locate('.resto-name').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    I.seeElement('.card');
    I.click('.card');

    I.amOnPage('/#/detail');
    I.seeElement('.fa-heart-o');
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.seeElement('.fa-heart');

    I.amOnPage('/#/favorit');
    const firstRestaurantCheck = locate('.resto-name').first();
    const firstRestaurantTitleChech = await I.grabTextFrom(firstRestaurantCheck);
    assert.strictEqual(firstRestaurantTitle, firstRestaurantTitleChech);
});

Scenario('Unliking a restaurant', async ({ I }) => {
    I.dontSeeElement('liked-restaurant');
    I.amOnPage('/');

    const firstRestaurant = locate('.resto-name').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    I.seeElement('.card');
    I.click('.card');

    I.amOnPage('/#/detail');
    I.seeElement('.fa-heart-o');
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.seeElement('.fa-heart');

    I.amOnPage('/#/favorit');
    const firstRestaurantCheck = locate('.resto-name').first();
    const firstRestaurantTitleCheck = await I.grabTextFrom(firstRestaurantCheck);
    assert.strictEqual(firstRestaurantTitle, firstRestaurantTitleCheck);
    I.click(firstRestaurantTitle);
    I.seeElement('.card');
    I.click('.card');

    I.amOnPage('/#/detail');
    I.seeElement('.fa-heart');
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.seeElement('.fa-heart-o');

    I.amOnPage('/#/favorit');
    I.dontSeeElement('.card');
});
