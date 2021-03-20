const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr) == false){
      console.log("error");
      throw new Error("THROWN");
  }
  var res =[];
  var flag = "";
  var del = false;
  for(var i = 0; i < arr.length; i++){
        if(arr[i] == "--discard-next"){
            flag = "del";
        }
        else if(arr[i] == "--discard-prev"){
            if(res.length > 0 && del == false){
                res.pop();
            }
        }
        else if(arr[i] == "--double-next"){
            flag = "double";
        }
        else if(arr[i] == "--double-prev"){
            if(res.length > 0 && del == false){
                res.push(arr[i-1]);
            }
        }
        else{
          if(del == true){
              del = false;
          }
          if(flag == "del"){
              flag = "";
              del = true;
          }
          else{
              res.push(arr[i]);
          }
          if(flag == "double"){
            res.push(arr[i]);
            flag = "";
          }
          
      }
  }
    console.log(res);
    return res;
};
