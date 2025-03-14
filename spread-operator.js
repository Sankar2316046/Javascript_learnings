//in arrays
var arr1 = [1,2,3]
var arr2 = [4,5]

var combinedArray = [...arr1, ...arr2];

console.log(combinedArray);

// in objects
var obj ={
    name:"oldname",
    age:19,
}

var newobj ={...obj, address:"student address"};//new key address is added

console.log(newobj);

var updateName ={...newobj,name:"newname"}

console.log(updateName)