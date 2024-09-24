//check whether a person has smoking habit   ["smoking", "drinking", "biting nails"]

let ar1 = ["smoking", "drinking", "biting nails"]
 let habit = ar1.some((value,i)=>{
    if(value === "smoking"){
        return true

    }
    else{
        return false
    }

 })
console.log(habit)