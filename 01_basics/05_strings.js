const fname = "Harsh"
const lname = "Tiwari"

// console.log("Harsh" + " Tiwari");

console.log(`My name is ${fname} ${lname}`);

// console.log(fname[0]);


//   Another method to declare a string
//  this method inovke objects or it is a obj

const  cool = new String('Helloht')
// console.log(cool);

// console.log(cool[1])

// console.log(cool.length);
// console.log(cool.toUpperCase());
console.log(cool.charAt(5))   // return the element at 5th character

console.log(cool.indexOf('t'));   // return the index of charcter


const newString = cool.substring(0,2)
console.log(newString);

const anotherString = cool.slice(-7, 2)
console.log(anotherString);


const newStringOne = "    harsh  tiwari "
console.log(newStringOne);
console.log(newStringOne.trim());  // remove unwanted spaces

const url = "www.google.com"
console.log(url.replace('www', 'hello'));
console.log(url.includes('harsh'));   //  give value in boolean

// const lol = new String ('hello_harsh_tiwari')
const lol = "hello_harsh_tiwari"

console.log(lol.split('_'));