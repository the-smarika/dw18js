let word = "my name is nitan thapa"

/* let output = word.split("")  */

let output1= word.split(" ").map((value,i)=>{
    return value.split("").reverse().join("")
})
console.log(output1.join(" "))