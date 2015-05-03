var Vector = function(x, y) {
    this.x = x;
    this.y = y;
};

Vector.prototype.sum = function(vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
};

Vector.prototype.multScalar = function(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
};

module.exports = Vector;