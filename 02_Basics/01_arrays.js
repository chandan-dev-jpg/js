const myArr=[0,1,2,3,4,5]
const myHeros=["IronMan","Hulk"]

const myArr2=new Array(1,2,3,4)
console.log(myArr[1])
console.clear();

//Array Method
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))
// const newArr=myArr.join();
// console.log(newArr)


//slice, splice
console.log("A ",myArr)
const arr1=myArr.slice(1,3)
console.log(arr1)
console.log("B ",myArr)
const arr2=myArr.splice(1,3)

console.log(arr2)
console.log("C ",myArr)


// ============================================================
//              JAVASCRIPT ARRAY METHODS - NOTES
// ============================================================

// An Array is used to store multiple values in a single variable.

// Example:
let arr = [10, 20, 30, 40, 50];

console.log(arr);


// ============================================================
// 1. length
// ============================================================

// Returns the number of elements in an array.

console.log(arr.length); // 5


// ============================================================
// 2. push()
// ============================================================

// Adds one or more elements at the END of the array.

arr.push(60);
console.log(arr); // [10, 20, 30, 40, 50, 60]


// ============================================================
// 3. pop()
// ============================================================

// Removes the LAST element from the array.

arr.pop();
console.log(arr); // [10, 20, 30, 40, 50]


// ============================================================
// 4. unshift()
// ============================================================

// Adds one or more elements at the BEGINNING.

arr.unshift(5);
console.log(arr); // [5, 10, 20, 30, 40, 50]


// ============================================================
// 5. shift()
// ============================================================

// Removes the FIRST element.

arr.shift();
console.log(arr); // [10, 20, 30, 40, 50]


// ============================================================
// 6. at()
// ============================================================

// Returns the element at a particular index.

console.log(arr.at(0));  // 10
console.log(arr.at(2));  // 30
console.log(arr.at(-1)); // 50


// ============================================================
// 7. indexOf()
// ============================================================

// Returns the index of an element.
// Returns -1 if element is not found.

console.log(arr.indexOf(30)); // 2
console.log(arr.indexOf(100)); // -1


// ============================================================
// 8. lastIndexOf()
// ============================================================

// Returns the last index of an element.

let nums = [10, 20, 30, 20, 40, 20];

console.log(nums.lastIndexOf(20)); // 5


// ============================================================
// 9. includes()
// ============================================================

// Checks whether an element exists.
// Returns true or false.

console.log(arr.includes(30)); // true
console.log(arr.includes(100)); // false


// ============================================================
// 10. join()
// ============================================================

// Converts array elements into a string.

let names = ["Chandan", "Raju", "Kishan"];

console.log(names.join());       // Chandan,Raju,Kishan
console.log(names.join(" "));    // Chandan Raju Kishan
console.log(names.join("-"));    // Chandan-Raju-Kishan


// ============================================================
// 11. toString()
// ============================================================

// Converts an array into a string.

console.log(names.toString());
// Chandan,Raju,Kishan


// ============================================================
// 12. slice()
// ============================================================

// Returns a portion of an array.
// Original array is NOT changed.
//
// slice(start, end)
// end is NOT included.

let a = [10, 20, 30, 40, 50];

console.log(a.slice(1, 4)); // [20, 30, 40]
console.log(a.slice(2));   // [30, 40, 50]
console.log(a.slice(-2));  // [40, 50]

console.log(a); // Original remains same


// ============================================================
// 13. splice()
// ============================================================

// Adds, removes, or replaces elements.
// Original array IS changed.
//
// splice(start, deleteCount, item1, item2...)

let b = [10, 20, 30, 40, 50];

b.splice(2, 1);
console.log(b); // [10, 20, 40, 50]


// Add element
let c = [10, 20, 40, 50];

c.splice(2, 0, 30);
console.log(c); // [10, 20, 30, 40, 50]


// Replace element
let d = [10, 20, 30, 40];

d.splice(2, 1, 100);
console.log(d); // [10, 20, 100, 40]


// ============================================================
// 14. concat()
// ============================================================

// Combines two or more arrays.

let x = [10, 20];
let y = [30, 40];

let result = x.concat(y);

console.log(result); // [10, 20, 30, 40]


// ============================================================
// 15. reverse()
// ============================================================

// Reverses the array.
// Original array IS changed.

let r = [10, 20, 30, 40];

r.reverse();

console.log(r); // [40, 30, 20, 10]


// ============================================================
// 16. sort()
// ============================================================

// Sorts array elements.
//
// IMPORTANT:
// Default sort works as STRING comparison.

let numbers = [10, 5, 25, 2, 100];

numbers.sort();

console.log(numbers);
// [10, 100, 2, 25, 5]


// Numeric ascending
numbers.sort((a, b) => a - b);

