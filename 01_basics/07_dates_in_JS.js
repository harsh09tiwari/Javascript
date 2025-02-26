let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString);


console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 0 ,25)
// let myCreatedDate = new Date(2024, 0 ,25, 5, 3)
// let myCreatedDate = new Date("01-11-2024")
let myCreatedDate = new Date("12-01-2024")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp);   //  return  the current DATE in miliseconnds 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));   // return the DATE in secomds


let newDate = new Date()
// console.log(newDate.getHours());
// console.log(newDate.getDate());
// console.log(newDate.getDay());  // return the day name like 'Sun'
// console.log(newDate.getMonth()+1); //  month start with '0'

// console.log(`${newDate.getFullYear()} and the time`);  // it is interpolatiomn


newDate.toLocaleString('default', {
    weekday: "short"
})
