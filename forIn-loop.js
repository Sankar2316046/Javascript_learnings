//iterating values

//in values
var arr=[10,20,30,40];

for(var value in arr)
{
    console.log(value);//return index
    console.log(arr[value]);//return valuein that index
}

//in objects

var student = {
    name:"name",
    age:19,
    marks:[{
        sub:"sub1",
        mark:"mark1",
    },
    {
        sub:"sub2",
        mark:"mark2",
    }    
]
}

for(var i in student)
{
    console.log(i);//return keys
    console.log(student[i]);//return values 
}

for(var i in student.marks)
{
    console.log(student.marks[i]);//get 2 subject marks
}