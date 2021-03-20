const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
    if(Array.isArray(arr) == false){
        return false;
    }
    var res = [];
  arr.forEach(function(el){
      if(typeof(el) == "string"){
         res.push(el.toUpperCase().replace(/ /g,"").charAt(0));
      }
  });
    return res.sort().join("");
};
