const API = 'https://quantified-self-cm.herokuapp.com/api/';
const localHost = 'http://127.0.0.1:3000/api/';
const $ = require('jquery');

function deleteFood (event) {
  const removeButton = event.target;
  const id = $(removeButton).data('food-id')
  $.ajax({
    url: API + 'foods/'+ id,
    method: 'DELETE'
  })
  .then(removeFood(removeButton));
};

function removeFood(removeButton) {
  $(removeButton).parent().parent().remove();
}

module.exports = { deleteFood: deleteFood };
