
if(true)
{

    let num1=10
    const num2=20
    var num3=30
}
// {} -- Scope

// console.log(num1)
// console.log(num2)
console.log(num3)

function one()
{
    const username="Hitesh"

    function two()
    {
        const web="yt"
        console.log(username)
    }
    two()
    
}
one()


//+++++++++++Interesting++++++++++++++++
console.log(addOne(2))
function addOne(num)
{
    return num+1
}


const addTwo =function(num)
{
return num+2
}
addTwo(5)