console.log(numbers);
// [2, 5, 10, 25, 100]


// Numeric descending
numbers.sort((a, b) => b - a);

console.log(numbers);
// [100, 25, 10, 5, 2]


// ============================================================
// 17. forEach()
// ============================================================

// Executes a function for every element.
// Does NOT return a new array.

let n = [10, 20, 30];

n.forEach(function(value) {
    console.log(value);
});


// Arrow function
n.forEach(value => console.log(value));


// With index
n.forEach((value, index) => {
    console.log(index, value);
});


// ============================================================
// 18. map()
// ============================================================

// Creates a NEW array by changing every element.

let marks = [10, 20, 30, 40];

let double = marks.map(value => value * 2);

console.log(double);
// [20, 40, 60, 80]

console.log(marks);
// Original remains same


// ============================================================
// 19. filter()
// ============================================================

// Creates a new array containing elements
// that satisfy a condition.

let numbers2 = [10, 15, 20, 25, 30];

let even = numbers2.filter(value => value % 2 === 0);

console.log(even);
// [10, 20, 30]


// ============================================================
// 20. find()
// ============================================================

// Returns the FIRST element that satisfies a condition.

let numbers3 = [10, 20, 30, 40];

let found = numbers3.find(value => value > 20);

console.log(found); // 30


// ============================================================
// 21. findIndex()
// ============================================================

// Returns the index of the FIRST element
// that satisfies a condition.

let index = numbers3.findIndex(value => value > 20);

console.log(index); // 2


// ============================================================
// 22. findLast()
// ============================================================

// Returns the LAST element that satisfies a condition.

let numbers4 = [10, 20, 30, 40, 50];

console.log(numbers4.findLast(value => value > 20));
// 50


// ============================================================
// 23. findLastIndex()
// ============================================================

// Returns the index of the LAST element
// that satisfies a condition.

console.log(numbers4.findLastIndex(value => value > 20));
// 4


// ============================================================
// 24. some()
// ============================================================

// Checks if AT LEAST ONE element satisfies a condition.
// Returns true or false.

let ages = [15, 18, 20, 25];

console.log(ages.some(age => age >= 18));
// true


// ============================================================
// 25. every()
// ============================================================

// Checks if ALL elements satisfy a condition.
// Returns true or false.

console.log(ages.every(age => age >= 18));
// false


// ============================================================
// 26. reduce()
// ============================================================

// Reduces the entire array to ONE value.

let price = [100, 200, 300, 400];

let total = price.reduce((sum, value) => {
    return sum + value;
}, 0);

console.log(total);
// 1000


// Short form
let total2 = price.reduce((sum, value) => sum + value, 0);

console.log(total2);


// ============================================================
// 27. reduceRight()
// ============================================================

// reduce() works from LEFT to RIGHT.
// reduceRight() works from RIGHT to LEFT.

let words = ["A", "B", "C"];

let result2 = words.reduceRight((acc, value) => {
    return acc + value;
}, "");

console.log(result2);
// CBA


// ============================================================
// 28. flat()
// ============================================================

// Converts nested arrays into a single array.

let nested = [1, 2, [3, 4], [5, 6]];

console.log(nested.flat());
// [1, 2, 3, 4, 5, 6]


// Deep nested array
let deep = [1, [2, [3, [4]]]];

console.log(deep.flat(Infinity));
// [1, 2, 3, 4]


// ============================================================
// 29. flatMap()
// ============================================================

// First performs map()
// and then flat() by one level.

let values = [1, 2, 3];

let output = values.flatMap(x => [x, x * 2]);

console.log(output);
// [1, 2, 2, 4, 3, 6]


// ============================================================
// 30. fill()
// ============================================================

// Replaces array elements with a value.
//
// fill(value, start, end)

let f = [1, 2, 3, 4, 5];

f.fill(0);

console.log(f);
// [0, 0, 0, 0, 0]


let f2 = [1, 2, 3, 4, 5];

f2.fill(0, 1, 3);

console.log(f2);
// [1, 0, 0, 4, 5]


// ============================================================
// 31. Array.isArray()
// ============================================================

// Checks whether a value is an array.

console.log(Array.isArray([1, 2, 3]));
// true

console.log(Array.isArray("Hello"));
// false


// ============================================================
// 32. Array.from()
// ============================================================

// Creates an array from an iterable or array-like object.

let str = "Chandan";

let arrFromString = Array.from(str);

console.log(arrFromString);
// ['C', 'h', 'a', 'n', 'd', 'a', 'n']


// ============================================================
// 33. Array.of()
// ============================================================

// Creates a new array from given values.

let arrOf = Array.of(10, 20, 30);

console.log(arrOf);
// [10, 20, 30]


