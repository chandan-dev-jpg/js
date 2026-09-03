// let Score=undefined
// console.log(typeof score)
// console.log(typeof (score))

// let valueNumber=Number(score);
// console.log(typeof valueNumber);
// console.log(valueNumber);

// console.clear();
let isLoggedIn=1
let isLoggedInE=""
let isLoggedInV="Raja"
let booleanIsLoggedIn1=Boolean(isLoggedIn);
let booleanIsLoggedIn2=Boolean(isLoggedInE);
let booleanIsLoggedIn3=Boolean(isLoggedInV);
console.log(booleanIsLoggedIn1)//true
console.log(booleanIsLoggedIn2)//false
console.log(booleanIsLoggedIn3)//true
console.log(typeof booleanIsLoggedIn)
//"33"=>33
//"33abc"=>Nan->Not a Number
//true=>1
//false=>0
//1=>true
//0=>false
//""=>false
//"raja"=>true


// =====================================================
// JAVASCRIPT - TYPE CONVERSION
// =====================================================


// =====================================================
// NOTE: TYPE CONVERSION
// =====================================================

// Type Conversion:
// Converting one data type into another data type
// is called Type Conversion.
//
// Hindi:
// Ek data type ko doosre data type me convert karna
// Type Conversion kehlata hai.
//
// Main Conversion Methods:
//
// Number()  → Convert into Number
// String()  → Convert into String
// Boolean() → Convert into Boolean
//
// typeof   → Check data type


// =====================================================
// 1. STRING → NUMBER
// =====================================================

// Number() string ko number me convert karta hai.

let score = "100";

console.log(score);
console.log(typeof score);
// string

let scoreNumber = Number(score);

console.log(scoreNumber);
console.log(typeof scoreNumber);
// number


// =====================================================
// 2. NUMBER → STRING
// =====================================================

// String() number ko string me convert karta hai.

let marks = 95;

let marksString = String(marks);

console.log(marksString);
console.log(typeof marksString);

// Output:
// 95
// string


// =====================================================
// 3. STRING → BOOLEAN
// =====================================================

// Non-empty String → true
// Empty String     → false

let name = "Chandan";

console.log(Boolean(name));
// true

let empty = "";

console.log(Boolean(empty));
// false


// =====================================================
// 4. NUMBER → BOOLEAN
// =====================================================

// 0       → false
// Non-zero → true

console.log(Boolean(0));
// false

console.log(Boolean(1));
// true

console.log(Boolean(100));
// true

console.log(Boolean(-10));
// true


// =====================================================
// 5. BOOLEAN → NUMBER
// =====================================================

// true  → 1
// false → 0

console.log(Number(true));
// 1

console.log(Number(false));
// 0


// =====================================================
// 6. BOOLEAN → STRING
// =====================================================

let login = true;

let loginString = String(login);

console.log(loginString);
console.log(typeof loginString);

// true
// string


// =====================================================
// 7. INVALID STRING → NUMBER
// =====================================================

// Agar string valid number nahi hai,
// to result NaN hota hai.
//
// NaN = Not a Number

let userName = "Chandan";

let result = Number(userName);

console.log(result);
// NaN

console.log(typeof result);
// number


// =====================================================
// 8. NULL CONVERSION
// =====================================================

console.log(Number(null));
// 0

console.log(String(null));
// "null"

console.log(Boolean(null));
// false


// =====================================================
// 9. UNDEFINED CONVERSION
// =====================================================

console.log(Number(undefined));
// NaN

console.log(String(undefined));
// "undefined"

console.log(Boolean(undefined));
// false


// =====================================================
// 10. typeof
// =====================================================

// typeof ka use data type check karne ke liye hota hai.

console.log(typeof "Chandan");
// string

console.log(typeof 100);
// number

console.log(typeof true);
// boolean

console.log(typeof undefined);
// undefined

console.log(typeof null);
// object


// =====================================================
// 11. IMPORTANT BOOLEAN CONVERSION
// =====================================================

console.log(Boolean("Chandan"));
// true

console.log(Boolean("false"));
// true
// Reason:
// "false" ek non-empty string hai.

console.log(Boolean(""));
// false

console.log(Boolean(0));
// false

console.log(Boolean(1));
// true


// =====================================================
// 12. VS CODE SHORTCUT
// =====================================================

// clg → console.log()
//
// English:
// clg is a VS Code snippet shortcut for console.log().
//
// Hindi:
// clg likhne ke baad Tab press karne par
// console.log() generate ho jata hai.
//
// Example:
//
// clg
//
// Press TAB
//
// console.log();


// =====================================================
// COMMON VS CODE JAVASCRIPT SHORTCUTS
// =====================================================

// clg → console.log()
// cwe → console.warn()
// cer → console.error()
// cin → console.info()


// =====================================================
// FINAL CHEAT SHEET
// =====================================================

// Number("100")     → 100
// Number("abc")     → NaN
// Number(true)      → 1
// Number(false)     → 0
// Number(null)      → 0
// Number(undefined) → NaN
//
// String(100)       → "100"
// String(true)      → "true"
// String(null)      → "null"
//
// Boolean(1)        → true
// Boolean(0)        → false
// Boolean("Hello")  → true
// Boolean("")       → false
// Boolean(null)     → false
//
// typeof 100       → "number"
// typeof "Hello"   → "string"
// typeof true      → "boolean"
// typeof null      → "object"


// =====================================================
// EASY TRICK
// =====================================================

// Number()  → Number me convert
// String()  → String me convert
// Boolean() → true/false me convert
// typeof    → Data type check
// clg       → console.log() shortcut