// download nodejs and run => node filename.js => to run the file in terminal via nodejs

//primitive datatypes

var integer = 10;
console.log("integer "+ integer);
console.log("---------------")

var float = 1.23;
console.log("float " +float);
console.log("---------------")

var string = "String";
console.log(string);
console.log("---------------")

var boolean = true; 
console.log("boolen "+boolean);
console.log("---------------")

var donovalue = null;
console.log("null value "+donovalue)
console.log("---------------")
//non primitive datatypes

//arrays
var arrayofstrings = ["str1","str2","str3"]
console.log(arrayofstrings)
console.log("---------------")
console.log("First value " + arrayofstrings[0])
console.log("---------------")
var len = arrayofstrings.length;
console.log("Size of array " + len)
console.log("---------------")
console.log("Last value " + arrayofstrings[len-1])
console.log("---------------")
//objects => key:value pairs

//single object
var student1={
    name:"Student name",
    roll:1
}
console.log(student1)
console.log("---------------")
console.log("Name=>"+ student1.name)
console.log("---------------")
console.log("Roll=>"+ student1.roll)
console.log("---------------")
//array of objects
var students=[
    {
        name:"Stu1",
        roll:1
    },
    {
        name:"Stu2",
        roll:2
    }
]
console.log(students)
console.log("---------------")
//student1 data
console.log(students[0])
console.log("---------------")
//student1 name
console.log("stu1 name "+students[0].name)
console.log("---------------")