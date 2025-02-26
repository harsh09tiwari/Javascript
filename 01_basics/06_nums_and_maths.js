const score = 100
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(typeof score);


// console.log(balance.toString());   //  converting to string
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));   //  add decimal value in the number upto the given number

console.log(typeof balance);

const ans= 28.9879
// console.log(ans.toPrecision(1)); // output is converted into string and priority is given to the digits before the decimal point, and it also performs roundof if the value is equal to the toPrecision and if it increases it gives output in exponential value

const harsh = 10000000
// console.log(harsh.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++  MATHS   +++++++++++

// console.log(Math);
// console.log(Math.abs(-4));   // converts negative to positive
// console.log(Math.round(76.4));   // rounodof
// console.log(Math.ceil(4.6));  // roof
// console.log(Math.floor(4.6)); //  floor value
// console.log(Math.min(4, 2, 5, 7));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);



const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)+ min));  // for range in random value