// ============================================================
// 34. entries()
// ============================================================

// Returns an iterator containing
// [index, value].

let fruits = ["Apple", "Mango", "Banana"];

for (let [index, value] of fruits.entries()) {
    console.log(index, value);
}


// ============================================================
// 35. keys()
// ============================================================

// Returns an iterator containing indexes.

for (let key of fruits.keys()) {
    console.log(key);
}


// ============================================================
// 36. values()
// ============================================================

// Returns an iterator containing values.

for (let value of fruits.values()) {
    console.log(value);
}


// ============================================================
// 37. with()
// ============================================================

// Creates a NEW array with one element replaced.
// Original array is NOT changed.

let oldArray = [10, 20, 30];

let newArray = oldArray.with(1, 200);

console.log(newArray);
// [10, 200, 30]

console.log(oldArray);
// [10, 20, 30]


// ============================================================
// 38. toReversed()
// ============================================================

// Creates a reversed COPY.
// Original array is NOT changed.

let original = [1, 2, 3];

let reversed = original.toReversed();

console.log(reversed);
// [3, 2, 1]

console.log(original);
// [1, 2, 3]


// ============================================================
// 39. toSorted()
// ============================================================

// Creates a sorted COPY.
// Original array is NOT changed.

let nums5 = [30, 10, 20];

let sorted = nums5.toSorted((a, b) => a - b);

console.log(sorted);
// [10, 20, 30]

console.log(nums5);
// [30, 10, 20]


// ============================================================
// 40. toSpliced()
// ============================================================

// Creates a new array after splice operation.
// Original array is NOT changed.

let nums6 = [10, 20, 30, 40];

let spliced = nums6.toSpliced(1, 2, 100, 200);

console.log(spliced);
// [10, 100, 200, 40]

console.log(nums6);
// [10, 20, 30, 40]


// ============================================================
// 41. copyWithin()
// ============================================================

// Copies part of an array to another position.
// Original array IS changed.
//
// copyWithin(target, start, end)

let cp = [1, 2, 3, 4, 5];

cp.copyWithin(0, 3);

console.log(cp);
// [4, 5, 3, 4, 5]


// ============================================================
// 42. Iterating using for...of
// ============================================================

let students = ["Chandan", "Raju", "Kishan"];

for (let student of students) {
    console.log(student);
}


// ============================================================
// 43. Iterating using normal for loop
// ============================================================

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}


// ============================================================
//                 QUICK REVISION
// ============================================================

/*

METHOD             USE

length             Number of elements
push()             Add at end
pop()              Remove from end
unshift()          Add at beginning
shift()            Remove from beginning

at()               Get element by index
indexOf()          Find first index
lastIndexOf()      Find last index
includes()         Check element exists

join()             Array -> String
toString()         Array -> String

slice()            Get portion (doesn't change original)
splice()           Add/remove/replace (changes original)

concat()           Combine arrays
reverse()          Reverse array
sort()             Sort array

forEach()          Loop through array
map()              Transform every element
filter()           Select elements
find()             Find first matching element
findIndex()        Find first matching index
findLast()         Find last matching element
findLastIndex()    Find last matching index

some()             At least one condition true
every()            All conditions true

reduce()           Array -> single value
reduceRight()      Reduce from right

flat()             Remove nested array level
flatMap()          map() + flat()

fill()             Fill elements with value

Array.isArray()    Check array
Array.from()       Create array from iterable
Array.of()         Create array

entries()          Index + value
keys()             Indexes
values()           Values

with()             Replace element without changing original
toReversed()       Reverse without changing original
toSorted()         Sort without changing original
toSpliced()        Splice without changing original

copyWithin()       Copy elements inside same array

*/


// ============================================================
//              MOST IMPORTANT FOR INTERVIEW
// ============================================================

/*

push()       -> Add end
pop()        -> Remove end

unshift()    -> Add beginning
shift()      -> Remove beginning

slice()      -> Copy a portion
splice()     -> Add/remove/replace

map()        -> Transform
filter()     -> Select
reduce()     -> Calculate one result

find()       -> First matching value
findIndex()  -> First matching index

some()       -> At least one
every()      -> All

sort()       -> Sort
reverse()    -> Reverse

includes()   -> Check value
indexOf()    -> Find index

*/


// ============================================================
//             MUTABLE vs NON-MUTABLE
// ============================================================

/*

MUTABLE METHODS
These can change the original array:

push()
pop()
shift()
unshift()
splice()
sort()
reverse()
fill()
copyWithin()


NON-MUTATING METHODS
These normally return a new value/array:

slice()
concat()
map()
filter()
reduce()
flat()
flatMap()
toSorted()
toReversed()
toSpliced()
with()
*/


// ============================================================
//                    END
// ============================================================