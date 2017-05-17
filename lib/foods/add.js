const API = 'https://quantified-self-cm.herokuapp.com/';
const localHost = 'http://127.0.0.1:3000/api/';
const $ = require('jquery');

function createFood () {
  const foodName = $('#food-name');
  const foodCalories = $('#food-calories');
  const foodData = {};
  foodData.name = foodName.val();
  foodData.calories = foodCalories.val();

  console.log(API + 'api/foods?name=' + foodData.name + '&calories=' + foodData.calories);
  // add some validations & errors for name & calories here
  return $.ajax({
    url: API + 'api/foods?name=' + foodData.name + '&calories=' + foodData.calories,
    method: 'POST'
  })
  .then((newFood) => {
    updateFoodsTable(newFood);
    foodName.val('');
    foodCalories.val('');
  })
  .catch((error) => {
    console.log(error);
  });
};

function updateFoodsTable (food) {
  $('tbody').prepend(`<tr><td><p>${food.name}</p></td><td><p>${food.calories}</p></td><td><button data-food-id=${food.id} id='delete-food' class='btn red'>Delete</button></td></tr>`);
};


module.exports = { createFood: createFood };
