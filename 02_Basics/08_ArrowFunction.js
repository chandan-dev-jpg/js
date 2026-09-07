const user=
{
    userName:"raju",
    prince:999,

    welcomeMesseage: function()
    {
        console.log(`${this.userName}, welcome to website`)
        console.log(this)
    }
}

// console.log(this)
// user.welcomeMesseage()
// user.userName="sam"
// user.welcomeMesseage()


// function chai()
// {
//     let name="raju"
//     console.log(this.name)
// }
// chai()


// const chai=()=>
// {
//     let name="raja"
//     console.log(this)
// }
// chai()


// const addNum=(num1,num2)=>
// {
//     return num1+num2
// }
// console.log(addNum(5,5))

// const addNum=(num1,num2)=>(num1+num2)

// console.log(addNum(5,5))

// const obj=()=>({user:"ram"})
// console.log(obj())


// const arr=[1,2,3]
// arr.forEach(()=>{})