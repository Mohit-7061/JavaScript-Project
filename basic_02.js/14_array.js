

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman","naagraj"]

const myArr2 =new Array (1,2,3,4)
console.log(myArr[1])

//Array methods

// myArr.push(6)
// myArr.push(7)//add the element in the last of the array
// myArr.pop()//popped the last element 

// myArr.unshift(9)//it's include at the first the array element
// myArr.shift()//Delete the first element
// console.log(myArr );

//slice, splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) //not change original array

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) //splice change original array 
console.log(myn2);
console.log("C",myArr);
