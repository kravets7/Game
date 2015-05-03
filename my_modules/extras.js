var distance = function(vec1, vec2) {
    return Math.sqrt(Math.pow((vec2.x - vec1.x), 2) + Math.pow((vec2.y - vec1.y), 2));
};

var getRandom = function(min, max) {
    var r = Math.round((Math.random() * (max - min)) + min);
    return r;
};

var classOf = function(object) {
    return Object.prototype.toString.call(object).slice(8, -1)
};

module.exports.distance = distance;
module.exports.getRandom = getRandom;
module.exports.classOf = classOf;