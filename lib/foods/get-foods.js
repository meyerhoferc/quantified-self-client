const API = 'https://quantified-self-cm.herokuapp.com/api/';
const localHost = 'http://127.0.0.1:3000/api/';
const $ = require('jquery');

function getFoods () {
  return $.ajax({
    method: 'GET',
    url: API + 'foods'
  })
  .then((data) => {
    formatFoods(data);
  });
};

function formatFoods(data) {
  for (var i = 0; i < data.length; i++) {
    console.log(data);
    $('tbody').prepend(`<tr><td><p>${data[i].name}</p></td><td><p>${data[i].calories}</p></td><td><button data-food-id=${data[i].id} id='delete-food' class='btn red'>Delete</button></td></tr>`);
  };
};

module.exports = { getFoods: getFoods }
