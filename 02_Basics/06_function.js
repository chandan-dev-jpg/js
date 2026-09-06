const fun1=function()
{
    console.log("c")
    console.log("h")
    console.log("a")
    console.log("n")
    console.log("d")
    console.log("a")
    console.log("n")
}
// fun1()

function add(a,b)//a,b parameter
{
    return a+b;
}
// console.log( sum(1,2))// 1 ,2 are arugument
// const rs=add(3,5)
// console.log(rs)

function loginUserMessage(username)
{
    if(!username)
    {

        console.log("Please enter a validName!!!")
        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())


function calculateCartPrice(val1,...num1)
{
return num1

}

// console.log( calculateCartPrice(2))
// console.log( calculateCartPrice(200,400,600))

const user1=
{
    username:"Raju",
    age:20
}

function userDeatils(anyObject)
{
console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}
// userDeatils(user1)
// userDeatils(
//     {
//         username:"raja",
//         age:23
//     }
// )


const arr1=[200,300,600,900]
function returnSecondValue(getArray)
{
return getArray[1]
}

// console.log(returnSecondValue(arr1))
console.log(returnSecondValue([100,200,400]))