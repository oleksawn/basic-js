const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return chainMaker.arr.length;
  },
  addLink(value) {
    chainMaker.arr.push(value);
    return chainMaker;
  },
  removeLink(position) {
      if(typeof(position) == "number" && position < chainMaker.arr.length && position > 0){
         chainMaker.arr.splice(position-1,1);
         return chainMaker;
      }
      else{
          chainMaker.arr = [];
         throw new Error("THROWN");
      }
  },
  reverseChain() {
    chainMaker.arr.reverse();
    return chainMaker;
  },
  finishChain() {
      let res_str = "";
      for(let i = 0; i < chainMaker.arr.length; i++){
          if(i == chainMaker.arr.length-1){
              console.log("without");
              res_str = res_str+"( "+chainMaker.arr[i]+" )";
          }
          else {
              console.log("~~");
              res_str = res_str+"( "+chainMaker.arr[i]+" )~~";
          }
      }
      chainMaker.arr = [];
      console.log(chainMaker.arr);
      return res_str;
  }
};

module.exports = chainMaker;
