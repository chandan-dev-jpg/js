//Singleton
//Object.create

//Object literals
const myNum = Symbol('key1');

const Jsuser = {
    name: "Chandan",
    "LName": "Behera",
    [myNum]: "Mykey1",
    age: 22,
    location: "Puri",
    email: "Chandan@gmail.com"
};
//read

console.log(Jsuser.name);       // Chandan
console.log(Jsuser["LName"]);   // Behera
console.log(Jsuser[myNum]);     // Mykey1
console.log(typeof myNum);      // symbol
console.clear()
//update
Jsuser.name="raju"

console.log(Jsuser.name)
// Object.freeze(Jsuser)//You cannot change the object's properties either:
// Jsuser.name="rajesh"
console.log(Jsuser)

console.clear()

Jsuser.greeting=function()
{
    console.log("Hello Guys")
}
Jsuser.greetingTwo=function()
{
    console.log(`Hello Guys my name is, ${this.name}`)
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())
