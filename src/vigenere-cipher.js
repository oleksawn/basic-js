const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(arg){
        this.arg = arg;
    }
  encrypt(str, key) {
    if(str == undefined || key == undefined){
      throw new Error("THROWN");
    }
       
    var arr = str.split("");
    var key_arr = key.split("");
    var res_arr = [];
    var j = 0;
      
    for(var i = 0; i < arr.length; i++){
      if(/[A-Za-z]/.test(arr[i])){
        res_arr[i] = String.fromCharCode(((arr[i].toUpperCase().charCodeAt(0)-65) + (key_arr[j%key_arr.length].toUpperCase().charCodeAt(0)-65))%26 + 65);
        j++;
      }
      else{
        res_arr[i] = arr[i];
      }
    }
      
      if(this.arg == undefined || this.arg == true){
        return res_arr.join("");
      }
      else if(this.arg == false){
        return res_arr.reverse().join("");
      }
  }    
  decrypt(str, key) {
      if(str == undefined || key == undefined){
      throw new Error("THROWN");
    }
       
    var arr = str.split("");
    var key_arr = key.split("");
    var res_arr = [];
    var j = 0;
      
    for(var i = 0; i < arr.length; i++){
      if(/[A-Za-z]/.test(arr[i])){
        res_arr[i] = String.fromCharCode(( (arr[i].toUpperCase().charCodeAt(0)-65) - (key_arr[j%key_arr.length].toUpperCase().charCodeAt(0)-65) +26)%26 + 65);
        j++;
      }
      else{
        res_arr[i] = arr[i];
      }
    }
      
      if(this.arg == undefined || this.arg == true){
        return res_arr.join("");
      }
      else if(this.arg == false){
        return res_arr.reverse().join("");
      }
  }
}

module.exports = VigenereCipheringMachine;
