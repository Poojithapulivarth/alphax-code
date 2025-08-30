
let nums=[33, 2, 44];       
function square (num){              //functions
    console.log(num*num);
}
nums.forEach(square); //callbackfunction

let number=[45, 66, 7];     //arrow functions
const squares=(n) => {
    console.log(n*n);
}
number.forEach(squares)