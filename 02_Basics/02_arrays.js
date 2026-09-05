const marvel_heros=["SpiderMan"]
const dc_heros=["BatMan"]
const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros)
const new_heros=[...marvel_heros, ...dc_heros]
console.log(new_heros)

console.clear()

const all_arr=[1,2,3,[4,5,6],7,[6,7,[8,9]]]
const real_arr=all_arr.flat(Infinity)
console.log(real_arr)

console.log(Array.isArray("Raj"))
console.log(Array.from("Raj"))
console.log(Array.from({name:"raju"}))


let value=100
let value1=200
console.log(Array.of(value,value1))