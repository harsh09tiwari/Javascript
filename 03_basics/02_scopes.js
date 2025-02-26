//  var c= 30
let a = 300

if(true){
    let a =10
    const b = 20
    // console.log("INNER: ",a);
    
    // var c =30
}


// for (let i = 0; i < array.length(); i++) {
//     const element = array[i];
    
// }
 

// console.log(a);
// console.log(b);
// console.log(c);    //   it will print because of var declaration







 //      closure in js


function one(){
    const username = "harsh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    // two()
    
}
one()








 

if(true){
    const username = "harsh"
    if (username === "harsh") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);      //  error    =>  out of scope access
    
}
// console.log(username);        //      same          ^




// ++++++++++++++++++++++  intresting  +++++++++++++++++++++++++



console.log(addone(6))     //   it can access it 

function addone(num){
    return num +1
}






// addtwo(5)    //  can not access it before initialization  in this type of declaration

const addtwo = function(num){       //   function as a expression
    return num + 2
}

// addtwo(5)    //   it can access




//    concept of hoisting