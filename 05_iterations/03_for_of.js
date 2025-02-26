//     for of  =>  can iterate array, and can not iterate object

const arr = [1, 2, 3, 4, 5 ]
 
for (const i of arr) {  //   no iteration++ like (i++) is required
    // console.log(i);   
}



const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}






//    Maps   =>   contain unique value    and they are not iteratable

const map = new Map()
map.set('IN', "INDIA"),
map.set('IN', "INDIA"),
map.set('FR', 'FRANCE')

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    console.log(key, ':-', value);
}





const myObj = {
    'game1' : 'NFS',
    'game2' : 'TAKEN'
}
// for (const [key, value] of  myObj){
    // console.log(key, ':-', value);
// }     //  not for object