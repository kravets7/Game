var persons = require('../my_modules/persons');
var king = require('../my_modules/persons').king;
var prince = require('../my_modules/persons').prince;
var extras = require('../my_modules/extras');

var routes = function (app){

    function errHandler(err, req, res, next) {
    var status = err.status || 500;
    var message;
    if(process.env.NODE_ENV === 'development'){
        message = err.message + '\n\r ' + err.stack;
    } else {
        message = err.message;
    }
    //ToDo check env production || development

    res.status(status).send(message);
    console.log();
    };

    app.get('/', function(req,res, next){
        res.status(200).send('Ласкаво просимо у гру!');
        next();
    });

    app.get('/persons', function(req,res, next){
        res.status(200).send('Можете вибрати одного з гравців: ' + Object.keys(persons));
        next();
    });

    app.get('/:person/move/:x/:y', function(req,res, next){
        if (req.params.person === 'king') {
            king.moveTo(Number(req.params.x), Number(req.params.y));
            res.status(200).send('Гравець ' + king.name + ' змінив позицію. Нова позиція показана в консолі.');
        } else if (req.params.person === 'prince') {
            prince.moveTo(Number(req.params.x), Number(req.params.y));
            res.status(200).send('Гравець ' + prince.name + ' змінив позицію. Нова позиція показана в консолі.');
        } else {
            res.status(400).send('Даний гравець не створений');
        }
        next();
    });

    app.get('/fight', function(req,res, next){
        var dis = extras.distance(king.position, prince.position);
        if((dis <= king.survey) || (dis <= prince.survey)) {
            king.fight(prince);
            res.status(200).send('Гравець ' + prince.name + ' змінив позицію. Нова позиція показана в консолі.');
        } else {
            res.status(201).send('Гравці не знаходяться в полі видимості');
        }
        next();
    });

    app.use(errHandler);
};

module.exports = routes;