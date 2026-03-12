// if statement in the javascript 
// syntax of if statement be 
 
if ( 2 !== 2){ // code which be execute if cdntion be satisfy 
    console.log("executed")
}
else {
    console.log("not executed ")
}
// < , > , <= , >= , == ,!= ,===,!== 
// note == check the value is equal or not it gives true even 2 == "2" where the data typesis not check 
// === check the data types also 
// !== is used where the value is different and the data type is also different 


// if else ladder 

const balance = 1000

if(balance <500){
    console.log("less than 500")
} else if (balance <750){
    console.log("less than 750 ")
} else if ( balance <1100 ){
    console.log("less than 1100")
}


const userelogin = true 
const debitcard = true 
const loggedingoogle = false 
const loggedinfromemail = true 

if( userelogin && debitcard & 2 ==3){
    console.log("Allow to buy course ")
}

if( loggedinfromemail || loggedingoogle){
    console.log("user logged in")
}
