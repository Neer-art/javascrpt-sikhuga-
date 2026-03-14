const myobject = {
    js :'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple '
}

// in the three .js this example is not work properly in the forof loop 
// now we can learn the forin loop 
// we can easily use this dictionary data type like in python by the help of forin loop 
for (const key in myobject) {
    console.log(key) // it print all the key like js,cpp,rb and swift 
    console.log(`${key} shortcut is for ${myobject[key]}`)   
}


// when the programming array is used in the forin loop and we print the key then it return the 0 1 2 3 4 
const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    console.log(key); // it print the 0 1 2 3 4 
    console.log(programming[key]) // then it print the js rb py java cpp 
}

//for in loop is not work well with the map cause map is not iterable 