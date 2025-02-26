// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInteger,

const scores = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;              // its automatically declares as undefined


// values are different  // Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );

// BigInt

// const bignumber = 9879786786578n


// Reference (non Primitive)  =>   typeof  of these datatypes is object
//  and typeof function :  return function =>  and it is called objectfunctiion
// Array, Objects, Functions


 
const heros = ["superman", "spider"];
let myObj = {
    name : "harsh",
    age : 20
}
 // function can also be treated as datatypes in js

const myfunction = function(){
    console.log("Hello world");
    
}


console.log(typeof bignumber);
console.log(typeof outsideTemp);



///                 MEMORY


///    STACK  (primitive),  HEAP (non-primitive)

let one = "hello"
let two = one

two = "world"

console.log(one);
console.log(two);


let userOne = {
    email: "harsh@gmail.com",
    name: "harsh"
}

let userTwo = userOne
userTwo.email = "shivam@google.com"

console.log(userOne);
console.log(userTwo);
