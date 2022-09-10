const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === null || arrayOfString === undefined){
    return undefined;
  }else {
    let array1 = []
    let longest = arrayOfString[0]
    for (let i = 0 ; i < arrayOfString.length; i ++){
      if(arrayOfString[i].length > longest.length){
        longest = arrayOfString[i];
      }
    }
    for ( i = 0 ; i < arrayOfString.length; i ++){
      if (arrayOfString[i].length == longest.length){
        array1.push(arrayOfString[i])
      }
    }
    return array1;
  }
}
module.exports = getMaxLengthString
