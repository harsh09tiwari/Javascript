//  array

const array =[1, 2, 3, true, "harsh"]  //  arrays of js are resizable and can contain a mix of elements as you can see in the created array
// console.log(array[5]);   // out of bound so it will " undefined "

// console.log(typeof array); //  object


//  another method, in this method no need of  " [] brackets "

const myarray = new Array(1, 2, 3, 4, 5, 6)




//  Array copy's operations
//    shallow.copy   =>    just like pass by reference
//    deep.copy   =>   just like pass by value




//   Array Methods





// myarray.push(6)
// myarray.pop()   // remove last element

// myarray.unshift(8) //  for adding in start of the array
// myarray.shift() // remove first element from array,  and no parameters are given


// console.log(myarray.includes(8));   // gives answer in boolean
// console.log(myarray.indexOf(2));   // if element is not present in the array then it return -1


const newArray = myarray.join()  //  converts all elements of the array into string

// console.log(myarray);
// console.log(typeof newArray);


// slice ,  splice

console.log("A", myarray);   // original array


//  slice only returns the elements of the array from the given range and the last element is not returned.
const myn1 = myarray.slice(1, 3)
console.log("B" ,myarray);
console.log(myn1);


//  splice divides the array from the given range and the size of array of original arary is reduced
const myn2 = myarray.splice(1, 3)
console.log("C", myarray);
console.log(myn2);

