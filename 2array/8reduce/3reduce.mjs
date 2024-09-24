// product of all element of array


let ar1 = [1, 2, 3]
let result = ar1.reduce((pre,cur)=>{
    return pre*cur

},1)
console.log(result)