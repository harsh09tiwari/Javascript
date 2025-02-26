//    forEach

const heros = ["flash", "batman", "superman"] 


heros.forEach( function (val) {
    // console.log(val); 
} )

heros.forEach( (val) => {
    // console.log(val);
} )


function printme(val){
    // console.log(val);
}
heros.forEach(printme)



heros.forEach( (val, index, arr) => {
    // console.log(val, index, arr);
} )




//   object inside array


const coding= [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    }
]

coding.forEach( (val) => {    //    val is whole obj in array
    console.log(val.languageName);
} )