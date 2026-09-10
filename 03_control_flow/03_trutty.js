const userEmail="chandan@123"

if(userEmail)
{
    console.log("Get User email")
}else{
    console.log("Don't hava user email")
}

//Falsy Vlaues

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy Values

//"0", "false", " ", function(){}, [], {}

// if(userEmail.length==0)
// {
// console.log("Array is empty ")
// }

// const emptyObj={}
// if(Object.keys(emptyObj).length==0)
// {
//     console.log("Object is empty")
// }

//Nullish Coalescing Operator (??): Null undefined
// let val1;
// val1=5 ?? 10;
// val1=null??10
// val1=undefined??13
// console.log(val1)
// console.log(val1)


//teriary Operator

//Condition ? true : false

// const price=100
// price>80 ? console.log("less than 80") : console.log("more than 80")

