var Enclosure = function(dinosaur){

  this.enclosureArray = [];

  Enclosure.prototype = {

    addDinosaur: function(dinosaur){
      this.enclosureArray.push(dinosaur);
    }
  }
}
module.exports = Enclosure;


  