"Use strict"// treat all JS code as newer version

//alert(3 + 3)  //we are using nodejs, not browser --Yoa can ecma and mdn


// ==========================================
// JAVASCRIPT DATA TYPES
// ==========================================


// 1. STRING
// Text data

let name = "Chandan";

console.log(name);
console.log(typeof name);


// 2. NUMBER
// Integer + Decimal

let age = 21;
let salary = 25000.50;

console.log(age);
console.log(typeof age);

console.log(salary);
console.log(typeof salary);


// 3. BOOLEAN
// true or false

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn);
console.log(typeof isLoggedIn);


// 4. UNDEFINED
// Variable declared but value not assigned

let address;

console.log(address);
console.log(typeof address);


// 5. NULL
// Intentionally empty value

let phone = null;

console.log(phone);
console.log(typeof phone);
// typeof null = object (JavaScript legacy behavior)


// 6. BIGINT
// Very large integer

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);


// 7. SYMBOL
// Unique value

let id = Symbol("id");

console.log(id);
console.log(typeof id);


// 8. OBJECT
// Key-value data

let student = {
    name: "Chandan",
    age: 21,
    city: "Puri"
};

console.log(student);
console.log(typeof student);


// 9. ARRAY
// Collection of values

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);
console.log(typeof fruits);


// ==========================================
// typeof EXAMPLES
// ==========================================
//*typeof is an operator used to check the data type of a value or variable.

console.log(typeof "Chandan");  // string
console.log(typeof 100);       // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object
console.log(typeof 100n);      // bigint
console.log(typeof Symbol());  // symbol
console.log(typeof {});        // object
console.log(typeof []);        // object