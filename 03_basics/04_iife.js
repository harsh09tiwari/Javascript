//    Immediately Invoked Function Expression  (IIFE)


//    global scope ke pollution se problem hoti hai kai baar to us global scope ke jo variable ya declaration hai, uske pollution ko hatane ke liye iife ka use hua 


(function chai(){          // ye function named iife hai kyuki iska name hai
    console.log(`DB CONNECTED`);
})();                     //  to end invoke function use semicolon ";" 



//  agar  2 iife likhna hai back to back to pahle iife ko end karna padega


( (name)=> {             //  ye simple iife hai
    
    console.log(`DB CONNECTED TWO ${name}`);
    
})("Harsh");


//  arrow function is simple iife.