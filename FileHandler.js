var fs = require('fs');
var FileHandler = function () {
};
FileHandler.prototype.deleteFile = function (fileName, successCallback) {
    fs.unlink(fileName, function (err) {
        if (err) console.error(err);
        else {
            successCallback();
        }
    })
}

FileHandler.prototype.readFile = function (fileName, successCallback) {
    fs.readFile(fileName, 'utf8', function (err, fileContent) {
        if (err) console.error(err);
        else {
            successCallback(fileContent);
        }
    });
}
// chunk file reading.

FileHandler.prototype.writeFile = function (fileName, fileContent, successCallback) {
    console.log(fileName + ' writing ' + fileContent);
    fs.writeFile(fileName, fileContent, function () {
        console.log('writing to file ##');
        successCallback();
    });
}


FileHandler.prototype.isExists = function (name, type, callback) {
    fs.stat(name, function (err, fileStat) {
        if (err) {
            console.error(err);
            callback(undefined);
        } else {
            if (fileStat.isFile() && type === 'FILE') {
                callback(name);
            } else if (fileStat.isDirectory() && type === 'DIR') {
                callback(name);
            } else {
                callback(undefined);
            }
        }
    });
};

FileHandler.prototype.isExistsSync = function (path) {
    return fs.existsSync(path);
}

FileHandler.prototype.makeFolder = function (location) {
    fs.mkdirSync(location);
};

module.exports = new FileHandler();


