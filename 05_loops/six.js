const coding = ["js","ruby","java","python","cpp"]

const value = coding.forEach((item) => {
    console.log(item)
})

console.log(value) // it can print all the value of coding and undefined 

const val1= coding.forEach((item) => {
    return item  // it return the only undefined
})

console.log(val1)

// now we study about the filter method in the javascript 
const mynums = [1,2,3,4,5,6,7,8,9]

// let newnums = mynums.filter((num) => num >4 ) // it doesnot print nayhting it return the value 
// console.log(newnums) // it print the value 5 6 7 8 9

// let newnums = mynums.filter((num) => {
//     return num >4 }) // if we use the curly brackett then we use the return function 
// console.log(newnums)    


const newnums = []
mynums.forEach( (num) => {
    if (num>4){
        newnums.push(num)

    }
})

console.log(newnums) // it can print the 5 6 7 8 9 


const book_publishes = [
    {
        title:'bookone',genre:'publicadd',publish: 1999,edition: 2002
    },
    {
        title:'booktwo',genre:'publicadd',publish: 1999,edition: 2003
    },
    {
        title:'bookthree',genre:'history',publish: 2000,edition: 2007
    },
    {
        title:'bookfour',genre:'publicadd',publish: 1980,edition: 2017
    },
    {
        title:'bookfive',genre:'history',publish: 1955,edition: 2009
    },
    {
        title:'booksix',genre:'science',publish: 1996,edition: 2007
    },
    {
        title:'bookseven',genre:'publicadd',publish: 2002,edition: 1970
    }
]

// let userbooks = book_publishes.filter((bk)=> bk.genre ==="history")

let userbooks = book_publishes.filter((bk)=> {
    return bk.publish >= 1995 && bk.genre ==="history"
})
console.log(userbooks)