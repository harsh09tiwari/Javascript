function sayMyName(){
    console.log("H");
    console.log("a");
    console.log("r");
    console.log("s");
    console.log("h");
    
}

// sayMyName()




// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(1, 2);




   ////          for storing the addition into result;  

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    
    return number1+number2
}

const result = addTwoNumbers(4,3)

// console.log("Result: ", result);





function loginUserMessage(username = "sam"){   ///  will never enter the loop as default username is already defined, so if no username is provided then it will take "sam" as username
    if(username === undefined){   // also written as if(!username)
        console.log("Please enter a username");
        return 
        
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("harsh"));
// console.log(loginUserMessage());  // important  =>  if nothing is passed it will return undefined





function calculateCartPrice(val1, val2,... num1){    //  rest operator also called spread
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "harsh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);    ///   in the place of price it will show undefined
    
}
// handleObject(user) 



// direct method  for object in function
handleObject({
    username: "sam",
    price: 399
})





//   array in function

const mynewArray = [200, 300, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray));

console.log(returnSecondValue([200, 300, 400, 600]));     // direct method
