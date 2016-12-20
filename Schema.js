var FileHandler = require('./FileHandler.js');
var Query = require('./Query.js');
var schema_folder = 'schema/';
// .schema file keeps teh track of all the indexed values and schema information.

var Schema = function (schemaName, type) {
    this.name = schemaName;
    createSchema(schemaName, function () {
        console.log('Schema created successfully');
    });
};


Schema.prototype.get = function (id) {
    console.log("Get " + this.name + " obj with id - " + id);
}

Schema.prototype.query = function () {
    return new Query(this)
}


Schema.prototype.createWithIndex = function (obj, indexConf, callBack) {
    // call create
    // do indexing.

};

Schema.prototype.add = function (doc, callback) {
    // create file and
    var fileName = (new Date()).getTime();
    console.log('creating file ' + fileName);
    FileHandler.writeFile(schema_folder + this.name + '/' + fileName,
        JSON.stringify(doc), function () {
            callback(fileName)
        });
};

Schema.prototype.remove = function (id, callback) {
    // create file and
};

Schema.prototype.update = function (id, doc, callback) {
    // create file and
};


function isSchemaAvailabe(schemaName) {
    return FileHandler.isExistsSync(schema_folder + schemaName)
}

function createSchema(schemaName, callback) {
    if (!isSchemaAvailabe(schemaName)) {
        var location = schema_folder + schemaName;
        FileHandler.makeFolder(location);
        var meta = {name: schemaName, type: 'SINGLE'};
        createMeta(location, meta, callback);
    } else {
        console.log('Schema folder already there');
    }
}

function createMeta(location, meta, callback) {
    FileHandler.writeFile(location + '/.schema', JSON.stringify(meta), callback);
}


module.exports = Schema;