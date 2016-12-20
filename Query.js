var Schema = require('./Schema.js');
var FileHandler = require('./FileHandler.js');
var schema_folder = 'schema/';
var Query = function (schema) {
    this.schema = schema
};

Query.prototype.find = function (id, callback) {
    var fileName = schema_folder + this.schema.name + '/' + id;
    console.log('Reading  ' + fileName);
    FileHandler.readFile(fileName, function (data) {
        callback(JSON.parse(data));
    });
};

Query.prototype.findAll = function () {

};


Query.prototype.range = function (from, to) {

};

module.exports = Query;