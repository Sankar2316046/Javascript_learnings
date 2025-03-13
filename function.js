// block of javascript code used to perform specific function or task 

//function for printing hello

function PrintHello()
{
    console.log("Hello");
}

PrintHello()

//parameterised functions
//add 2 num

var a=10;
var b=20;

function Add(p1,p2) // p1 and p2 are parameters
{
    console.log(p1+p2);
}
Add(a,b)//here a and b are arguments

//default parameters

function AddDefault(p1 , p2=0)//if second parameter not provided then it will be 0
{
    console.log(p1+p2);
}
AddDefault(a);

//default value for variable

var num;
var newnum = num + 5;
console.log(num); // this will be undefied a num  is not initalized

var defaultNewNum =( num || 0 ) + 5;
console.log(defaultNewNum);// this will overcome situation and set 0 if num is not defined
