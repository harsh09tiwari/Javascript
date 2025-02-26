const myNums= [1, 2, 3, 4,5,6 ]

// const newNums = myNums.map( (num) => {return num + 10} )
// const newNums = myNums.map( (num) => num < 5 )     //   return boolean
// console.log(newNums);




//                         using foreach

// const newNums= []
//  myNums.forEach( (num) => {
//     newNums.push(num + 10)   
// })
// console.log(newNums);






///     chaining =>   and when condition (like map)  performs on the myNums the next conditon will be performed on new myNums which is created during the execution of the condition and so on.

const newNums = myNums
        .map((num)=> num*10 )
        .map((num) => num + 1)
        .filter((num) => num >=50)
console.log(newNums);