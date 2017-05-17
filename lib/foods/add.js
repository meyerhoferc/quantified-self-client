const API = 'https://quantified-self-cm.herokuapp.com/';
const localHost = 'http://127.0.0.1:3000/api/';
const $ = require('jquery');

function createFood () {
  clearValidationMessages();

  const foodName = $('#food-name');
  const foodCalories = $('#food-calories');
  const foodData = {};
  foodData.name = foodName.val();
  foodData.calories = foodCalories.val();

  if (foodNameInvalid(foodName) && foodCaloriesInvalid(foodCalories)) {
    nameValidationMessage(foodName);
    return caloriesValidationMessage(foodCalories);
  } else if (foodNameInvalid(foodName)) {
    return nameValidationMessage(foodName);
  } else if (foodCaloriesInvalid(foodCalories)) {
    return caloriesValidationMessage(foodCalories);
  } else {
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
};

function clearValidationMessages() {
  $('#name-error').html('');
  $('#calorie-error').html('');
}

function nameValidationMessage(foodName) {
  const message = 'Please enter a food name';
  foodName.parent().after('<div id="name-error"><p>' + message + '</p></div>');
}

function caloriesValidationMessage(foodCalories) {
  const message = 'Please enter a calorie amount';
  foodCalories.parent().after('<div id="calorie-error"><p>' + message + '</p></div>');
}

function foodNameInvalid (foodName) {
  return foodName.val() == '';
}

function foodCaloriesInvalid (foodCalories) {
  return foodCalories.val() == '';
}

function updateFoodsTable (food) {
  $('tbody').prepend(`<tr><td><p>${food.name}</p></td><td><p>${food.calories}</p></td><td><button data-food-id=${food.id} id='delete-food' class='btn red'>Delete</button></td></tr>`);
};


module.exports = { createFood: createFood };
