// array learning in the js 
// javascript array are resizeable we can easily add many more item if when once be declared 
// javascript array copy operation crreate shallow copy rather than deep copy 
// shallow copy of an object is a copy whose properties share the same refrence of the source object from whihc copy was made which mean that if changes occur in shallow copy then it reflect in the object from where shallow copy be created 
// deep copy dose not show any changes in the original if the chnages occurs in deep copy object 


// we can declare by two method 
//method 1 
const arr = [0,1,2,3,4,5]
const heros = ["hero","shaktiman","thor"]

// method 2 
const myarr2 = new Array(1,2,3,4)
// console.log(typeof(myarr2))
// console.log(typeof(arr))

// arrays method 
// push method : add element to the array at last 
myarr2.push(6)
myarr2.push(7)
console.log(myarr2)
 
//pop method : remove eelemet from last 
myarr2.pop()
console.log(myarr2)

//unshift method add element into the starting position 
myarr2.unshift(34)
console.log(myarr2)

// shift method delete the first index value from the array 
myarr2.shift()
console.log(myarr2)

// includes method gave answer true or false 
console.log(myarr2.includes(9)) // it gives false as an output 

//index method return the index of the value . if value is not in array then it give -1 as an output 
console.log(myarr2.indexOf(9))

// join method convert the array into string types like as in example 
const newarr = myarr2.join()
console.log(newarr)
console.log(typeof newarr)

//slice and splice method 
console.log("a",myarr2)
const myn1 = myarr2.slice(1,3)
// slice method basically create the slicing from array and create a ne array in which last (1,3) 3 is not include and does not change in the original array 
console.log(myn1)
console.log("B",myarr2)

// but in splice method like splice(1,3) 3 is also include and the value is also remove from the original array myarr2 (1,3 ) so that's why it return only A[1,6]

const myn2 = myarr2.splice(1,3)

console.log(myn2)
console.log("A",myarr2)