var assert = require('assert');
var Dinosaur = require('../dinosaur');

describe('Dinosaur', function(){
  var dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Dilophosaurus",4)
  });

  it("should have a type", function(){
    assert.strictEqual("Dilophosaurus", dinosaur.type);
  });


  it("should have a number of offspring" , function(){
    assert.strictEqual(4, dinosaur.offspring);
  });
});