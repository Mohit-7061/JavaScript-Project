//const tinderUser = new object()//singleton object it's as no different singleton and without singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "mohit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "mohit@google.com",
    name: {
        userName: {
            firstName: "mohit",
            lastName: "singh"
        }
    }
}
// console.log(regularUser.name.userName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {4: "b", 7: "r"}
// const obj3 = {obj1,obj2}
// const obj3 =Object.assign(obj1,obj2)
const obj3 = {...obj1,...obj2}

// console.log(obj3);

const users = [
        {
          id: 1,
          email:"mohit@chatgpt.com" 
        },
        {
          id: 1,
          email:"mohit@chatgpt.com" 
        },
        {
          id: 1,
          email:"mohit@chatgpt.com" 
        },
        {
          id: 1,
          email:"mohit@chatgpt.com" 
        },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//ask you question the it's has isLoggedIn property in the object it's return boolean
// console.log(tinderUser.hasOwnProperty("logged"));

const course ={
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "mohit"
}
// console.log(course.courseInstructor);//otherwise

const {courseInstructor : Instructor} = course
console.log(Instructor);



  