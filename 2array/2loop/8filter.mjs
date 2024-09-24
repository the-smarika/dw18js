//filter greater than 17
 
let input = [3, 4, 6, 17, 18, 19]
let output = input.filter((value,i)=>{
    if(value > 17){
        return true

    }
    else{
        return false
    }

})
console.log(output)
/*  
by default return is false
 */