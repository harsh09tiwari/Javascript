//  if  statement

// const isUserLoggedIn = true

const temperature = 41
// if (temperature === 40){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }





// const score = 200

// if (score > 100) {
//     const power ="fly"
//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);    //  out of scope






const balance = 1000

// if (balance > 500) console.log("test"), console.log("lol");  //   implicit scope =>  means maan liya hai ki scope hai,  execute in one line



// nested loop
    
// if (balance < 500) {
//     console.log("less than");
// }else if(balance<850){
//     console.log("less than 850");
// }else{
//     console.log("lol");
// }




const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
    console.log("allow");
    
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
    
}