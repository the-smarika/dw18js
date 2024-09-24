//check whether all students get pass mark from the list [ 40,30,80] here pass marks is 40

let marks = [4, 30, 80]

let isList = marks.every((value,i)=>{
    if(value>= 40){
        return true

    }
    else{
        return false
    }

})
 console.log(isList)
