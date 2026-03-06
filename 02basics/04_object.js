// singleton object 

const tinderuser = new Object() //it is a singleton object 
console.log(tinderuser)

tinderuser.id = "123abc"
tinderuser.name = "Neerajnanwal"
tinderuser.isloggedin = false

const tinderuser1 = {} // not a singleton object 
console.log(tinderuser1)

const regularuser = {
    email: "neerajnanwal17@gmail.com",
    fullname: {
        userfullname :{
            firstname :"neeraj",
            lastname:"nanwal"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname)
console.log(regularuser)

const obj1 = { 1: "a",2:"b"}
const obj2 = { 3: "a",4:"b"}
// we have to concat into obj3 
// const obj3 = {obj1,obj2} // that should not be the appropraite way of doing this 
// console.log(obj3)

// so the right way of performing concatenation be 
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

// or we can do this by suing the spread method 
const obj4 = {...obj1,...obj2}
console.log(obj4)


console.log(tinderuser)
//want to print only the keys present inside the tinderuser then 
console.log(Object.keys(tinderuser))
// if we want to print only the value rather than key then 
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("isloggedin")) // checkin that tinderuser has isloogedin property or not it rturn only the boolean value 


// now we learn the destrucuring the object 
const course = {
    coursename :" js in hindi",
    price :" 9999"
    , courseinstructor:"neerajnanwal"
}

// course.courseinstructor it is the longest way of get info about the properties of by wrtiing again n again we can do this by deconstructor 

const {courseinstructor} = course
const {coursename} = course
const {price} = course
console.log(courseinstructor)
console.log(coursename)
console.log(price)