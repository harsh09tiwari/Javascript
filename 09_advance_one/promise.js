// const promiseOne = new Promise(function(resolve, reject) {    ///    creating promise
//     //   Do an async task 
//     //  DB calls, cryptography, network call
//     setTimeout(function() {
//         console.log('Async task is completed');
//         resolve()   //   resolve is connected to the .then 
//     },2000)
    
// })
// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// })  //    "promised consumed" is always return after the above

 




// //   another method   =>   second promise
// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve();
//     }, 2000)
// }).then(function(){
//     console.log('Promised consumed 2');
// })





// //    third promise

// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({username: " harsh", email: "harsh@google.com"})
//     },2000)
// })
// promiseThree.then(function(chai){     //   chai  is  linked to resolve() value, so we can call by giving any parameters in the function 
//     console.log(chai)
// })





//  fourth promise
//        promise handling  using   .then and  .catch

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;     //    for error use 'true'
        if (!error) {
            resolve({username: "harsh", email: "harsh@google.com"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    }, 2000)
});

promiseFour
.then(function (user) {              //  can also be written in this form 
    // console.log(user)             //  giving whole obj
    return user.username
}).then((username) => {             //   it is chaining (thenable),  if we will not use it, it will through error
    console.log(username);          //   if error is false
    
}).catch((error) => {               //   for error
    console.log(error);             //   if an error is true
}).finally(()=> console.log('The promise is resolved or rejected'))



 

//     my code   without setTimeout()
new Promise(function (resolve, reject) {
    let error = false; 
    if (!error) {
        resolve({username: "shivam", email: "shivam@gmail.com"})
    }
    else{
        reject('ERROR FOUND')
    }
})
.then(function(user){
    return user.username
})
.then(function(username) {
    console.log(username);
})
.catch(function (error) {
    console.log(error);
})
.finally(() => console.log('the promise is completed'))    //   this type of console.log() can will be correct when using arrow fun








//   promise five
//     promise handling using "ASYNC AND AWAIT"
//    async await can't handle error directly  show they will through error if error is found


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function() {
        let error = true;     //    for error use 'true'
        if (!error) {
            resolve({username: "JS", password: 123})
        }
        else{
            reject('ERROR: js went wrong')
        }
    }, 2000)
}) 


// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);  
//     console.log(response.username);
     
// }



//   handling catch so it don't throw error
async function consumePromiseFive(){
    try {               ///   for this use error  = false
        const response = await promiseFive     //   holding the value
        console.log(response);
        console.log(response.username);3
    } 
    catch (error) {
        console.log(error);
    }
}

consumePromiseFive()










//   using fetch in async/await

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()       //  using 'await' agian bcoz it takes time
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getAllUsers()





//    using fetch  in .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json();
})
.then(function(data){      //  handling  response
    console.log(data);
})
.catch(function(error){
    console.log(error);
})
