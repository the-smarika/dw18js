let input = [1, 2, 3]


/* 
syntax
execution
uses
  [1,2,3]=> [1,3] use filter
  [1,2,3]=> [1,4] don't use filter

*/
let output = input.filter((value,i)=>{
    if(value % 2 === 0){
        return true

    }
    else{
        return false
    }

})
console.log(output)