// in that we learn about the truthy value which be by defult get tru or flase lets study with help of example 

// const username = " NeerajNanwal"

// if(username){
//     console.log("got user email")
// } else {
//     console.log("no user logged in ")
// }

// it by defult take username as true value here we dont having comaprison with other but got the true so this is the concept of the truthy value 

// if username value is "" we got username value as false 
// const username = ""

// if(username){
//     console.log("got user email")
// } else {
//     console.log("no user logged in ")
// }

// if username value is " " we got username value as true
// const username = " "

// if(username){
//     console.log("got user email")
// } else {
//     console.log("no user logged in ")
// }

// if username value is []we got username value as true
const username = []

if(username){
    console.log("got user email")
} else {
    console.log("no user logged in ")
}

// falsy value be : false , 0 , -0, bigint , "",null,undefined,nan
// other value except the falsy value is known as the truthy value 
// truthy value: "0","false"," ",[] , {}, fucntion(){},


//nullish coalescing operator(??) : null undefined 
let val1 = 11;
// val1 = 4 ??10
// val1 = undefined ??20 
val1 = null ?? 20 
console.log(val1)
// if val1 = null ?? 10 then it ignore the null and undefined value then 10 is assign to val1 


// ternary operator : condition ? true : false 
//for example 
const icetearprice = 100 
icetearprice >80 ? console.log("more than 80 ") : console.log("less than 80 ")