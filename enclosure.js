var Enclosure = function(){

  this.enclosureArray = [];
}

Enclosure.prototype = {
  addDinosaur: function(dinosaur){
    this.enclosureArray.push(dinosaur);
  },

  

  removeDinosaur: function(type){
    for(var dinosaur of this.enclosureArray){
      if (dinosaur.ype === type){
      }

      var index = this.enclosureArray.indexOf(dinosaur);
      this.enclosureArray.splice(index, 1);
    }
  }
}


module.exports = Enclosure;


