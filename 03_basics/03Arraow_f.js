//         about this  keyword = >   shows current context


const user = {
    username: "harsh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }

}

// user.welcomeMessage()
// user.username = "sam"   //     sam is context and harsh is changed to sam
// user.welcomeMessage()

// console.log(this);




//    this context work only inside an obj   not in fun.

// function chai(){
//     let username = "harsh"
//     console.log(this.username);
    
// }
// chai()


// another method

// const chai = function(){
//     let username = "harsh"
//     console.log(this.username);
    
// }
// chai()




//     ARROW FUNCTION      representation of  A.F    () => {}
//         this keyword can be used in both arrow and regular fun


// const chai = () => {
//     let username = "harsh"
//     // console.log(this);
//     console.log(this.username);
    
// }
// chai()


//     DIFFERENT METHODS OF ARROW FUNCTION

//    if   "{}"   is used "return" is required.   "()"  =>  not required


//       1 =>  basic arrow function

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }



//    2=>   IMPLICIT RETURN 

const addtwo = (num1, num2) => num1 + num2   //  just remove "{}"  ,   return from basic arrow fun

// const addtwo = (num1, num2) => (num1 + num2)   //  can also be written in "()" ,    used in react.

// const addtwo = (num1, num2) => ({username: "harsh"})   //   wrap in ()  for run,  if not it will return  undefined   or add return 


console.log(addtwo(3,5));






// const myArray = [2, 4, 6, 6]
 
// myArray.forEach(function ()  {})   //  normal fun

// myArray.forEach(() => {})  /// arrow function