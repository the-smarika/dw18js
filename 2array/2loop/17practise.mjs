//[1,2,3]=>["1111","2111","3111"]

let num = [1,2,3]
let out = num.map((value,i)=>{
    return `${value}111` //value= value+"111"

})
console.log(out)