const heros = ["flash", "batman", "superman"] 


const values = heros.forEach( (item) => {     //  forEach doesn't return the value
    // console.log(item);
    return item
} )
// console.log(values);   





//   filter

const myNums = [1, 2, 4, 5, 6, 5, 63, 10]

// const newnums = myNums.filter( (num) => num > 4)          //    return value
// console.log(newnums);

// console.log(myNums.filter( (num) => num > 4))          //    return value,    direct method





// const newnums = myNums.filter( (num) => {   //using {} created a scope means we have to use return for returning value. 
//     return num > 4
// } )
// console.log(newnums);




//    using forEach to access the element of the array
const newnums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newnums.push(num)
    }
})
console.log(newnums );


//     go to github repo and use example of book