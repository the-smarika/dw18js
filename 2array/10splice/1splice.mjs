let ar1 = [ 9, 10, 11, 12, 13, 14]
/* 
 it change orginal array
 and return something
 ar1.splice(startingIndex,length, newValue1,newValue2,...)
*/
let ar2 = ar1.splice(1,3,"a","b","c")
console.log(ar1)
console.log(ar2)