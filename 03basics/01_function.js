function myname(){
    console.log("N")
    console.log("e")
    console.log("e")
    console.log("r")
    console.log("a")
    console.log("j")
}

myname()

function add_two_number(a,b){
    console.log(`the addition of two number ${a} and ${b} is ${a+b}`)

}
add_two_number(5,8)

function cartprice(num1){
    return num1 
}

console.log(cartprice(2))
// suppose we have multiple item in our cart and we want to print list of th item then we can do this by using rest operator or spread operator 

function cart1(...num1){
    return num1
}

// n tat way we can do this by using the rest operator 
console.log(cart1(2000,22,50,63))

const user = {
    username :"neeraj0",
    price:200
}
function handleobject(anyobject){
    console.log(`username s ${anyobject.username} and price is ${anyobject.price}`)
}

// handleobject(user) // we can print this in that way 

handleobject({username :" Neeerrrraj ",price: "515415"})

// we pass the object into the function now we can pass the array 
const newarray = [200,400,600]
function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue(newarray)) // we get the 1 index value through using the function 