var Vector = require('./vector');
var King = require('./king');

var Prince = Object.create(King);
Prince.constructor = function(name, armor, power, x, y, maxDistance, survey, phrase) {
    King.constructor.apply(this, arguments);
    this.phrase = function(phrase) {
      return phrase;
    };
    return this;
};

module.exports = Prince;