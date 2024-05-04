//singleton if object create by constructor it's called singleton
//syntax: object.create dot operate


//object literals type of object declare

const mySym = Symbol("key1")//symbol declare in js
const JsUser = {
    name: 'mohit',
    "full name": "mohit kumar", //this type value don't access by (.)dot operate it's operate ([""]) square bracket
    mySym: "myKey1",
    age: 19,
    location: 'Bihar',
    email: 'mohit@google.com',
    isLoggedIn : false,
}
//access object two type (.)dot operate and ([""])square brackets

// console.log(JsUser.email);
// console.log( JsUser["email"])

// console.log( JsUser["full name"])
// console.log( JsUser[mySym])//access the symbol data type

JsUser.email = 'mohit@chatgpt.com'
// Object.freeze(JsUser)//it fixed JsUser content after this function use we don't change value
JsUser.email = 'mohit@microsoft.com' //it's change not consider because we use freeze function
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
