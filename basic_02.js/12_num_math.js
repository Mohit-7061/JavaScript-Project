const score = 400
// console.log(score);

const balance = new Number (100)
// console.log(balance);
//different between is simple new and number object is specific to number it's see on result

//see some prototype of number 
 
// console.log(balance.toString()); //number convert into string tostring() function and use all string function in it's
// console.log(balance.toFixed(1));//it's fixed the floating number after decimal point
const otherNumber = 123.6548
// console.log(otherNumber.toPrecision(2)); //its fixed the floating number before decimal point

// const lack= 1000000000
// console.log(lack.toLocaleString('en-IN'));//it's use to easy to read large number

/**********************************math**************************************** */
// console.log(Math);
// console.log(Math.abs(-4)) //it's convert negative value to positive value

// console.log(Math.round(4.6));//round of the value 
// console.log(Math.ceil(4.1)); //round of the upper value 4.1 round of 5
// console.log(Math.floor(4.9));//round of the lower value 4.9 round of 4

console.log(Math.random());
console.log((Math.random()*10) +1 );
console.log(Math.floor(Math.random()*10) +1 );