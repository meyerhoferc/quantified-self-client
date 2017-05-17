const API = 'https://quantified-self-cm.herokuapp.com/';
const localHost = 'http://127.0.0.1:3000/api/';
const $ = require('jquery');
const getFoodData = require('./get-foods');
const createFood = require('./add');

class Food {
  constructor () {
    getFoodData.getFoods();
    this.foodEventListeners();
  };

  foodEventListeners () {
    $('#create-food-button').on('click', function(event) {
      createFood.createFood();
    });

    $('form').on('submit', function(event) {
      event.preventDefault()
    });
  };
};

$(document).ready(function() {
  const food = new Food
  $('form').on('submit', function(event) {
    event.preventDefault()
  });
});
