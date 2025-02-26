//  for

// for (let i = 0; i <10; i++) {
//     const element = i;
//     console.log(element);
// }

// console.log(element);   ///    out of scope




// multiplication from 0 to 9

// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop value ${i}`);
    
//     for (let j = 0; j< 10; j++) {
//         console.log(i + '*' + j + '=' + i*j);
//     }
    
// }




//  loop on array

// let myArray = ["flash", "batman", "superman"] 
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);  //   or   direct =>    console.log(myArray[index]);
// }


//   break and continue  can be used in for loop






// for (let index = 1; index < 21; index++) {
//     if (index == 5) {
//         console.log(`detected 5`);
//         break;     //   exit the loop
        
//     }
//     console.log(`value of i is  ${index}`);
// }


for (let index = 1; index < 21; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue
        
    }
    console.log(`value of i is  ${index}`);
}