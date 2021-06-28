//functions
//hoisting
addCartValue()
function addCartValue(){
    console.log("Functions");
};

//arrow function
/*addCartValue1();
var addCartValue1=()=>{
    console.log("arrow function");
};*/

//this keyword
const obj1={
   name:"sri",
   getThis:function () {
       console.log("inside obj");
   } ,

};
//console.log(this);
obj1.getThis();


//Array & Objects
const array1=[1,2,3,4,5,6]

//add value to end of array
array1.push(7)
console.log(array1);

//delete the last element from array
array1.pop(7)
console.log(array1)
//add value at the index 0
array1.unshift(8)
console.log(array1)
//delete index 0 value
array1.shift()
console.log(array1)

//array for loop
array1.forEach(element => {
    console.log(element)
});

//objects

const student={
    name:"srikanth",
    section:"as"
}

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

//freeze

const student1={
    name:"srikanth",
    section:"as"
}

Object.freeze(student1)
student1.name="prashanth"
console.log(student1);
console.log(Object.isFrozen(student1))