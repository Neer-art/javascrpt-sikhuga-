// in that we can learn the for of loop 

const arr = [1,2,3,4,5]

for (const element of arr) { // it can print the element 1 to 5 
    console.log(element)
    
}

const greetings = "Hello world this is neeraj nanwal"
for (const greee of greetings) { // it print all character in a new row wise
    console.log(greee)
    
}

//now we learn about the map 
const map = new Map()
map.set("IN","India")
map.set("usa","United states of america")
map.set("fr","france")

console.log(map)

//now we use the forof loop on the map 
for (const key of map) { // it return the whole key value as a list format
    console.log(key)  
}

for (const [key,value] of map) { // it return the output as a key value pair 
    console.log(key, ':-', value)
}

const myobject = {
    'game1':'NFS','game2':'spiderman'
}

// for(const [key,value] of myobject) { // like python we cannot crate the myobject 
//     console.log(key, ':-', value)    // it doesnot work with the this for of loop 
// }