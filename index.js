"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var enums_1 = require("./enums");
var classes_1 = require("./classes");
var propertyContainer = document.querySelector('.properties');
var reviewContainer = document.querySelector('.reviews');
var container = document.querySelector('.container');
var button = document.querySelector('button');
var footer = document.querySelector('.footer');
// let isLoggedIn = boolean;
//Reviews
var reviews = [
    {
        name: 'Sheila',
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrezej',
        stars: 3,
        loyaltyUser: enums_1.LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: enums_1.LoyaltyUser.SILVER_USER,
        date: '27-03-2021'
    },
];
var you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: enums_1.Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
var properties = [
    {
        image: 'https://images.dwell.com/photos-6765069443263983616/6766131537334820864-large/mh01s-angled-roof-black-shingles-and-superboard-panels-bring-a-modern-sensibility-to-a-traditional-cottage-form.jpg',
        title: "Colombian shack",
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: "Columbia"
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'https://images.dwell.com/photos-6765069443263983616/6766131537334820864-large/mh01s-angled-roof-black-shingles-and-superboard-panels-bring-a-modern-sensibility-to-a-traditional-cottage-form.jpg',
        title: "Polish Cottage",
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: "Poland"
        },
        contact: [+1298239028490830, 'garydavis@gmail.com'],
        isAvailable: false
    },
    {
        image: 'https://images.dwell.com/photos-6765069443263983616/6766131537334820864-large/mh01s-angled-roof-black-shingles-and-superboard-panels-bring-a-modern-sensibility-to-a-traditional-cottage-form.jpg',
        title: "London Flat",
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 'SW4 5XW',
            country: "United Kingdom"
        },
        contact: [+34829374892553, 'andyluger@gmail.com'],
        isAvailable: true
    },
    {
        image: 'https://images.dwell.com/photos-6765069443263983616/6766131537334820864-large/mh01s-angled-roof-black-shingles-and-superboard-panels-bring-a-modern-sensibility-to-a-traditional-cottage-form.jpg',
        title: "Maliba Hotel",
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: "Malaysia"
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    },
];
// Functions
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.firstName);
// Add properties
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    var image_1 = document.createElement('img');
    image_1.setAttribute('src', properties[i].image);
    card.appendChild(image_1);
    (0, utils_1.showDetails)(you.permissions, card, properties[i].price);
    propertyContainer === null || propertyContainer === void 0 ? void 0 : propertyContainer.appendChild(card);
}
var count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        var topTwo = (0, utils_1.getTopTwoReviews)(array);
        for (var i = 0; i < topTwo.length; i++) {
            var card = document.createElement('div');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer === null || reviewContainer === void 0 ? void 0 : reviewContainer.appendChild(card);
        }
        if (container) {
            container.removeChild(button);
        }
    }
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () { return addReviews(reviews); });
var currentLocation = ['London', '11.03', 17];
if (footer) {
    footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
}
var yourMainProperty = new classes_1.default('https://images.dwell.com/photos-6765069443263983616/6766131537334820864-large/mh01s-angled-roof-black-shingles-and-superboard-panels-bring-a-modern-sensibility-to-a-traditional-cottage-form.jpg', 'Italian House', [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }]);
var mainImageContainer = document.querySelector('.main-image');
var image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer === null || mainImageContainer === void 0 ? void 0 : mainImageContainer.appendChild(image);
