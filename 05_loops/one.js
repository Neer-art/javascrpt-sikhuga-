// for loops :

//syntax of for loop 
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// print 1 to 10 number using for loop 
for (let index = 0; index < 11; index++) {
    const element = index
    console.log(element)
}

// table of 1 to 10 in 1 one time 
for(let i = 1; i <=10; i++){
    console.log("outer loop :" , i )
    for(let j = 1;j<=10;j++){
        console.log(i+"*"+j + ' = ' + i*j )
    }
}

let myarray = ["flash","spiderman","batman","thor"]
for(let i = 0;i <= myarray.length -1 ;i++){
    console.log(myarray[i])
}