
var obj={
    name: "poojitha",
    roll_no: 40,
    marks: 84,
};
console.log (obj.name + " is passed" );

//arrays
let marks = [85,40,97,35,67,40];
let sum=0
for (let val of marks){
    sum=sum+val;
}
let avg=sum/marks.length;
console.log(avg);

//protoype
var student={
    name: "pallavi",
    marks: 34,
    status: function(){
        if(this.marks > 35){
            console.log("pass");
        }
        else{
            console.log("fail");
        }
    },
};
student.status();
var student2={
    name: "shreya",
    marks:36,
}
student2.__proto__=student;
student2.status();
