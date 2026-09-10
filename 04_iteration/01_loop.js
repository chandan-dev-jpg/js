//for loop

// for (let i = 1; i <=10; i++) {
//     const element = i;
//     console.log(element)
    
// }

// for (let i = 1; i <=10; i++) {
//     console.log(`outer loop value : ${i}`)
//     for (let j = 1; j <=10; j++) {
        
//         console.log(i+' * '+j+ ' = '+(i*j));
//   }
// }

// let myArray=["ironman","spiderman","hulk"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
    
// }

for (let index = 0; index <20; index++) {
    const element =index;
    if(index==5)
        {
            console.log("detected 5")
            // break;
            continue;
        }
        console.log(`value of ${element}`)
    
}