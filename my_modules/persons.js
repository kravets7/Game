var Vector = require('./vector');
var King = require('./king');
var Prince = require('./prince');

var king = Object.create(King).constructor('King', 100, 56, 7, 12, 75, 25);
var prince = Object.create(Prince).constructor('Prince', 100, 82, 210, 541, 100, 25, 'Я нащадок престолу!');

var persons = {
  king: king,
  prince: prince
};

module.exports = persons;