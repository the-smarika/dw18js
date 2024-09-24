// "niTAn"=> "Nitan"

let input = "niTAn"
 input= input.split("")

 let output = input.map((value,i)=>{
    if(i === 0){
        return value.toUpperCase()

    }
    else{
        return value.toLowerCase()
    }
    



 })

 console.log(output.join(""))