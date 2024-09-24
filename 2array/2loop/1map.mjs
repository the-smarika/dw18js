let ar1 = [10, 11, 12];
/* 
syantax 
execution
*/

let ar2 = ar1.map((value, i) => {
  return "a";
});
console.log(ar2);

let ar3 = [10, 11, 12];
let ar4 = ar3.map((value, i) => {
  return value * 2;
});
console.log(ar4);

let ar5 = [10,11,12]
let ar6 = ar4.map((value,i)=>{
    return value*i
})
console.log(ar6)