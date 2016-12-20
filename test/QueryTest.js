var chai = require('chai');
var expect = chai.expect;
var Schema = require('Schema.js');
var Query =  require('Query.js');
var FileHandler = require('FileHandler.js');


describe('Query Test : ', function(){
    var schemaName = 'Users';
   it('Object shuld be retrieve based on the obj id' , function(done){
      var schema = new Schema(schemaName); // limitation.
      // cant test it here , may be following the wrong way of doing this.
      var time = (new Date()).getTime();
      var obj = {name : 'steve', age : 12, time : time};
      schema.add(obj, function(id){
         console.log('user has been added');
         schema.query().find(id, function(data){
             console.log(data);
             if(obj.time === data.time)
             done();
             else
                done(new Error('Failed to retriev the object'))
         });
      });

   });
});