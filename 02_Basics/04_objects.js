// const user1=new Object()
const user2={}
user2.id="123abc"
user2.name="chandan"
user2.isLogged=false
console.log(user2)
console.clear()


const user3=
{
    email:"raj@123",
    fullName:
    {
        fname:"rajesh",
        lname:"behera"

    }
}
// console.log(user3.fullName.fname)

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"a",
    4:"b"
}

// const obj3={obj1,obj2}
// const obj3=Object.assign({}, obj1, obj2)
const obj3={...obj1, ...obj2}
console.log(obj3)

console.log(user2)
console.log(Object.keys(user2))
console.log(Object.values(user2))
console.log(Object.entries(user2))


const user4=
[
    {
        id:1,
        email:"raja@gmail"
    },
    {
        id:2,
        email:"raju@gmail"
    },
    {
        id:3,
        email:"raj@gmail"
    }
]

console.log(user4[1])
console.clear()
//distructure 

const course=
{
    course:"js",
    price:"999",
    sir:"hitesh"

}
    
const {sir}=course
console.log(sir)
console.clear()

//json
// {
// "name":"rajedra",
// "age":29

// }