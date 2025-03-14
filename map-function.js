//map is used to iterate and do some function

var arr= [1,2,3,4,5]

var newarr = arr.map(value=>
{
    return value+1;//for every value 1 is added
})

console.log(newarr);

var names =["stu1","stu2","stu3"];

var obj = names.map((value,id)=>
{
    return {Id:id,name:value};// for every value an object is created with id and name
})

console.log(obj);

