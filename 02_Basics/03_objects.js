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

/*


// ============================================================
//              JAVASCRIPT OBJECT - COMPLETE NOTES
// ============================================================

// An Object is a collection of data in the form of
// KEY : VALUE pairs.

// Syntax:
// let objectName = {
//     key: value
// };


// ============================================================
// 1. CREATE AN OBJECT
// ============================================================

const user = {
    name: "Chandan",
    age: 22,
    city: "Puri",
    email: "chandan@gmail.com"
};

console.log(user);


// ============================================================
// 2. ACCESS OBJECT PROPERTIES
// ============================================================

// Dot notation
console.log(user.name);
console.log(user.age);


// Bracket notation
console.log(user["name"]);
console.log(user["age"]);


// Difference:
// Dot notation     -> object.key
// Bracket notation -> object["key"]


// ============================================================
// 3. WHY USE BRACKET NOTATION?
// ============================================================

const person = {
    name: "Chandan",
    "full name": "Chandan Behera"
};

console.log(person["full name"]);

// console.log(person.full name); // Error


// ============================================================
// 4. ADD NEW PROPERTY
// ============================================================

user.country = "India";

console.log(user);


// Using bracket notation
user["job"] = "Developer";

console.log(user);


// ============================================================
// 5. UPDATE PROPERTY
// ============================================================

user.age = 23;

console.log(user.age); // 23


user["city"] = "Bhubaneswar";

console.log(user);


// ============================================================
// 6. DELETE PROPERTY
// ============================================================

delete user.job;

console.log(user);


// ============================================================
// 7. OBJECT WITH DIFFERENT DATA TYPES
// ============================================================

const student = {
    name: "Chandan",       // String
    age: 22,               // Number
    isStudent: true,       // Boolean
    marks: [80, 90, 85],   // Array
    address: {             // Object
        city: "Puri",
        state: "Odisha"
    },
    qualification: null
};

console.log(student);


// ============================================================
// 8. NESTED OBJECT
// ============================================================

console.log(student.address.city);
console.log(student.address.state);


// ============================================================
// 9. OBJECT INSIDE ARRAY
// ============================================================

const students = [
    {
        name: "Chandan",
        age: 22
    },
    {
        name: "Rahul",
        age: 23
    },
    {
        name: "Raju",
        age: 21
    }
];

console.log(students[0].name);
console.log(students[1].age);


// ============================================================
// 10. ARRAY INSIDE OBJECT
// ============================================================

const employee = {
    name: "Chandan",
    skills: ["Java", "JavaScript", "SQL"]
};

console.log(employee.skills);
console.log(employee.skills[0]);
console.log(employee.skills[1]);


// ============================================================
// 11. OBJECT METHOD
// ============================================================

// A function inside an object is called a method.

const user2 = {
    name: "Chandan",

    greet: function() {
        console.log("Hello Chandan");
    }
};

user2.greet();


// ============================================================
// 12. 'this' KEYWORD
// ============================================================

const user3 = {
    name: "Chandan",

    greet: function() {
        console.log(`Hello ${this.name}`);
    }
};

user3.greet();


// this refers to the current object.


// ============================================================
// 13. SHORTHAND PROPERTY
// ============================================================

const name = "Chandan";
const age = 22;

const user4 = {
    name,
    age
};

console.log(user4);


// Instead of:
// const user4 = {
//     name: name,
//     age: age
// };


// ============================================================
// 14. COMPUTED PROPERTY
// ============================================================

const key = "email";

const user5 = {
    name: "Chandan",
    [key]: "chandan@gmail.com"
};

console.log(user5.email);


// ============================================================
// 15. SYMBOL AS OBJECT KEY
// ============================================================

const myNum = Symbol("key1");

const user6 = {
    name: "Chandan",
    age: 22,
    [myNum]: "My Secret Key"
};

console.log(user6[myNum]);

console.log(typeof user6[myNum]);
// string


// Symbol key
console.log(typeof myNum);
// symbol


// ============================================================
// 16. Object.keys()
// ============================================================

// Returns all keys as an array.

const person2 = {
    name: "Chandan",
    age: 22,
    city: "Puri"
};

console.log(Object.keys(person2));

// ["name", "age", "city"]


// ============================================================
// 17. Object.values()
// ============================================================

// Returns all values as an array.

console.log(Object.values(person2));

// ["Chandan", 22, "Puri"]


// ============================================================
// 18. Object.entries()
// ============================================================

// Returns key-value pairs as nested arrays.

console.log(Object.entries(person2));

// [
//   ["name", "Chandan"],
//   ["age", 22],
//   ["city", "Puri"]
// ]


// ============================================================
// 19. Object.hasOwn()
// ============================================================

// Checks whether object has its own property.

console.log(Object.hasOwn(person2, "name"));
// true

console.log(Object.hasOwn(person2, "salary"));
// false


// ============================================================
// 20. hasOwnProperty()
// ============================================================

console.log(person2.hasOwnProperty("name"));
// true

console.log(person2.hasOwnProperty("salary"));
// false


// ============================================================
// 21. Object.assign()
// ============================================================

// Copies properties from one or more objects
// into another object.

const obj1 = {
    name: "Chandan"
};

const obj2 = {
    age: 22
};

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);

// { name: "Chandan", age: 22 }


// ============================================================
// 22. SPREAD OPERATOR
// ============================================================

// Another way to combine/copy objects.

const a = {
    name: "Chandan"
};

const b = {
    age: 22
};

const c = {
    ...a,
    ...b
};

console.log(c);


// ============================================================
// 23. OBJECT COPYING
// ============================================================

const original = {
    name: "Chandan",
    age: 22
};

const copy = {
    ...original
};

console.log(copy);


// ============================================================
// 24. Object.freeze()
// ============================================================

// Prevents:
// 1. Adding properties
// 2. Deleting properties
// 3. Updating properties

const account = {
    name: "Chandan",
    balance: 10000
};

Object.freeze(account);

account.balance = 50000;
account.city = "Puri";
delete account.name;

console.log(account);

// Object remains unchanged.


// ============================================================
// 25. Object.seal()
// ============================================================

// Prevents:
// 1. Adding properties
// 2. Deleting properties
//
// But existing properties CAN be updated.

const account2 = {
    name: "Chandan",
    balance: 10000
};

Object.seal(account2);

account2.balance = 20000; // Allowed

account2.city = "Puri";   // Not allowed
delete account2.name;     // Not allowed

console.log(account2);


// ============================================================
// 26. Object.isFrozen()
// ============================================================

console.log(Object.isFrozen(account));
// true


// ============================================================
// 27. Object.isSealed()
// ============================================================

console.log(Object.isSealed(account2));
// true


// ============================================================
// 28. FOR...IN LOOP
// ============================================================

// Used to loop through object keys.

const person3 = {
    name: "Chandan",
    age: 22,
    city: "Puri"
};

for (let key in person3) {
    console.log(key);
}


// Get key + value

for (let key in person3) {
    console.log(key, person3[key]);
}


// ============================================================
// 29. DESTRUCTURING
// ============================================================

// Extract values from object into variables.

const person4 = {
    name: "Chandan",
    age: 22,
    city: "Puri"
};

const { name, age, city } = person4;

console.log(name);
console.log(age);
console.log(city);


// ============================================================
// 30. DESTRUCTURING WITH DIFFERENT VARIABLE NAME
// ============================================================

const person5 = {
    name: "Chandan",
    age: 22
};

const { name: userName, age: userAge } = person5;

console.log(userName);
console.log(userAge);


// ============================================================
// 31. DEFAULT VALUE IN DESTRUCTURING
// ============================================================

const person6 = {
    name: "Chandan"
};

const { name: n1, age: a1 = 22 } = person6;

console.log(n1);
console.log(a1);


// ============================================================
// 32. FUNCTION WITH OBJECT
// ============================================================

function printUser(user) {
    console.log(user.name);
    console.log(user.age);
}

printUser({
    name: "Chandan",
    age: 22
});


// ============================================================
// 33. OBJECT DESTRUCTURING IN FUNCTION
// ============================================================

function printUser2({ name, age }) {
    console.log(name);
    console.log(age);
}

printUser2({
    name: "Chandan",
    age: 22
});


// ============================================================
// 34. OPTIONAL CHAINING
// ============================================================

// Prevents error when a property does not exist.

const user7 = {
    name: "Chandan",
    address: {
        city: "Puri"
    }
};

console.log(user7.address?.city);
// Puri

console.log(user7.contact?.phone);
// undefined


// ============================================================
// 35. NULLISH COALESCING
// ============================================================

const user8 = {
    name: "Chandan",
    age: null
};

console.log(user8.age ?? 18);
// 18


// ============================================================
// 36. PROPERTY EXISTENCE
// ============================================================

console.log("name" in person3);
// true

console.log("salary" in person3);
// false


// ============================================================
// 37. GET PROPERTY DESCRIPTOR
// ============================================================

const obj = {
    name: "Chandan"
};

console.log(Object.getOwnPropertyDescriptor(obj, "name"));


// ============================================================
// 38. Object.create()
// ============================================================

// Creates a new object using another object as prototype.

const parent = {
    greet() {
        console.log("Hello");
    }
};

const child = Object.create(parent);

child.name = "Chandan";

child.greet();


// ============================================================
// 39. Object.getPrototypeOf()
// ============================================================

console.log(Object.getPrototypeOf(child));


// ============================================================
// 40. Object.setPrototypeOf()
// ============================================================

const objA = {
    greet() {
        console.log("Hello");
    }
};

const objB = {
    name: "Chandan"
};

Object.setPrototypeOf(objB, objA);

objB.greet();


// ============================================================
// 41. Object.fromEntries()
// ============================================================

// Converts entries into an object.

const entries = [
    ["name", "Chandan"],
    ["age", 22],
    ["city", "Puri"]
];

const result = Object.fromEntries(entries);

console.log(result);


// ============================================================
// 42. Object.groupBy()
// ============================================================

// Groups array elements based on a condition/key.

const products = [
    { name: "Phone", type: "electronics" },
    { name: "Laptop", type: "electronics" },
    { name: "Shirt", type: "clothes" }
];

const grouped = Object.groupBy(products, product => product.type);

console.log(grouped);


// ============================================================
// 43. OBJECT COMPARISON
// ============================================================

const obj1 = {
    name: "Chandan"
};

const obj2 = {
    name: "Chandan"
};

console.log(obj1 === obj2);
// false


// Objects are compared by reference,
// not by their contents.


// ============================================================
// 44. SAME REFERENCE
// ============================================================

const obj3 = {
    name: "Chandan"
};

const obj4 = obj3;

console.log(obj3 === obj4);
// true

obj4.name = "Raju";

console.log(obj3.name);
// Raju


// Both variables point to the same object.


// ============================================================
// 45. SHALLOW COPY
// ============================================================

const user9 = {
    name: "Chandan",
    address: {
        city: "Puri"
    }
};

const copyUser = { ...user9 };

copyUser.name = "Raju";

console.log(user9.name);
// Chandan


// But nested object is still shared.

copyUser.address.city = "Bhubaneswar";

console.log(user9.address.city);
// Bhubaneswar


// ============================================================
// 46. DEEP COPY
// ============================================================

// structuredClone() creates a deep copy.

const user10 = {
    name: "Chandan",
    address: {
        city: "Puri"
    }
};

const deepCopy = structuredClone(user10);

deepCopy.address.city = "Bhubaneswar";

console.log(user10.address.city);
// Puri


// ============================================================
// 47. OBJECT METHOD SHORT SYNTAX
// ============================================================

const user11 = {
    name: "Chandan",

    greet() {
        console.log("Hello");
    }
};

user11.greet();


// ============================================================
// 48. GETTERS
// ============================================================

const user12 = {
    firstName: "Chandan",
    lastName: "Behera",

    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(user12.fullName);


// ============================================================
// 49. SETTERS
// ============================================================

const user13 = {
    name: "Chandan",

    set changeName(newName) {
        this.name = newName;
    }
};

user13.changeName = "Raju";

console.log(user13.name);


// ============================================================
// 50. IMPORTANT OBJECT METHODS
// ============================================================

/*

Object.keys()
    -> Returns keys

Object.values()
    -> Returns values

Object.entries()
    -> Returns key-value pairs

Object.fromEntries()
    -> Converts entries into object

Object.assign()
    -> Copies/merges objects

Object.freeze()
    -> Cannot add/delete/update

Object.seal()
    -> Cannot add/delete, but can update

Object.create()
    -> Creates object with prototype

Object.hasOwn()
    -> Checks own property

Object.getPrototypeOf()
    -> Gets prototype

Object.setPrototypeOf()
    -> Sets prototype

*/


