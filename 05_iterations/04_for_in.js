//    for in   =>


const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby'
}


for (const key in myObj) {   //   return  key 
    // console.log(key);
}

for (const key in myObj) {   //   return the value of key
    // console.log(myObj[key]);
}


for (const key in myObj) {
    // console.log(`${key} shortcut id for ${myObj[key]}`);
}



//   for in =>   using on array

const arr = ["js", "cpp", "rb", "python"]


///      in this loop the key in array is the index value
for (const key  in arr) {  
    // console.log(key);
}

//        return the value
for (const key  in arr) {
    // console.log(arr[key]);
}





const map = new Map()
map.set('IN', "INDIA")
map.set('FR', 'FRANCE')

console.log(map);

for (const key in map) {
    console.log(key);
}

