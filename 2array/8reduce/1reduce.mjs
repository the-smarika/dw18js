let ar1 = [9, 10, 11]
/* 
syntax
execution
*/
// let v = ar1.reduce(fun,initial value) // (()=>{}, initial value)
let v = ar1.reduce((pre,cur)=>{
    return pre+cur

},0)
console.log(v)