// ============================================================
//              QUICK REVISION
// ============================================================

/*

CREATE:
const user = {
    name: "Chandan",
    age: 22
};


ACCESS:
user.name
user["name"]


ADD:
user.city = "Puri";


UPDATE:
user.age = 23;


DELETE:
delete user.age;


KEYS:
Object.keys(user)


VALUES:
Object.values(user)


ENTRIES:
Object.entries(user)


CHECK:
Object.hasOwn(user, "name")


COPY:
const copy = { ...user };


MERGE:
const result = { ...obj1, ...obj2 };


FREEZE:
Object.freeze(user);


SEAL:
Object.seal(user);


DESTRUCTURE:
const { name, age } = user;


LOOP:
for (let key in user) {
    console.log(key, user[key]);
}


OPTIONAL CHAINING:
user.address?.city


NULLISH:
user.age ?? 18

*/


// ============================================================
//           IMPORTANT DIFFERENCES
// ============================================================

/*

freeze() vs seal()

freeze():
    Add       ❌
    Delete    ❌
    Update    ❌

seal():
    Add       ❌
    Delete    ❌
    Update    ✅


------------------------------------------------------------

slice() vs splice()  [ARRAY]

slice():
    Original changes? ❌

splice():
    Original changes? ✅


------------------------------------------------------------

Object vs Array

Object:
    Data stored using KEY : VALUE

Array:
    Data stored using INDEX

Object:
    user.name

Array:
    students[0]


============================================================

 */