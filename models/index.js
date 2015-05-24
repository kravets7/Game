var mongoose = require('mongoose');

module.exports = function(){
    var  personSchema = new mongoose.Schema({
        name:{type: String, unique: true},
        health:{type: Number,default: 100},
        armor:{type: Number,default: 100},
        power:{type: Number,default:75},
        position:{
            x:{type: Number, default: 17},
            y:{type: Number, default: 15}
        },
        maxDistance:{type: Number,default: 75},
        survey:{type: Number,default: 25}
    });

    var personModel = mongoose.model('person', personSchema);
    return personModel;
}();