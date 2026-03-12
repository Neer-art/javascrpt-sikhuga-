// immediately invoked function expressions( IIFE)

// we can immediate call the funciton 

// normal of calling the funciton is that suppose we have a function 

// function chai(){   // that types of shwoing the represention in which function name is included then it is known as named iife  <<<
//     console.log("database connected")
// }

// chai() // it is the tradition way of calling the function 

//  we can immediate call the funciton 
// (function chai(){
//     console.log("database connected")
// })() // this is auto call ithout creating thier instance of them 

// sometime global scope m variable k karan problem hoti that why we have to use the immediate invoked function 

// suppose we have an arrow function then we can do this 

(() =>{
    console.log(" Dabas hai bhai hum dabas")
})();
// note if we have more than one immedeaite call fcuntion then we have to use the semicolon at the end otherwise it show the error if we dont use the semicolon at the end 

(() =>{
    console.log(" Dabas hai bhai hum dabas")
})();

// suppose we have to pass the perimeter then we can also do this in thhat kind of function
((name) =>{
    console.log(`hello this is the ${name} `)
})("Neeraj_Nanwal");


// ******************* jAvascript execution context *********
// it means that how the javascript file be executed whcih be created 
// for running the file it convert the file into two phase 

//  step first the code file is enetered which we have to run the file 
// the global execution context be created in which this key word is present 
// note this keyword is vary like in broweser the value of this is window object and in node js they have different value of this 
// it executes in thread >>

// type of execution context 
 // 1. global exectuion context 
 // 2. function execution context 
 // 3. eval execution context 

 // code of javascript is ready and go to first phase name memory creation phase (mainly memory is allocated in this phase )
 // second phase is executon phase 