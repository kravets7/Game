var Vector = require('./vector');
var extras = require('./extras');
var world = require('./world');
var persons = require('./persons');
var nature = require('./nature');

var King = {
    constructor: function(name, armor, power, x, y, maxDistance, survey) {
        this.name = name;
        this.health = 100;
        this.armor = armor > 100 ? 100 : armor < 0 ? 0 : armor;
        this.power = power > 100 ? 100 : power < 0 ? 0 : power;
        this.position = new Vector(x, y);
        this.maxDistance = maxDistance;
        this.survey = survey;
        return this;
    },
    moveTo: function(x, y) {
        var positionNowX = this.position.x;
        var positionNowY = this.position.y;
        var newWay = new Vector(x, y);
        for (var i = 7; i > 0; i--) {
            if (extras.distance(newWay, nature.circles[i].center) < nature.circles[i].radius) {
                console.log('Даний рух неможливий. Попереду перешкода. Будь ласка, змініть координати.');
            } else if ((nature.rectangles[i].point1.x <= x) && (x <= nature.rectangles[i].point3.x ) && (nature.rectangles[i].point1.y <= y) && (y <= nature.rectangles[i].point3.y )) {
                console.log('Даний рух неможливий. Попереду перешкода. Будь ласка, змініть координати.');
            }
        }
        if (x < world.minX || x > world.maxX || y < world.minY || y > world.maxY) {
            console.log('Даний рух виходить за межі поля. Будь ласка змініть координати.');
        } else {
            var dis = extras.distance(this.position, newWay);
            if (dis <= this.maxDistance) {
                this.position = newWay;
                console.log('Нова позиція гравця: х: ' + x + ', y: ' + y);
                //this.scan.call(this);
            } else {
                var a = this.maxDistance / (dis - this.maxDistance);
                var newX = Math.round((this.position.x + a * x) / (1 + a));
                var newY =  Math.round((this.position.y + a * y) / (1 + a));
                newWay = new Vector(newX, newY);
                for (var i = 7; i > 0; i--) {
                    if (extras.distance(newWay, nature.circles[i].center) <= nature.circles[i].radius) {
                        console.log('Даний рух неможливий. Попереду перешкода. Будь ласка, змініть координати.');
                        this.position = new Vector(positionNowX, positionNowY);
                    } else if ((nature.rectangles[i].point1.x <= x) && (x <= nature.rectangles[i].point3.x ) && (nature.rectangles[i].point1.y <= y) && (y <= nature.rectangles[i].point3.y )) {
                        console.log('Даний рух неможливий. Попереду перешкода. Будь ласка, змініть координати.');
                        this.position = new Vector(positionNowX, positionNowY);
                    } else {
                        this.position = newWay;
                    }
                }
                console.log('Гравець не може подолати дану дистанцію за один хід. Нова позиція гравця: х: ' + this.position.x + ', y: ' + this.position.y);
                //this.scan.call(this);
            };
        };
    },
    fight: function(opponent) {
        console.log('Початок бою!');
        while (this.health > 0) {
            while (opponent.health > 0) {
                this.armor -= Math.round(opponent.power / 4);
                this.health -= Math.round(100 - this.armor * 1.2);
                if (this.health < 0) {
                    this.health = 0;
                    console.log('Кінець махача. Гравець ' + this.name + ' програв. Жаль добряка.');
                    break;
                };
                console.log(this.name + ' ще тримається. Здоров\'я: ' + this.health);
                opponent.armor -= Math.round(this.power / 4);
                opponent.health -= Math.round((100 - opponent.armor) * 1.2);
                if (opponent.health < 0) {
                    opponent.health = 0;
                    console.log('Кінець махача. Гравець ' + opponent.name + ' програв. Жаль добряка.');
                    break;
                };
                console.log(opponent.name + ' бореться до кінця. Здоров\'я: ' + opponent.health);
            };
        };
    }/*,
    scan: function() {
        for (var k in persons) {
            if (k.name != this.name) {
                var dis = extras.distance(this.position, k.position);
                if (dis <= this.survey) {
                    concole.log('У полі зору гравець: ' + k.name + 'Щас буде махач!');
                    this.fight(k);
                } else {
                    concole.log('У полі зору нікого не видно');
                };
            };
        };
    }*/
};

module.exports = King;