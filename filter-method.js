// it is used to filter values based on condition

var arr = ["pass","pass","fail"]

var passArr = arr.filter(val => val!="fail")

console.log(passArr);

//in objects

var students = [
    {
        name:"name1",
        mark:90,
    },
    {
        name:"name2",
        mark:80,
    },
    {
        name:"name3",
        mark:35,
    },
]

var passStudents = students.filter( val => val.mark > 50);//stores students only if mark > 50

console.log(passStudents);