const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    constructor(){
        this.open = 0;
        this.depth = 0;
    }
  calculateDepth(arr) {
      this.open++;
      this.depth = (this.open > this.depth)? this.open : this.depth;
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            this.calculateDepth(arr[i]);
        }
    }
      this.open--;
    return this.depth;
  }
};