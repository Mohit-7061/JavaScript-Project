//Immediately Invoked function Expressions (IIFE)

(function one(){
    console.log(`DB CONNECTED`);
})();

//with arrow function
(  () => {
    console.log(`DB CONNECTED TWO`);
})();


//with variable
(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('mohit')
