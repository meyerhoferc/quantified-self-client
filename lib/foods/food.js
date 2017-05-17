const API = 'https://quantified-self-cm.herokuapp.com/';
const localHost = 'http://127.0.0.1:3000/api/';
const $ = require('jquery');
const getFoodData = require('./get-foods')

class Food {
  constructor () {
    getFoodData.getFoods();
  };

  foodEventListeners () {

  };
};

$(document).ready(function() {
  const food = new Food
  // add prevent default for submit event for new foods
})
