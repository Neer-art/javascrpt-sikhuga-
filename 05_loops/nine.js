// in this we larn about the reduce method 
const num = [1,2,3,4]

const mytotal = num.reduce(function (acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
},0)

console.log(mytotal)

const shoppicart = [
    {
        itemname : "js course",
        price : 12000
    },
    {
        itemname : "python course",
        price : 12500
    },
    {
        itemname : "nodejs course",
        price : 12000
    },
    {
        itemname : "java course",
        price : 2000
    },
    {
        itemname : "js course",
        price : 12000
    }
]

const pricetopay = shoppicart.reduce((acc,item) => acc + item.price,0)
console.log(pricetopay)