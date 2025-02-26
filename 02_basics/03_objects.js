//  singleton  =>  objects created form constructor
// ex =>  Object.create


//  object literals
//    in objects the key is treated as a string and the value can be of any data types

const mySym = Symbol("key1")
const JsUser = {
    name: "Harsh",
    "full name": "Harsh Tiwari",
    [mySym]: "myKey1",     //  for defining symbol in object or refering to symbol
    age: 18
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);  //  best way to access the element of an object
// console.log(JsUser["full name"]);  //  as the key is already in defined in string so there is no way to access it by  '.()'  method
// console.log( JsUser[mySym]);


// change value of object

JsUser.name = "shivam"
// console.log(JsUser["name"]);

// Object.freeze(JsUser)  // stops changes in the object

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello user");
}
JsUser.greetingTwo = function(){
    console.log(`hello user ${this.name}`);    //  refering to the elements of the objects by interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
