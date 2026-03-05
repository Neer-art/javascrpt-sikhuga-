// we can declare the string by two way either it is in double quotes or we use single quotes 

// // for concat we use + 
// const name = "nereaj"
// const last= "nanwal"

// console.log(name + last);
// // for dynamically changement we use the backtick function in our system 
// console.log(`hello this is ${name} and my last name is ${last}`);

// for cheking about the details fucniton o fstring 

const gamename = new String('neerajnanwal-15')
console.log(gamename[0]) // it print the 0 index value which is n 

// console.log(gamename.__proto__) // it reflect it empty string but it is not empty we can chcek this is in next line 
// console.log(gamename.toUpperCase()) //it cannot change the original string because here we take refrence 
// console.log(gamename.charAt(0))
// console.log(gamename.indexOf("r"))

// const newname = gamename.substring(0,4)
// console.log(newname);

// const another = gamename.slice(-3:)
// console.log(another);


const newstring = "      Neeraj    "
console.log(newstring)
console.log(newstring.trim())

const url = "https://neerajnanwal17/hitesh%20nenana"

// now we can replace the %20 to @
console.log(url.replace("%20","@"))