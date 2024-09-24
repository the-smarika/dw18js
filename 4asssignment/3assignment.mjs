let input = "hariRAM"

let result1 = input.split("").map((value,i)=>{
    if(i === 0){
        return value.toUpperCase()

    } 
    else{
        return value.toLowerCase()

    }

})
.join("")

console.log(result1)