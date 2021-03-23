const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    constructor(){
        this.open = 0;
    }
  calculateDepth(arr,depth) {
      this.open++;
      depth = depth || 0;
      depth = (this.open > depth)? this.open : depth;
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            depth = this.calculateDepth(arr[i],depth);
        }
    }
      this.open--;
    return depth;
  }
};