 let input = [ 1, 2, 3, 4, 5, 6, 7]

 let output = input.filter((value,i)=>{
    if(value === 2 || value === 4){
        return true

    }

 })
console.log(output)