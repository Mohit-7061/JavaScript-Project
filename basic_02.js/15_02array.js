const marvel_heros = ['thor','iron','spiderman']
const dc_heros = ['superman','flash','batman']
//  marvel_heros.push(dc_heros)
//  console.log(marvel_heros);//add one element as a date 
//  console.log(marvel_heros[3][1])

const all_heros =marvel_heros.concat(dc_heros)
// console.log(all_heros);//it's add all element like array

//spread array it's marge multiple array
// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);


console.log(Array.isArray("mohit"));//I question to kya yeh array hai
console.log(Array.from("mohit")); //its change the string to array 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));//convert into array 