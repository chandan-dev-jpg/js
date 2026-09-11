//for of 

const myArray=[1,2,3,4]

for (const element of myArray) {
    // console.log(element)
}


const greatings="Hello World!!"

for(const great of greatings)
{
    // console.log(great)
}

//Maps

const map=new Map()
map.set('IN',"India") 
map.set('USA',"United States of America")
map.set('Fr',"France") 
// console.log(map)

for(const [key,value] of map)
{
    // console.log(key,':-',value)
}

// for (const [key] in map) {
    
//     console.log(map[key])//not itiretivible
    
// }


const obj1=
{
    "game1":"NFS",
    "game2":"FF"
    
}

 for (const key in obj1) {
//    console.log(obj1[key],':',key) 
 }

 const programming=["js","rb","py","java"]

 for (const key in programming) {
    // console.log(programming[key])
 }

 //For each loop 

 const coding=[1,2,3,4,5]

 coding.forEach((i)=>
{
 console.log(i)   
})