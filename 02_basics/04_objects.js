//   singelton

// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = '123aabc'
tinderUser.name = "harsh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const newUser = {
    email : "harsh@google.com",
    fullname: {
        userfullname : {
            firstname: "Harsh",
            lastname: "Tiwari"
        }
    }
}

//  console.log(newUser.fullname.userfullname.firstname);
 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}     //  combine the two objects into an object
// console.log(obj3);

// const obj4 = Object.assign({}, obj1, obj2)   //   concat the objects,  and  {}  is a target and (obj1, obj2) is source

const obj4 = {...obj1, ...obj2}   //  spread operator  ,   best 
// console.log(obj4);


//    Object inside an array


const user = [
    {
        name: "harsh",
        age: 18
    },
    {
        name: "utkarsh",
        age: 19
    },
    {
        name: "kabir",
        age: 20
    }
]

// console.log(user[1].name);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  ///   return the keys in the array
// console.log(Object.values(tinderUser));  ///   return the vlaues in the array
// console.log(Object.entries(tinderUser)); /// convert all key & vlaue into array and return them into an array


console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // check if the property is present or not in the object, if present return true, else false

//   destructuring of objects

const course  ={
    cousename : "js",
    price:"999",
    courseInstructor: "harsh"
}

// course.courseInstructor

const {courseInstructor} = course   //  better version of    course.courseInstructor
// const {courseInstructor :  Instructor} = course  /// can also change name like from courseInstructor to Instructor

// console.log(Instructor);



/*
const navbar = ({comapany}) => {   /// used in react  instead of props

}

navbar(comapany = "harsh")
  
used in react
*/


//  json  is a object    and this is the representation of it

// {
//     "name" : "harsh",
//     "age" : "twenty"
// }

//  jason in array

[
    {},
    {},
    {}
]
