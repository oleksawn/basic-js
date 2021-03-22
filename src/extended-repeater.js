const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
   
    
    var rep_arr = [];
    
    if("additionRepeatTimes" in options && "addition" in options){
        for(var j = 0; j < options.additionRepeatTimes; j++){
                rep_arr.push(String(options.addition));
      }
    }
    else if("addition" in options){
        rep_arr.push(String(options.addition));
    }
    
    if("additionSeparator" in options){
        var rep_str = rep_arr.join(options.additionSeparator);
    }
    else{
        var rep_str = rep_arr.join("|");
    }
    
    
    
    
     var arr = [];
    
    if("repeatTimes" in options){
        for(var i = 0; i < options.repeatTimes; i++){
      arr.push(String(str)+rep_str);
  }
    }
    else{
        arr.push(String(str)+rep_str);
    }
  if("separator" in options){
      return arr.join(options.separator);
  }
    else{
        return arr.join("+");
    }
};
  