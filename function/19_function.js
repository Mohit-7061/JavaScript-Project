

function addTwoNumber(number1,number2){
    // let result = number1 + number2
    // return result
    return number1+number2
}

 result = addTwoNumber(5,7)
// console.log('result :',result);

function LoginUserMessage (username = "sam"){//it's value overwrite if you further include the value
    if(username===undefined)//(!username)
    {
        console.log("Enter you username");
        return
    }
    else
    return `${username} user just logged in`

}

// console.log(LoginUserMessage('mohit kumar'))
// console.log(LoginUserMessage());

//calculate the cart price 

function CalculateCartPrice(...num)
{
    return num
}

// console.log(CalculateCartPrice(200,4,2345,234));

//Object handle in function
// const user = {
    // name: "mohit",
    // price:199
// }

function handleObject(anyObject)
{
   console.log(`Username is ${anyObject.name} and price is${anyObject.price}`);
   
}

handleObject({
    name:'mohit',
    price:209

});

//array in function

const MyArr =[233,655,87,44,33]

function returnSecondValue(getArr)
{
return getArr[1]
}

console.log(returnSecondValue(MyArr));