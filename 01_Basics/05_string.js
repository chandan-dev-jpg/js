const name = "Name"
const repoCount = 50

// console.log(name+repoCount+ " Value ")

// console.log(`My name is ${name} repo are ${repoCount}`)

const gameName = new String('Chandan')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase)
console.log(gameName.charAt(1))
console.log(gameName.indexOf('a'))
console.log(gameName.lastIndexOf('a'))
console.clear()
console.log(gameName.slice(1, 3))
console.log(gameName.substring(0, 4))
console.log("Raja")
console.clear()

const newStr1=new String(" raju ")
console.log(newStr1.trim())

const url="chandanbeheara4598#gmail.com"
console.log(url.replace('#','@'))

console.log(url.split('.'))
/*
# JavaScript String Methods — Complete Notes

## 1. What is a String?

A string is a sequence of characters.

```js
const name = "Chandan";
const city = 'Delhi';

console.log(name);
console.log(city);
```

JavaScript supports three common ways to create strings:

```js
const str1 = "Hello";
const str2 = 'Hello';
const str3 = `Hello`;
```

---

## 2. String Concatenation

We can combine strings using the `+` operator.

```js
const name = "Chandan";
const repoCount = 50;

console.log(name + repoCount + " Value");
```

Output:

```text
Chandan50 Value
```

---

## 3. Template Literals

Template literals are a modern and convenient way to combine strings and variables.

They use backticks `` ` ``.

```js
const name = "Chandan";
const repoCount = 50;

console.log(`My name is ${name} and my repos are ${repoCount}`);
```

Output:

```text
My name is Chandan and my repos are 50
```

---

# 4. Creating a String Object

You can create a String object using `new String()`:

```js
const gameName = new String("Chandan");

console.log(gameName);
```

However, normally you should use a primitive string:

```js
const gameName = "Chandan";
```

`new String()` creates a String object, while `"Chandan"` creates a primitive string.

---

# 5. Accessing Characters Using Index

Each character has an index.

Indexes start from `0`.

```js
const gameName = "Chandan";

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
```

Output:

```text
C
h
a
```

For `"Chandan"`:

```text
C h a n d a n
0 1 2 3 4 5 6
```

---

# 6. length

The `length` property returns the number of characters in a string.

```js
const gameName = "Chandan";

console.log(gameName.length);
```

Output:

```text
7
```

### Important

`length` is a **property**, not a method.

Correct:

```js
gameName.length
```

Incorrect:

```js
gameName.length()
```

---

# 7. **proto**

```js
const gameName = new String("Chandan");

console.log(gameName.__proto__);
```

`__proto__` allows you to see the prototype of the String object.

The String prototype provides many methods such as:

```js
toUpperCase()
charAt()
indexOf()
slice()
substring()
```

You generally don't need to use `__proto__` directly in normal JavaScript code.

---

# 8. toUpperCase()

Converts a string to uppercase.

```js
const gameName = "Chandan";

console.log(gameName.toUpperCase());
```

Output:

```text
CHANDAN
```

`toUpperCase` is a method, so we use `()`.

```js
gameName.toUpperCase()
```

---

# 9. toLowerCase()

Converts a string to lowercase.

```js
const name = "CHANDAN";

console.log(name.toLowerCase());
```

Output:

```text
chandan
```

---

# 10. charAt()

Returns the character at a specific index.

```js
const gameName = "Chandan";

console.log(gameName.charAt(1));
```

Output:

```text
h
```

Examples:

```js
console.log(gameName.charAt(0)); // C
console.log(gameName.charAt(3)); // n
console.log(gameName.charAt(6)); // n
```

---

# 11. charCodeAt()

Returns the Unicode value of the character at a specific index.

```js
const name = "Chandan";

console.log(name.charCodeAt(0));
```

Output:

```text
67
```

Because:

```text
C = 67
```

---

# 12. indexOf()

Returns the index of the **first occurrence** of a character or substring.

```js
const gameName = "Chandan";

console.log(gameName.indexOf("a"));
```

Output:

```text
2
```

Examples:

```js
console.log(gameName.indexOf("C")); // 0
console.log(gameName.indexOf("h")); // 1
console.log(gameName.indexOf("n")); // 3
```

If the value is not found:

```js
console.log(gameName.indexOf("z"));
```

Output:

```text
-1
```

---

# 13. lastIndexOf()

Returns the index of the **last occurrence** of a character or substring.

```js
const gameName = "Chandan";

console.log(gameName.lastIndexOf("a"));
```

Output:

```text
5
```

`"Chandan"`:

```text
C h a n d a n
0 1 2 3 4 5 6
```

The letter `a` occurs at indexes `2` and `5`.

Therefore:

```js
gameName.lastIndexOf("a")
```

returns:

```text
5
```

---

# 14. includes()

Checks whether a string contains a particular value.

It returns either `true` or `false`.

```js
const name = "Chandan";

console.log(name.includes("an"));
```

Output:

```text
true
```

```js
console.log(name.includes("xyz"));
```

Output:

```text
false
```

---

# 15. startsWith()

Checks whether a string starts with a particular value.

```js
const name = "Chandan";

console.log(name.startsWith("Cha"));
```

Output:

```text
true
```

```js
console.log(name.startsWith("dan"));
```

Output:

```text
false
```

---

# 16. endsWith()

Checks whether a string ends with a particular value.

```js
const name = "Chandan";

console.log(name.endsWith("dan"));
```

Output:

```text
true
```

---

# 17. slice()

Extracts a portion of a string.

```js
const gameName = "Chandan";

console.log(gameName.slice(1, 3));
```

Output:

```text
ha
```

For `"Chandan"`:

```text
C h a n d a n
0 1 2 3 4 5 6
```

`slice(1, 3)` means:

* Start at index `1`
* Stop before index `3`

So indexes `1` and `2` are returned:

```text
ha
```

### Negative indexes

`slice()` supports negative indexes.

```js
const name = "Chandan";

console.log(name.slice(-3));
```

Output:

```text
dan
```

---

# 18. substring()

Extracts a portion of a string.

```js
const gameName = "Chandan";

console.log(gameName.substring(0, 4));
```

Output:

```text
Chan
```

### slice() vs substring()

```js
const str = "Chandan";

console.log(str.slice(1, 4));     
console.log(str.substring(1, 4));
```

Both return:

```text
han
```

The main difference is how they handle negative values.

```js
console.log(str.slice(-3));      
console.log(str.substring(-3));
```

`slice()` supports negative indexes.

`substring()` treats negative values as `0`.

---

# 19. substr()

You may see `substr()` in older JavaScript code.

```js
const name = "Chandan";

console.log(name.substr(1, 3));
```

Output:

```text
han
```

However, **`substr()` is deprecated**.

Prefer:

```js
slice()
```

for new code.

---

# 20. replace()

Replaces the first matching value.

```js
const message = "Hello World";

console.log(message.replace("World", "Chandan"));
```

Output:

```text
Hello Chandan
```

Example:

```js
const text = "apple apple apple";

console.log(text.replace("apple", "mango"));
```

Output:

```text
mango apple apple
```

Only the first matching `"apple"` is replaced.

---

# 21. replaceAll()

Replaces all matching values.

```js
const text = "apple apple apple";

console.log(text.replaceAll("apple", "mango"));
```

Output:

```text
mango mango mango
```

---

# 22. trim()

Removes whitespace from both the beginning and end of a string.

```js
const name = "   Chandan   ";

console.log(name.trim());
```

Output:

```text
Chandan
```

---

# 23. trimStart()

Removes whitespace from the beginning.

```js
const name = "   Chandan   ";

console.log(name.trimStart());
```

---

# 24. trimEnd()

Removes whitespace from the end.

```js
const name = "   Chandan   ";

console.log(name.trimEnd());
```

---

# 25. split()

Converts a string into an array.

```js
const name = "Chandan";

console.log(name.split(""));
```

Output:

```js
["C", "h", "a", "n", "d", "a", "n"]
```

### Split by spaces

```js
const sentence = "I am Chandan";

console.log(sentence.split(" "));
```

Output:

```js
["I", "am", "Chandan"]
```

---

# 26. concat()

Combines strings.

```js
const firstName = "Chandan";
const lastName = "Kumar";

console.log(firstName.concat(" ", lastName));
```

Output:

```text
Chandan Kumar
```

In modern JavaScript, template literals are often easier:

```js
console.log(`${firstName} ${lastName}`);
```

---

# 27. repeat()

Repeats a string a specified number of times.

```js
const name = "Hi ";

console.log(name.repeat(3));
```

Output:

```text
Hi Hi Hi
```

---

# 28. padStart()

Adds characters to the beginning of a string until it reaches the specified length.

```js
const number = "5";

console.log(number.padStart(3, "0"));
```

Output:

```text
005
```

---

# 29. padEnd()

Adds characters to the end of a string until it reaches the specified length.

```js
const number = "5";

console.log(number.padEnd(3, "0"));
```

Output:

```text
500
```

---

# 30. match()

Searches a string using a regular expression.

```js
const text = "I have 10 apples and 20 mangoes";

console.log(text.match(/\d+/g));
```

Output:

```js
["10", "20"]
```

---

# 31. search()

Searches for a match and returns its index.

```js
const text = "Hello Chandan";

console.log(text.search("Chandan"));
```

Output:

```text
6
```

If there is no match:

```text
-1
```

---

# 32. String Immutability

Strings are **immutable** in JavaScript.

This means string methods do not modify the original string.

```js
let name = "Chandan";

name.toUpperCase();

console.log(name);
```

Output:

```text
Chandan
```

To save the changed value:

```js
name = name.toUpperCase();

console.log(name);
```

Output:

```text
CHANDAN
```

---

# 33. splice() Does NOT Work on Strings

This is important:

```js
const gameName = "Chandan";

console.log(gameName.splice(0, 1, "c"));
```

This will cause an error because:

```js
splice()
```

is an **Array method**, not a String method.

For example:

```js
const arr = ["C", "h", "a", "n"];

arr.splice(0, 1, "c");

console.log(arr);
```

Output:

```js
["c", "h", "a", "n"]
```

---

# 34. How to Do a Splice-Like Operation on a String

Since strings are immutable, create a new string.

### Replace the first character

```js
let gameName = "Chandan";

gameName = "c" + gameName.slice(1);

console.log(gameName);
```

Output:

```text
chandan
```

### Replace a character at a specific position

```js
let gameName = "Chandan";

gameName = gameName.slice(0, 1) + "X" + gameName.slice(2);

console.log(gameName);
```

Output:

```text
CXandan
```

---

# 35. Quick Revision Table

| Method / Property | Purpose                       |
| ----------------- | ----------------------------- |
| `length`          | Returns string length         |
| `charAt()`        | Gets character at an index    |
| `charCodeAt()`    | Gets Unicode value            |
| `indexOf()`       | Finds first occurrence        |
| `lastIndexOf()`   | Finds last occurrence         |
| `includes()`      | Checks if value exists        |
| `startsWith()`    | Checks the beginning          |
| `endsWith()`      | Checks the ending             |
| `toUpperCase()`   | Converts to uppercase         |
| `toLowerCase()`   | Converts to lowercase         |
| `slice()`         | Extracts part of a string     |
| `substring()`     | Extracts part of a string     |
| `replace()`       | Replaces first match          |
| `replaceAll()`    | Replaces all matches          |
| `trim()`          | Removes both-side whitespace  |
| `trimStart()`     | Removes beginning whitespace  |
| `trimEnd()`       | Removes ending whitespace     |
| `split()`         | Converts String → Array       |
| `concat()`        | Combines strings              |
| `repeat()`        | Repeats a string              |
| `padStart()`      | Adds padding at the beginning |
| `padEnd()`        | Adds padding at the end       |
| `match()`         | Finds regex matches           |
| `search()`        | Searches and returns index    |

---

# 36. Complete Practice Code

```js
const gameName = "Chandan";

// Basic
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.length);

// Case conversion
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

// Character methods
console.log(gameName.charAt(1));
console.log(gameName.charCodeAt(1));

// Search methods
console.log(gameName.indexOf("a"));
console.log(gameName.lastIndexOf("a"));
console.log(gameName.includes("dan"));
console.log(gameName.startsWith("Cha"));
console.log(gameName.endsWith("dan"));

// Extracting
console.log(gameName.slice(1, 4));
console.log(gameName.substring(0, 4));

// Replace
console.log(gameName.replace("Chandan", "Rahul"));
console.log("apple apple".replaceAll("apple", "mango"));

// Whitespace
console.log("   Chandan   ".trim());
console.log("   Chandan   ".trimStart());
console.log("   Chandan   ".trimEnd());

// Convert String to Array
console.log(gameName.split(""));

// Other methods
console.log("Hi ".repeat(3));
console.log("5".padStart(3, "0"));
console.log("5".padEnd(3, "0"));
```

# Key Points to Remember

1. JavaScript strings are **immutable**.
2. `length` is a property, not a method.
3. String indexes start from `0`.
4. `slice()` supports negative indexes.
5. `substring()` does not work with negative indexes in the same way as `slice()`.
6. `indexOf()` returns `-1` when no match is found.
7. `split()` converts a String into an Array.
8. `splice()` is an **Array method**, not a String method.
9. `replace()` replaces the first match.
10. `replaceAll()` replaces all matches.
11. `toUpperCase()` and `toLowerCase()` return a new string.
12. Methods such as `trim()`, `slice()`, and `replace()` do not modify the original string.


*/