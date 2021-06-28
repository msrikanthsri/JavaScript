//Ajax - Asynchronous javascript and XML

//Promises
fetch("https://jsonplaceholder.typicode.com/users")
.then((result)=>result.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error))

//Async Await

async function getData(){
    try{
    const result=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await result.json();
    console.log(data);
    }catch(error){
        console.log(error)
    }
}
getData()


//let vs var
var name="sri";
let age=10000;
console.log(window.name)
console.log(window.age)


var apple="apple"
let mango="mango"
var apple="banana"
//let mango="mango" // error bcoz let allows variable to use only once 