const myNums = [1, 2, 3]


//    acc -->  accumulator,    curr -->  currentvalue

// const myTotal = myNums.reduce(function (accumulator, currentvalue) {
//     console.log(`acc: ${accumulator} and currval ${currentvalue}`);
//     return accumulator + currentvalue
// }, 0)   //   0  =>  initial value


// const myTotal = myNums.reduce( (acc, curr) => acc+ curr, 0)
// console.log(myTotal);

//   above both are same





const shoppingCart = [
    {
        itemname: "jscourse",
        price: 2999
    },
    {
        itemname: "phone",
        price: 4999
    },
    {
        itemname: "laptop",
        price: 2999
    }
]

const pricetoPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetoPay);
