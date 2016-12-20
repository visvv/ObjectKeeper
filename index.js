var Schema = require('./Schema.js');
var ObjectKeeper = function(){
};

ObjectKeeper.prototype.getSchema = function(name){
    return new Schema(name);
}

module.exports = new ObjectKeeper();


