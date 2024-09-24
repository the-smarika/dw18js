//check whether we have all even number in the list [2,4,9,6]

let num = [2,4,9,6]

let isEven = num.every((value,i)=>{
    if(value %2 === 0){
        return true

    }
    else{
        return false
    }

})
console.log(isEven)
