// arrow function,this

const user ={
    username: 'mohit',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to  website`);
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = 'kumar'
// user.welcomeMessage()

//arrow function :- simpl you create arrow function then you remove the function key word and add arrow => that's it's

// const addTwo = (num1,num2) => {
    // return num1+num2
    
// }

//implicit return

// const addTwo = (num1,num2) =>  num1+num2
const addTwo = (num1,num2) =>  (num1+num2)


console.log(addTwo(3,5));