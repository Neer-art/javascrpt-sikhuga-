// singleton having only one instance and we can create it by using constructor 


// object literal 
// if we have a symbol and we want to use this in our ibject then we can write as in [] inside this bracket 
const mysym = Symbol("key1")
const jsuser = {name:"neeeraj",age : 18,[mysym]:"mykey1",location :"rohtak",email:"neerajnanwal17@gmail.com"}

// we can access the key value as by two ways 
// first one 
console.log(jsuser.email) 
// secodn one is 
console.log(jsuser["email"]) // in that key is passed inside as a string form 
console.log(jsuser[mysym])
console.log(typeof mysym)

// if i use the freeze method then after that value should not be altered anaymore 
jsuser.email = "dheerajsaroha12@gmail.com"
// Object.freeze(jsuser) // it does not show any chnages after ttgat code be executed 
jsuser.email = "hiteshchaudhary12 @gmail.com"
console.log(jsuser)

// function in the js 
jsuser.greeting = function(){
    console.log("Helllo this is neeraj nanwal")
}

jsuser.greeting2 = function(){
    console.log(`Hello Js user ,${this.name}`)
}

console.log(jsuser.greeting) // it shows function annonymous means function is created but having no daa\ta 
console.log(jsuser.greeting())
console.log(jsuser.greeting2())