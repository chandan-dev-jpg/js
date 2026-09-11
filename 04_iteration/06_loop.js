//reduce

const myNum=[1,2,3]
const initialValue=0;

// const myTotal=myNum.reduce((acc,cval)=>
// {
//     console.log(`acc ${acc} and cval ${cval}`)
// return acc+cval
// },initialValue)

const myTotal=myNum.reduce((acc,cval)=>acc+cval,0)
// console.log(myTotal)

const shoppingCard=[
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"py course",
        price:899
    },
    {
        itemName:"java course",
        price:999
    },
    {
        itemName:"dsa course",
        price:9999
    }

]

const add=shoppingCard.reduce((acc,item)=>item.price+acc,0)
console.log(add)