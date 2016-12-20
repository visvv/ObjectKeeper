var ObjectKeeper = require('./index.js');
var FIleHandler = require('./FileHandler.js');
var Schema = require('./Schema.js');

var data  = { name : "sachin", age : 34};
var schema = new Schema("users");
schema.add(data, function(err, data){
    if(err) {
        console.error(err);
        return;
    }
    console.log("User has been added");
});

