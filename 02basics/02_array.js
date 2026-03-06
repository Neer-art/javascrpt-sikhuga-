const marvel_heros =  ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heros.push(dc) // it include the whole array into an existing array there ouput should be ["thor","ironman","spiderman",["superman","flash","batman"]]
// console.log(marvel_heros) 

const newhero = marvel_heros.concat(dc) // when we join two array then we have to store their result into the new array which be created 
console.log(newhero)

// we can perform the same task without using the concat method we using here the spread method in tthat zcenarios 
const all_new1 = [...marvel_heros,...dc]
console.log((all_new1)); // both output having the same answer 


// suppose we have an aray having consisiting more than one subarray then our task is to be remove the all element from the subarray and add into the new array then we can do this task with the help of the flat method in the array 

const myanother = [1,2,3,[4,5,6],7,[8,7,[1,2,3]]]
const rela = myanother.flat(Infinity) // we pass infinty cause it remove all the depth element presenet inside the array 
console.log(rela);

//is array chceking the given is an array or not 
// if not then we can easily create this with the help of Array.from
console.log(Array.isArray("neerajnanwal"
))

console.log(Array.from("neerajnanwal"))
console.log(Array.from({name: "neerajnanwal"})) // it return the whole array and an empty array inside the subarray 

// suppose we can have many multiple corresponding value then we have to convert into this array then we can simply do this by  using Array.of function for example 
let score_1 = 100 
let score_2 = 200
let score_3 = 300 
let score_4 = 400 
console.log(Array.of(score_1,score_2,score_3,score_4))
