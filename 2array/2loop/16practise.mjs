
//filter ["nitan", "ram","hari"] = ["nitan", "hari" ]  (filter those string whose length is greater or equal to 4

let names = ["nitan","ram","hari"]

let name = names.filter((value,i)=>{
    if(value.length >= 4){
        return value

    }

})
console.log(name)