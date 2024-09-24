/// ["my","name","is"] => ["My","Name","Is"]

let input = ["my", "name", "is"]

let output = input.map((value,i)=>{

    let output1 = value.split("").map((value,i)=>{

        if(i === 0){
            return value.toUpperCase()

        }
        else{
            return value.toLowerCase()
        }

    })
    return output1.join("")

})
console.log(output)

    