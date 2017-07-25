var assert = require("assert");
var Dinosaur = require("../dinosaur");
var Enclosure = require("../enclosure");

describe("Enclosure",function(){
  var enclosure;

  beforeEach(function(){
    enclosure = new Enclosure();
  });

  it("should have an empty park at the start", function(){
      assert.strictEqual( 0, enclosure.enclosureArray.length);
  });

  it("should have 1 dinosaur in the array", function(){
    enclosure.addDinosaur(new Dinosaur("Dilophosaurus",4));
    assert.strictEqual(1, enclosure.enclosureArray.length);
  });
});