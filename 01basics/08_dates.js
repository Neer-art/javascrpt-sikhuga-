//we learn about the date 

let mydate = new Date()
// console.log(mydate) //it hsow date and many more t08 etc 
// console.log(mydate.toString()) // it show date and current time in india standard 
// console.log(mydate.toDateString()) // showing only date 
// console.log(mydate.toISOString()) // same as mydate
// console.log(mydate.toJSON()) //same as mydate 
// console.log(mydate.toLocaleDateString()) // show 3/5/26
// console.log(mydate.toLocaleString()) // show 3/5/26 1:55:09

// console.log(typeof(mydate)) // showing it object 

let mycreateddate = new Date( 2023,1,25)
// console.log(mycreateddate.toDateString())
console.log(mycreateddate.getTime())


// let mytimestamp = Date.now()
// console.log(mytimestamp)
// console.log(Math.floor(mytimestamp /1000))

let newdate = new Date()
console.log(newdate)
console.log(newdate.getMonth() +1) // add 1 cause index be from 0 
console.log(newdate.getFullYear())
