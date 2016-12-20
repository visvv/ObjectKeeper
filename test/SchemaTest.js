var chai = require('chai');
var expect = chai.expect;
var Schema = require('../Schema.js');
var fs = require('fs');
var FileHandler = require('../FileHandler.js');


describe('Schema Teats', function(){
    var schemaName = 'Users';
   it('Schema should be created' , function(done){
      var schema = new Schema(schemaName); // limitation. 
      // cant test it here , may be following the wrong way of doing this. 
      schema.add({name : 'steve'}, function(fileName){
         console.log('user has been added to ' + fileName);
         done();
      });
      
   });
});