const userEmail = []

if (userEmail) {
    console.log("got user email");
    
}
else{
    console.log("don't have is us er email");
    
}






// falsy values

// false, 0, -0, BigInt, 0n, "", null, undefined, NaN 




// truthy values

// "0", 'false', " ", [], {}, function(){}   //   string ke andar koi bhi value true val hai



// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}






// Nullish Coalescing Operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15  ///assign first value    null and undefined is not  a val


console.logf(val1);




//    different form above

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log(" more than 80");

