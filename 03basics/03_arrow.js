// const user = {
//     username :" neeraj",
//     price : 999 ,

//     welcome : function(){
//         console.log(`${this.username},welcome to website`)
//         console.log(this)// it show the whole detial about the user 
//     }
// }

// user.welcome()
// user.username = " Dheeraj" // user ka username change kr diya to next line m username dheeraj hi hoga as comparison to neeraj

// user.welcome()

// console.log(this) // it show the emppty {}


// function chai(){
//     let username = "neerajnanwal"
//     // console.log(this) // it contain many detail 
//     console.log(this.username) // it show undefined 
// }
// chai()

// const chai = function(){
//     let username = " neerajnanwal"
//     console.log(this.username)
// }
// chai()


//Arrow function
// const chai = () => {
//     let username =  " neeerajnanwal"
//     console.log(this.username )
// }
// chai()

// const addtwo = (num1,num2) =>{return num1 + num2} // it is explicit return 
// console.log(addtwo(4,5))

// if a single line function then we dont need to use curly faces 
// const addtwo = (num1,num2) => num1 + num2
// console.log(addtwo(4,5))

// agar curly bracket m h to return likhna pdega 
// or agar normal bracket m likha to return nhi likhna pdega 

// const addtwo = (num1,num2) => (num1 + num2) // it is implicit return 
const addtwo = (num1,num2) => ({username:"neerajnanwal"}) // object return krvana h to paraantheis m aayege 
console.log(addtwo(4,5))