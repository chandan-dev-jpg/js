// ==================================================
// JAVASCRIPT VARIABLES
// var, let and const
// ==================================================


// --------------------------------------------------
// 1. var
// --------------------------------------------------

// English:
// var is the old way to declare a variable.
// Its value can be changed.
// It can also be re-declared.

// Hindi:
// var variable declare karne ka purana tarika hai.
// Iski value change kar sakte hain.
// Isko dobara declare bhi kar sakte hain.

var name = "Chandan";

console.log("Initial Name:", name);

// Value change
name = "Raja";

console.log("Changed Name:", name);

// Re-declaration
var name = "Surya";

console.log("Re-declared Name:", name);


// --------------------------------------------------
// 2. let
// --------------------------------------------------

// English:
// let is a modern way to declare a variable.
// Its value can be changed.
// But it cannot be re-declared in the same scope.

// Hindi:
// let modern JavaScript me variable declare karne ka tarika hai.
// Iski value change kar sakte hain.
// Lekin same scope me dobara declare nahi kar sakte.

let age = 21;

console.log("Initial Age:", age);

// Value change
age = 22;

console.log("Changed Age:", age);

// ❌ This will give an error:
// let age = 25;


// --------------------------------------------------
// 3. const
// --------------------------------------------------

// English:
// const is used when the variable should not be
// reassigned after declaration.

// Hindi:
// const ka use tab karte hain jab variable ki value
// ko baad me change nahi karna ho.

const accountId = 1445;

console.log("Account ID:", accountId);

// ❌ This will give an error:
// accountId = 2000;


// --------------------------------------------------
// 4. Real Example
// --------------------------------------------------

const userId = 101;                  // Cannot change
let userEmail = "chandan@gmail.com"; // Can change
var userPassword = 1234;             // Can change
let userCity = "Odisha";             // Can change

// Changing values

userEmail = "raja@gmail.com";
userPassword = 4567;
userCity = "Puri";


// Display all values

console.table({
    userId,
    userEmail,
    userPassword,
    userCity
});


// --------------------------------------------------
// 5. Block Scope
// --------------------------------------------------

// let and const are BLOCK SCOPED.
// var is FUNCTION SCOPED.

if (true) {

    var varVariable = "I am var";

    let letVariable = "I am let";

    const constVariable = "I am const";

    console.log(varVariable);
    console.log(letVariable);
    console.log(constVariable);
}

// var can be accessed outside the block
console.log("Outside Block:", varVariable);

// ❌ letVariable cannot be accessed here
// console.log(letVariable);

// ❌ constVariable cannot be accessed here
// console.log(constVariable);


// ==================================================
// FINAL SUMMARY
// ==================================================

// var
//  -> Value change       ✅
//  -> Re-declare         ✅
//  -> Block Scope        ❌

// let
//  -> Value change       ✅
//  -> Re-declare         ❌
//  -> Block Scope        ✅

// const
//  -> Value change       ❌
//  -> Re-declare         ❌
//  -> Block Scope        ✅


// ==================================================
// EASY TRICK
// ==================================================

// var   = Old variable
// let   = Changeable variable
// const = Fixed variable


// =====================================================
// JAVASCRIPT SCOPE
// =====================================================

// Scope:
// English:
// Scope means the area of a program where a variable
// can be accessed or used.
//
// Hindi:
// Scope ka matlab hai program ka wo area jahan hum
// kisi variable ko access ya use kar sakte hain.


// =====================================================
// 1. GLOBAL SCOPE
// =====================================================

// English:
// A variable declared outside any function or block
// has Global Scope.
//
// Hindi:
// Jo variable function ya block ke bahar declare hota hai,
// uska Global Scope hota hai.

let globalName = "Chandan";

console.log("Global:", globalName);


// =====================================================
// 2. var → FUNCTION SCOPE
// =====================================================

// English:
// var is Function Scoped.
// It is available throughout the function.
//
// Hindi:
// var Function Scoped hota hai.
// Ye jis function ke andar declare hota hai,
// us poore function me available hota hai.

function varExample() {

    var name = "Chandan";

    console.log("Inside Function:", name);

}

varExample();

// console.log(name);
// ❌ Error
// name function ke bahar available nahi hai.


// =====================================================
// var IS NOT BLOCK SCOPED
// =====================================================

// English:
// var does not follow block scope.
//
// Hindi:
// var { } block ko follow nahi karta.

if (true) {

    var city = "Puri";

    console.log("Inside Block:", city);
}

console.log("Outside Block:", city); // ✅ Puri


// =====================================================
// 3. let → BLOCK SCOPE
// =====================================================

// English:
// let is Block Scoped.
// It is available only inside the { } block
// where it is declared.
//
// Hindi:
// let Block Scoped hota hai.
// Ye sirf us { } block ke andar available hota hai
// jahan declare hua hai.

if (true) {

    let state = "Odisha";

    console.log("Inside Block:", state);
}

// console.log(state);
// ❌ Error
// state block ke bahar available nahi hai.


// =====================================================
// 4. const → BLOCK SCOPE
// =====================================================

// English:
// const is also Block Scoped.
//
// Hindi:
// const bhi Block Scoped hota hai.

if (true) {

    const country = "India";

    console.log("Inside Block:", country);
}

// console.log(country);
// ❌ Error
// country block ke bahar available nahi hai.


// =====================================================
// 5. var, let, const TOGETHER
// =====================================================

function scopeTest() {

    var a = 10;       // Function Scope

    if (true) {

        let b = 20;   // Block Scope
        const c = 30; // Block Scope

        console.log("a:", a); // ✅
        console.log("b:", b); // ✅
        console.log("c:", c); // ✅
    }

    console.log("a:", a); // ✅

    // console.log(b); // ❌ Error
    // console.log(c); // ❌ Error
}

scopeTest();


// =====================================================
// 6. NESTED SCOPE
// =====================================================

// English:
// A scope inside another scope is called Nested Scope.
//
// Hindi:
// Jab ek scope ke andar doosra scope hota hai,
// use Nested Scope kehte hain.

let x = 100;

if (true) {

    let y = 200;

    if (true) {

        let z = 300;

        // Inner scope can access outer scope variables

        console.log("x:", x); // ✅
        console.log("y:", y); // ✅
        console.log("z:", z); // ✅
    }

    console.log("x:", x); // ✅
    console.log("y:", y); // ✅

    // console.log(z); // ❌ Error
}


// =====================================================
// 7. SCOPE RULE
// =====================================================

// English:
// Inner Scope can access Outer Scope.
//
// Outer Scope cannot access Inner Scope.
//
// Hindi:
// Inner scope, outer scope ki values ko access kar sakta hai.
//
// Lekin outer scope, inner scope ki values ko access
// nahi kar sakta.


// =====================================================
// 8. FINAL SUMMARY
// =====================================================

// var
// → Function Scope
// → Value change allowed ✅
// → Re-declaration allowed ✅
// → Block Scope ❌

// let
// → Block Scope
// → Value change allowed ✅
// → Re-declaration not allowed ❌

// const
// → Block Scope
// → Value change not allowed ❌
// → Re-declaration not allowed ❌


// =====================================================
// EASY TRICK
// =====================================================

// var   → FUNCTION ke andar
// let   → { BLOCK } ke andar
// const → { BLOCK } ke andar


// =====================================================
// ONE LINE DEFINITION
// =====================================================

// Scope = Variable ko program ke kis area tak
// access kar sakte hain.