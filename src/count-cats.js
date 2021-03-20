const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
      var count = 0;
  arr.forEach(function(el){
      el.forEach(function(in_el){
          if(in_el == "^^"){
              count++;
          }
      });
  });
    return count;
};
