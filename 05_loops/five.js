const coding = ["js","ruby","java","python","cpp"]

// now we can learn the foreach loop 
coding.forEach(function(val){   // it is a callback function having not specified their name 
    console.log(val) // it print all the js ruby java etc
})

// for each using arrow function 

coding.forEach( (item) => {
    console.log(item);  // it is the implementation of for each function 
    
})


// now another way of using the for each 
function printme(item){
    console.log(item)
}

coding.forEach(printme) // it simply take value from the coding array and the value is go to the printme statement then it print the item 


coding.forEach( (item,index,arr)=> {
    console.log(item,index,arr)
})


const mycoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "python",
        languagefilename: "py"
    },
    {
        languagename: "c++",
        languagefilename: "cpp"
    },
]

// we can easily access multiple object using the foreach loop 
mycoding.forEach( (item) =>{
    console.log(item.languagename) // we can easily access thorugh using the foreach loop
    console.log(item.languagefilename)
}) 
