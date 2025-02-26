const m_heros = ["thor", "spider", "iron"]
const dc_heros = ["super", "flash",  "batman"]

// m_heros.push(dc_heros)   //  creats array inside an array

// console.log(m_heros);
// console.log(m_heros[3][1]);   // for accessing elements inside of annarray

// const combine = m_heros.concat(dc_heros) 
// console.log(combine);

// const allheros = [...m_heros, ...dc_heros]   //   ... =>  spread operator   work like concat

// console.log(allheros);


const another_array= [1, 3, 4, [6, 7, 8], 9, [10, 1, [2, 5,7]]]
const real_array= another_array.flat(Infinity)

console.log(real_array);

// console.log(Array.isArray("HARSH"));
// console.log(Array.from("HARSH"));  //  creates an array
console.log(Array.from({name: "Harsh"}));  //  intresting it creates an empty array as it gets confuse which to convert into an array



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))   // return an array form set of elements