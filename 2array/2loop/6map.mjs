//[ "my", "name","is"] => ["MYN","NAMEN", "ISN"]

let input = ["my", "name", "is"]

let output = input.map((value,i)=>{
    value = value + "n"                 // value= `${value}n` //return = `${value.toUpperCase()N`}
   return value.toUpperCase () //+n    // return `${value}n`.toUpperCase()

})
console.log(output)