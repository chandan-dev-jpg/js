// Number

const score=400
console.log(score)
const balance=new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const num1=123.8566
console.log(num1.toPrecision(3))

const num2=10000000000
console.log(num2.toLocaleString('en-IN'));

//Maths
console.log(Math.abs(-1))
console.log(Math.round(8.1))
console.log(Math.ceil(8.1)) 
console.log(Math.floor(8.1)) 
console.log(Math.floor(8.1)) 
console.log(Math.max(4,5,7,9))
console.log(Math.min(4,5,7,9,10))
console.clear()

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
console.clear()

const min=10
const max=20

//VERY IMP
console.log(Math.floor(Math.random()*(max-min+1))+min)

/*
# JavaScript Number Methods — Complete Notes

## 1. What is a Number?

JavaScript uses the `Number` type for both integers and floating-point numbers.

```js
const age = 25;
const price = 99.99;
const temperature = -10;

console.log(age);
console.log(price);
console.log(temperature);
```

JavaScript does **not** have separate `int` and `float` types like some other languages.

---

# 2. Creating a Number

The easiest way:

```js
const num = 100;

console.log(num);
```

You can also use `Number()` to convert a value into a number:

```js
const value = "100";

const num = Number(value);

console.log(num);
console.log(typeof num);
```

Output:

```text
100
number
```

---

# 3. Number() Conversion

`Number()` converts different values into numbers.

```js
console.log(Number("100"));      // 100
console.log(Number("10.50"));    // 10.5
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0
console.log(Number(""));         // 0
console.log(Number("Hello"));    // NaN
```

---

# 4. typeof

Use `typeof` to check the data type.

```js
const num = 100;

console.log(typeof num);
```

Output:

```text
number
```

---

# 5. toString()

Converts a number into a string.

```js
const num = 100;

console.log(num.toString());
console.log(typeof num.toString());
```

Output:

```text
100
string
```

---

# 6. toFixed()

Formats a number with a specified number of decimal places.

```js
const price = 99.4567;

console.log(price.toFixed(2));
```

Output:

```text
99.46
```

Important: `toFixed()` returns a **string**.

```js
const result = price.toFixed(2);

console.log(typeof result);
```

Output:

```text
string
```

Example:

```js
const price = 100;

console.log(price.toFixed(0)); // "100"
console.log(price.toFixed(2)); // "100.00"
console.log(price.toFixed(3)); // "100.000"
```

---

# 7. toPrecision()

Formats a number to a specified number of significant digits.

```js
const num = 123.456;

console.log(num.toPrecision(4));
```

Output:

```text
123.5
```

Examples:

```js
const num = 123.456;

console.log(num.toPrecision(2)); // "1.2e+2"
console.log(num.toPrecision(3)); // "123"
console.log(num.toPrecision(5)); // "123.46"
```

`toPrecision()` also returns a **string**.

---

# 8. toExponential()

Converts a number to exponential notation.

```js
const num = 12345;

console.log(num.toExponential());
```

Example output:

```text
1.2345e+4
```

You can specify the number of digits after the decimal point:

```js
const num = 12345;

console.log(num.toExponential(2));
```

Output:

```text
1.23e+4
```

---

# 9. valueOf()

Returns the primitive value of a Number object.

```js
const num = new Number(100);

console.log(num.valueOf());
```

Output:

```text
100
```

Usually, you don't need to use `valueOf()` manually.

---

# 10. Number.isInteger()

Checks whether a value is an integer.

```js
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
```

Output:

```text
true
false
```

More examples:

```js
console.log(Number.isInteger(100));    // true
console.log(Number.isInteger(-20));    // true
console.log(Number.isInteger(0));      // true
console.log(Number.isInteger(10.1));   // false
console.log(Number.isInteger("100"));  // false
```

Notice that `"100"` is a string, so it returns `false`.

---

# 11. Number.isNaN()

Checks whether a value is exactly `NaN`.

```js
console.log(Number.isNaN(NaN));
```

Output:

```text
true
```

Examples:

```js
console.log(Number.isNaN(10));       // false
console.log(Number.isNaN("Hello"));  // false
console.log(Number.isNaN(NaN));      // true
```

Important:

```js
Number.isNaN("Hello")
```

is `false` because `"Hello"` is not actually the `NaN` value.

---

# 12. Number.isFinite()

Checks whether a value is a finite number.

```js
console.log(Number.isFinite(100));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
```

Output:

```text
true
false
false
```

Examples:

```js
console.log(Number.isFinite(10));       // true
console.log(Number.isFinite(10.5));     // true
console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(NaN));       // false
console.log(Number.isFinite("10"));      // false
```

---

# 13. Number.isSafeInteger()

Checks whether a number is a safe integer.

JavaScript's safe integer range is:

```text
-(2^53 - 1) to (2^53 - 1)
```

The maximum safe integer is:

```js
console.log(Number.MAX_SAFE_INTEGER);
```

Output:

```text
9007199254740991
```

Example:

```js
console.log(Number.isSafeInteger(100));
console.log(Number.isSafeInteger(9007199254740991));
```

Output:

```text
true
true
```

But:

```js
console.log(Number.isSafeInteger(9007199254740992));
```

Output:

```text
false
```

---

# 14. Number.parseInt()

Converts a value into an integer.

```js
console.log(Number.parseInt("100"));
```

Output:

```text
100
```

Decimal value:

```js
console.log(Number.parseInt("100.99"));
```

Output:

```text
100
```

It removes the decimal part.

Example:

```js
console.log(Number.parseInt("50px"));
```

Output:

```text
50
```

But:

```js
console.log(Number.parseInt("Hello50"));
```

Output:

```text
NaN
```

---

# 15. Number.parseFloat()

Converts a value into a floating-point number.

```js
console.log(Number.parseFloat("100.50"));
```

Output:

```text
100.5
```

Example:

```js
console.log(Number.parseFloat("50.75px"));
```

Output:

```text
50.75
```

Compare:

```js
console.log(Number.parseInt("50.75"));   // 50
console.log(Number.parseFloat("50.75")); // 50.75
```

---

# 16. Number.MAX_VALUE

Returns the largest positive finite number JavaScript can represent.

```js
console.log(Number.MAX_VALUE);
```

---

# 17. Number.MIN_VALUE

Returns the smallest positive number greater than zero.

```js
console.log(Number.MIN_VALUE);
```

Important:

`MIN_VALUE` is **not** the most negative number.

For the most negative finite number, use:

```js
console.log(-Number.MAX_VALUE);
```

---

# 18. Number.MAX_SAFE_INTEGER

Returns the largest integer that can be represented safely.

```js
console.log(Number.MAX_SAFE_INTEGER);
```

Output:

```text
9007199254740991
```

---

# 19. Number.MIN_SAFE_INTEGER

Returns the smallest safe integer.

```js
console.log(Number.MIN_SAFE_INTEGER);
```

Output:

```text
-9007199254740991
```

---

# 20. Number.POSITIVE_INFINITY

Represents positive infinity.

```js
console.log(Number.POSITIVE_INFINITY);
```

Example:

```js
console.log(1 / 0);
```

Output:

```text
Infinity
```

---

# 21. Number.NEGATIVE_INFINITY

Represents negative infinity.

```js
console.log(Number.NEGATIVE_INFINITY);
```

Example:

```js
console.log(-1 / 0);
```

Output:

```text
-Infinity
```

---

# 22. Number.NaN

`NaN` means **Not a Number**.

```js
console.log(Number.NaN);
```

Example:

```js
console.log("hello" * 10);
```

Output:

```text
NaN
```

Check it using:

```js
console.log(Number.isNaN(NaN));
```

---

# 23. Number.EPSILON

Represents the smallest difference between 1 and the next representable floating-point number.

```js
console.log(Number.EPSILON);
```

It is useful when comparing floating-point calculations.

Example:

```js
console.log(0.1 + 0.2 === 0.3);
```

Output:

```text
false
```

Because of floating-point precision.

A tolerance can be used:

```js
const result = 0.1 + 0.2;

console.log(Math.abs(result - 0.3) < Number.EPSILON);
```

---

# 24. Number.isInteger() vs parseInt()

These are different.

### isInteger()

Checks whether the value is already an integer.

```js
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
```

### parseInt()

Converts a string into an integer.

```js
console.log(Number.parseInt("10.5")); // 10
```

---

# 25. Number.isNaN() vs global isNaN()

Prefer `Number.isNaN()` when you want strict checking.

```js
console.log(Number.isNaN("Hello")); // false
console.log(isNaN("Hello"));        // true
```

The global `isNaN()` converts the value before checking.

---

# 26. Math Methods Commonly Used With Numbers

`Math` is a separate JavaScript object, but its methods are very important when working with numbers.

## Math.round()

Rounds to the nearest integer.

```js
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5
```

---

## Math.floor()

Rounds downward.

```js
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
```

For negative numbers:

```js
console.log(Math.floor(-4.1)); // -5
```

---

## Math.ceil()

Rounds upward.

```js
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5
```

---

## Math.trunc()

Removes the decimal part.

```js
console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-4.9)); // -4
```

---

# 27. Math.abs()

Returns the absolute value.

```js
console.log(Math.abs(-10));
```

Output:

```text
10
```

```js
console.log(Math.abs(10)); // 10
```

---

# 28. Math.max()

Returns the largest number.

```js
console.log(Math.max(10, 20, 5, 30));
```

Output:

```text
30
```

---

# 29. Math.min()

Returns the smallest number.

```js
console.log(Math.min(10, 20, 5, 30));
```

Output:

```text
5
```

---

# 30. Math.pow()

Returns a number raised to a power.

```js
console.log(Math.pow(2, 3));
```

Output:

```text
8
```

Modern JavaScript can also use:

```js
console.log(2 ** 3);
```

---

# 31. Math.sqrt()

Returns the square root.

```js
console.log(Math.sqrt(25));
```

Output:

```text
5
```

---

# 32. Math.cbrt()

Returns the cube root.

```js
console.log(Math.cbrt(27));
```

Output:

```text
3
```

---

# 33. Math.random()

Returns a random number from `0` inclusive to `1` exclusive.

```js
console.log(Math.random());
```

Possible output:

```text
0.438726
```

### Random number from 1 to 10

```js
const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);
```

---

# 34. Random Number Between Two Values

For a random integer between `min` and `max`, inclusive:

```js
const min = 10;
const max = 20;

const randomNumber =
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);
```

---

# 35. Math.sign()

Returns the sign of a number.

```js
console.log(Math.sign(10));  // 1
console.log(Math.sign(-10)); // -1
console.log(Math.sign(0));   // 0
```

---

# 36. Math.hypot()

Returns the square root of the sum of squares.

```js
console.log(Math.hypot(3, 4));
```

Output:

```text
5
```

Because:

```text
√(3² + 4²) = 5
```

---

# 37. Math.log()

Returns the natural logarithm.

```js
console.log(Math.log(10));
```

---

# 38. Math.log10()

Returns the base-10 logarithm.

```js
console.log(Math.log10(100));
```

Output:

```text
2
```

---

# 39. Math.log2()

Returns the base-2 logarithm.

```js
console.log(Math.log2(8));
```

Output:

```text
3
```

---

# 40. Number Formatting

`toLocaleString()` formats a number according to a locale.

```js
const amount = 1000000;

console.log(amount.toLocaleString());
```

Example output:

```text
1,000,000
```

Indian number format:

```js
console.log(amount.toLocaleString("en-IN"));
```

Output:

```text
10,00,000
```

Currency example:

```js
const price = 50000;

console.log(
  price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  })
);
```

Example output:

```text
₹50,000.00
```

---

# 41. BigInt

For integers larger than the safe integer range, JavaScript provides `BigInt`.

```js
const bigNumber = 9007199254740991n;

console.log(bigNumber);
console.log(typeof bigNumber);
```

Output:

```text
bigint
```

You can perform BigInt operations:

```js
const a = 1000000000000000000n;
const b = 2000000000000000000n;

console.log(a + b);
```

Important: Don't mix BigInt and Number directly.

```js
console.log(10n + 5);
```

This causes an error.

Use the same type:

```js
console.log(10n + 5n);
```

---

# 42. Important Number Methods — Quick Revision

| Method / Property          | Purpose                    |
| -------------------------- | -------------------------- |
| `Number()`                 | Converts value to Number   |
| `toString()`               | Number → String            |
| `toFixed()`                | Fixed decimal places       |
| `toPrecision()`            | Significant digits         |
| `toExponential()`          | Exponential notation       |
| `valueOf()`                | Returns primitive value    |
| `Number.isInteger()`       | Checks integer             |
| `Number.isNaN()`           | Checks `NaN`               |
| `Number.isFinite()`        | Checks finite number       |
| `Number.isSafeInteger()`   | Checks safe integer        |
| `Number.parseInt()`        | Converts to integer        |
| `Number.parseFloat()`      | Converts to decimal number |
| `Number.MAX_VALUE`         | Largest finite number      |
| `Number.MIN_VALUE`         | Smallest positive number   |
| `Number.MAX_SAFE_INTEGER`  | Largest safe integer       |
| `Number.MIN_SAFE_INTEGER`  | Smallest safe integer      |
| `Number.POSITIVE_INFINITY` | Positive infinity          |
| `Number.NEGATIVE_INFINITY` | Negative infinity          |
| `Number.NaN`               | Not a Number               |
| `Number.EPSILON`           | Floating-point precision   |

---

# 43. Important Math Methods — Quick Revision

| Method          | Purpose             |
| --------------- | ------------------- |
| `Math.round()`  | Nearest integer     |
| `Math.floor()`  | Round down          |
| `Math.ceil()`   | Round up            |
| `Math.trunc()`  | Remove decimal part |
| `Math.abs()`    | Absolute value      |
| `Math.max()`    | Largest number      |
| `Math.min()`    | Smallest number     |
| `Math.pow()`    | Power               |
| `Math.sqrt()`   | Square root         |
| `Math.cbrt()`   | Cube root           |
| `Math.random()` | Random number       |
| `Math.sign()`   | Number sign         |
| `Math.hypot()`  | Hypotenuse          |
| `Math.log()`    | Natural logarithm   |
| `Math.log10()`  | Base-10 logarithm   |
| `Math.log2()`   | Base-2 logarithm    |

---

# 44. Complete Practice Code

```js
const num = 123.456;

// Conversion
console.log(Number("100"));
console.log(num.toString());

// Formatting
console.log(num.toFixed(2));
console.log(num.toPrecision(4));
console.log(num.toExponential(2));

// Checking
console.log(Number.isInteger(100));
console.log(Number.isNaN(NaN));
console.log(Number.isFinite(100));
console.log(Number.isSafeInteger(100));

// Parsing
console.log(Number.parseInt("100.50"));
console.log(Number.parseFloat("100.50"));

// Number properties
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);

// Math
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.trunc(4.9));

console.log(Math.abs(-10));
console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 20, 30));

console.log(Math.pow(2, 3));
console.log(Math.sqrt(25));
console.log(Math.cbrt(27));

console.log(Math.random());
console.log(Math.sign(-10));
console.log(Math.hypot(3, 4));

// Formatting
console.log((1000000).toLocaleString());
console.log((1000000).toLocaleString("en-IN"));
```

# Key Points to Remember

1. JavaScript has one main numeric type: `number`.
2. Integers and decimals are both `number`.
3. `toFixed()` returns a string.
4. `toPrecision()` returns a string.
5. `parseInt()` extracts/converts an integer.
6. `parseFloat()` extracts/converts a floating-point number.
7. `Number.isInteger()` checks whether a value is an integer.
8. `Number.isNaN()` strictly checks for `NaN`.
9. `Number.isFinite()` checks for finite numbers.
10. `Number.MAX_SAFE_INTEGER` is `9007199254740991`.
11. `Math.random()` returns a value from `0` up to but not including `1`.
12. Use `BigInt` when you need integers beyond the safe `number` range.
13. `Math` methods are commonly used for number calculations.
14. `Number` methods and `Math` methods are different:

* `Number.isInteger()`
* `Math.round()`

*/