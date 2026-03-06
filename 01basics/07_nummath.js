// const score = 400
// console.log(score);

// const newscore = new Number(500)
// console.log(newscore); 

// // the above both method having declared the number but in second one method having specified or gave a confirmation that number:
// console.log(newscore.toString().length)// it convert into string and then finding their length of the newscore 
// console.log(newscore.toFixed(3)) // it produce the output with 3 point after decimal 

// const nee = 123.5226
// console.log(nee.toPrecision(5)) // it show only 5 number either it is after decimal or before decimal if number is beyond the decimal then it automatically roundoff the digit 
// console.log(nee.toPrecision(3)) //it gave output 124 


// ++++++++++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6)) //round off 
// console.log(Math.ceil(4.2)) // it take the big value 
// console.log(Math.floor(4.9)) // it takes the lower value 
// console.log(Math.min(2,3,5,8))
// console.log(Math.max(5,8,10,12))

// now how can we get generate the random number from within a range 
const min = 10 
const max = 50 
console.log(Math.floor(Math.random() * (max-min +1)) + min) // this generate a random value within range 10 to 50 