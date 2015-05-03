var Vector = require('./vector');

var Circle = function(x, y, radius, type) {
    this.center = new Vector(x, y);
    this.radius = radius;
    this.type = type;
};

var Rectangle = function(x1, y1, x2, y2, type) {
    this.point1 = new Vector(x1, y1);
    this.point2 = new Vector(x1, y2);
    this.point3 = new Vector(x2, y2);
    this.point4 = new Vector(x2, y1);
    this.type = type;
};

var circles = {
    1: new Circle (34, 38, 58, 'Озеро'),
    2: new Circle (528, 791, 50, 'Болото'),
    3: new Circle (644, 531, 57, 'Хащі'),
    4: new Circle (374, 776, 50, 'Яма'),
    5: new Circle (97, 235, 29, 'Болото'),
    6: new Circle (740, 151, 37, 'Озеро'),
    7: new Circle (679, 490, 37, 'Ставок')
};

var rectangles = {
    1: new Rectangle (483, 397, 573, 414, 'Будинок'),
    2: new Rectangle (693, 776, 703, 789, 'Стіна'),
    3: new Rectangle (260, 177, 175, 179, 'Огорожа'),
    4: new Rectangle (322, 327, 367, 399, 'Будинок'),
    5: new Rectangle (655, 609, 700, 629, 'Житлово-комунальне господарство'),
    6: new Rectangle (460, 293, 490, 337, 'Магазин'),
    7: new Rectangle (59, 102, 75, 114, 'Дитячий садок')
};

module.exports.circles = circles;
module.exports.rectangles = rectangles;