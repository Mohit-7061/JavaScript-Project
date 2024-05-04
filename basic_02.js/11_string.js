const name ="mohit"
const repoCount =50
// Add two string is called concatenate by using + operator
console.log(name + repoCount + "value");

// multiple type to add string but that method is old method we use new method

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//this method is modern method

const gameName = new String('mohit kumar') //modern type to declare string 
console.log(gameName[2]); //its calculate index value of string
console.log(gameName.length); //the multiple per define function in string to operate (.)dot opetater
console.log(gameName.toUpperCase());
const url = 'https://mohit.com/mohit%20kumar'
console.log(url.replace('com','dot')); //this is replace is word 