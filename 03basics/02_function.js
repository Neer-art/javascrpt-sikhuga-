// now we learn about the scope of the function 
//scope are of two types local scope and global scope 
//local scope be defined as a value which be defined inside a function 
// global value which be defined globally and cannot be changed 

// let be the globally defined scope variable 

// if (true){
//     let a = 30 
//     const b = 40
//     var c = 4999
// }
// // console.log(a) // a is defned inside the if condition we cannot access directly globally 
// // console.log(b) // b is defined only inside the function so we cannot access them outside the scope globally 
// console.log(c ) // var is an exception case we can access them outside a function 

let a = 300
const b = 20 
if (true){
    let a = 30 
    const b = 40
    var c = 4999
    console.log("inner :", a);
}
console.log(a) // now a and b defined globally so value of a and b is not chnaged 
console.log(b)

function one(){
    const username = " Neeraj nanwal"
    function two(){
        const website = " youtbe.com"
        console.log(username) // it is a child class and every child class can take the properties of the parent class so that's why code be execute without an error 
    }
    // console.log(website) // it is outside the two function then it cannot access the website 
    two()
}

one()

console.log(addone(5))
function addone(num){  // when fucntion is defined in that way then we can access them before intialization 
    return num+1 
}

console.log(addtwo(6)) // this type of declaring a function give an error that we cannot access them before the initialization 
const addtwo = function(num){
    return num+2

}