const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// myNum.map((num)=>
// {
// console.log(num+10)
// })

// myNum.map((num)=>num+10)

const newNum = myNum
    .map((num) => num * 10)
    .map((num)=>num+1)
.filter((num)=>num>=50)
console.log(newNum)