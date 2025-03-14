// reduce is used to reduce more values to one

var marks = [90,98,87,85];

var total = marks.reduce((prev,next,index)=>{
    return prev+next;//add previous value and next value
},0)// here 0 is initial value for prev

console.log(total);


//in objects 

var employee =[
    {
        name:"name1",
        salary:10000
    },
    {
        name:"name2",
        salary:5000
    }
]

var totalSalary = employee.reduce((prev,next,index)=>{
    return prev+next.salary;
},0)

console.log(totalSalary);