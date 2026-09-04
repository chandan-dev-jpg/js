let myDate=new Date()
console.log(myDate) 
console.log(typeof myDate) 
console.log(myDate.toDateString())
console.log(myDate.toISOString())  
console.log(myDate.toLocaleDateString('en-IN')) 
console.clear()
// let myCreatedDate=new Date(2026,3,29)
// console.log(myCreatedDate.toDateString())
let myCreatedDate=new Date("2023-01-14")
console.log(myCreatedDate.toLocaleDateString())

console.clear()

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.clear()
console.log(Math.floor(Date.now()/1000))
console.clear()

let date=new Date()
console.log(date.getDate())
console.log(date.getDay())
console.log( date.toLocaleString('default',
    {
weekday:"narrow"
    }
))



/*
# JavaScript Date Object — Complete Notes

## 1. What is Date in JavaScript?

The `Date` object is used to work with:

* Date
* Time
* Year
* Month
* Day
* Hours
* Minutes
* Seconds
* Milliseconds

JavaScript dates are based on the number of milliseconds elapsed since:

```text
January 1, 1970, 00:00:00 UTC
```

---

# 2. Creating a Date Object

```js
const date = new Date();

console.log(date);
```

This gives the current date and time.

Example:

```text
2026-09-04T17:30:00.000Z
```

The exact output depends on the current time and timezone.

---

# 3. Date with a Specific Date

```js
const date = new Date("2026-09-04");

console.log(date);
```

You can also provide date and time:

```js
const date = new Date("2026-09-04T10:30:00");

console.log(date);
```

---

# 4. Creating Date Using Numbers

The syntax is:

```js
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

Example:

```js
const date = new Date(2026, 8, 4);

console.log(date);
```

### Important: Month starts from 0

```text
January   = 0
February  = 1
March     = 2
April     = 3
May       = 4
June      = 5
July      = 6
August    = 7
September = 8
October   = 9
November  = 10
December  = 11
```

So:

```js
new Date(2026, 8, 4)
```

means:

```text
September 4, 2026
```

---

# 5. Current Date

```js
const date = new Date();

console.log(date);
```

---

# 6. getFullYear()

Returns the full year.

```js
const date = new Date();

console.log(date.getFullYear());
```

Example output:

```text
2026
```

---

# 7. getMonth()

Returns the month index.

```js
const date = new Date();

console.log(date.getMonth());
```

For September:

```text
8
```

Remember:

```text
January = 0
December = 11
```

---

# 8. getDate()

Returns the day of the month.

```js
const date = new Date();

console.log(date.getDate());
```

For September 4:

```text
4
```

### Important

`getDate()` gives the **day of the month**.

It is different from `getDay()`.

---

# 9. getDay()

Returns the day of the week.

Values:

```text
Sunday    = 0
Monday    = 1
Tuesday   = 2
Wednesday = 3
Thursday  = 4
Friday    = 5
Saturday  = 6
```

Example:

```js
const date = new Date();

console.log(date.getDay());
```

---

# 10. getHours()

Returns the hour.

```js
const date = new Date();

console.log(date.getHours());
```

Range:

```text
0 → 23
```

JavaScript uses the local time zone for `getHours()`.

---

# 11. getMinutes()

Returns minutes.

```js
const date = new Date();

console.log(date.getMinutes());
```

Range:

```text
0 → 59
```

---

# 12. getSeconds()

Returns seconds.

```js
const date = new Date();

console.log(date.getSeconds());
```

Range:

```text
0 → 59
```

---

# 13. getMilliseconds()

Returns milliseconds.

```js
const date = new Date();

console.log(date.getMilliseconds());
```

Range:

```text
0 → 999
```

---

# 14. getTime()

Returns the number of milliseconds since January 1, 1970 UTC.

```js
const date = new Date();

console.log(date.getTime());
```

Example:

```text
1757000000000
```

The exact value depends on the date and time.

This is also called a **Unix timestamp in milliseconds**.

---

# 15. getTimezoneOffset()

Returns the difference between local time and UTC in minutes.

```js
const date = new Date();

console.log(date.getTimezoneOffset());
```

The value depends on the user's timezone and can also vary because of daylight-saving rules.

---

# 16. setFullYear()

Changes the year.

```js
const date = new Date();

date.setFullYear(2030);

console.log(date);
```

---

# 17. setMonth()

Changes the month.

```js
const date = new Date();

date.setMonth(0);

console.log(date);
```

`0` means January.

---

# 18. setDate()

Changes the day of the month.

```js
const date = new Date();

date.setDate(15);

console.log(date);
```

---

# 19. setHours()

Changes the hour.

```js
const date = new Date();

date.setHours(10);

console.log(date);
```

---

# 20. setMinutes()

Changes minutes.

```js
const date = new Date();

date.setMinutes(30);

console.log(date);
```

---

# 21. setSeconds()

Changes seconds.

```js
const date = new Date();

date.setSeconds(45);

console.log(date);
```

---

# 22. setMilliseconds()

Changes milliseconds.

```js
const date = new Date();

date.setMilliseconds(500);

console.log(date);
```

---

# 23. setTime()

Sets the date using milliseconds since January 1, 1970 UTC.

```js
const date = new Date();

date.setTime(0);

console.log(date);
```

Output represents:

```text
January 1, 1970
```

---

# 24. toString()

Converts the Date object into a readable string using local time.

```js
const date = new Date();

console.log(date.toString());
```

Example:

```text
Fri Sep 04 2026 23:30:00 GMT+0530 (India Standard Time)
```

---

# 25. toDateString()

Returns only the date portion.

```js
const date = new Date();

console.log(date.toDateString());
```

Example:

```text
Fri Sep 04 2026
```

---

# 26. toTimeString()

Returns only the time portion.

```js
const date = new Date();

console.log(date.toTimeString());
```

Example:

```text
23:30:00 GMT+0530 (India Standard Time)
```

---

# 27. toISOString()

Returns the date in ISO 8601 format.

```js
const date = new Date();

console.log(date.toISOString());
```

Example:

```text
2026-09-04T18:00:00.000Z
```

The `Z` indicates UTC.

This format is very commonly used in APIs.

---

# 28. toJSON()

Returns the date in JSON/ISO format.

```js
const date = new Date();

console.log(date.toJSON());
```

Example:

```text
2026-09-04T18:00:00.000Z
```

---

# 29. toUTCString()

Converts the date to a UTC string.

```js
const date = new Date();

console.log(date.toUTCString());
```

Example:

```text
Fri, 04 Sep 2026 18:00:00 GMT
```

---

# 30. toLocaleString()

Formats date and time according to a locale.

```js
const date = new Date();

console.log(date.toLocaleString());
```

Example:

```text
9/4/2026, 11:30:00 PM
```

The exact format depends on the environment and locale.

---

# 31. toLocaleDateString()

Returns a localized date.

```js
const date = new Date();

console.log(date.toLocaleDateString());
```

---

# 32. toLocaleTimeString()

Returns a localized time.

```js
const date = new Date();

console.log(date.toLocaleTimeString());
```

---

# 33. Formatting Indian Date

```js
const date = new Date();

console.log(
  date.toLocaleDateString("en-IN")
);
```

Example:

```text
4/9/2026
```

---

# 34. Formatting US Date

```js
const date = new Date();

console.log(
  date.toLocaleDateString("en-US")
);
```

Example:

```text
9/4/2026
```

---

# 35. Formatting Date with Options

```js
const date = new Date();

const options = {
  day: "2-digit",
  month: "long",
  year: "numeric"
};

console.log(
  date.toLocaleDateString("en-IN", options)
);
```

Example:

```text
04 September 2026
```

---

# 36. Formatting Date and Time

```js
const date = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
};

console.log(
  date.toLocaleString("en-IN", options)
);
```

---

# 37. UTC Methods

JavaScript also provides UTC versions of many getter methods.

```js
const date = new Date();

console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDate());
console.log(date.getUTCDay());
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());
console.log(date.getUTCMilliseconds());
```

### Local vs UTC

```js
date.getHours();      // Local time
date.getUTCHours();   // UTC time
```

---

# 38. UTC Setter Methods

There are also UTC versions of setters:

```js
date.setUTCFullYear();
date.setUTCMonth();
date.setUTCDate();
date.setUTCHours();
date.setUTCMinutes();
date.setUTCSeconds();
date.setUTCMilliseconds();
```

Example:

```js
const date = new Date();

date.setUTCFullYear(2030);

console.log(date);
```

---

# 39. Date.now()

Returns the current timestamp in milliseconds.

```js
console.log(Date.now());
```

This is similar to:

```js
console.log(new Date().getTime());
```

---

# 40. Date.parse()

Parses a date string and returns its timestamp in milliseconds.

```js
const timestamp = Date.parse("2026-09-04");

console.log(timestamp);
```

You can convert it back:

```js
const timestamp = Date.parse("2026-09-04");

console.log(new Date(timestamp));
```

---

# 41. Date.UTC()

Returns a timestamp for a specified date/time interpreted as UTC.

```js
const timestamp = Date.UTC(2026, 8, 4);

console.log(timestamp);
```

Remember that the month is zero-based:

```text
8 = September
```

---

# 42. Comparing Two Dates

Dates can be compared using their timestamps.

```js
const date1 = new Date("2026-01-01");
const date2 = new Date("2026-12-01");

console.log(date1 < date2);
```

Output:

```text
true
```

Example:

```js
const date1 = new Date("2026-01-01");
const date2 = new Date("2025-01-01");

console.log(date1 > date2);
```

Output:

```text
true
```

---

# 43. Difference Between Two Dates

```js
const date1 = new Date("2026-01-01");
const date2 = new Date("2026-01-10");

const difference = date2 - date1;

console.log(difference);
```

The result is in milliseconds.

Convert milliseconds to days:

```js
const date1 = new Date("2026-01-01");
const date2 = new Date("2026-01-10");

const difference = date2 - date1;

const days = difference / (1000 * 60 * 60 * 24);

console.log(days);
```

Output:

```text
9
```

---

# 44. Add Days to a Date

```js
const date = new Date();

date.setDate(date.getDate() + 5);

console.log(date);
```

This adds 5 days.

---

# 45. Subtract Days from a Date

```js
const date = new Date();

date.setDate(date.getDate() - 5);

console.log(date);
```

This subtracts 5 days.

---

# 46. Add Months

```js
const date = new Date();

date.setMonth(date.getMonth() + 2);

console.log(date);
```

This adds two months.

---

# 47. Add Years

```js
const date = new Date();

date.setFullYear(date.getFullYear() + 1);

console.log(date);
```

This adds one year.

---

# 48. Get Current Year, Month and Day

```js
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(year);
console.log(month);
console.log(day);
```

Why `+ 1` for month?

Because:

```text
January = 0
February = 1
...
December = 11
```

---

# 49. Create DD/MM/YYYY Format

```js
const date = new Date();

const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const year = date.getFullYear();

const formattedDate = `${day}/${month}/${year}`;

console.log(formattedDate);
```

Example:

```text
04/09/2026
```

---

# 50. Create YYYY-MM-DD Format

```js
const date = new Date();

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;

console.log(formattedDate);
```

Example:

```text
2026-09-04
```

---

# 51. Day Name

```js
const date = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

console.log(days[date.getDay()]);
```

---

# 52. Month Name

```js
const date = new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

console.log(months[date.getMonth()]);
```

---

# 53. Check Valid Date

An invalid date produces `NaN` when converted to a timestamp.

```js
const date = new Date("hello");

console.log(date.getTime());
```

Output:

```text
NaN
```

Check:

```js
const date = new Date("hello");

console.log(Number.isNaN(date.getTime()));
```

Output:

```text
true
```

---

# 54. Important Date Methods — Quick Revision

| Method                 | Purpose                    |
| ---------------------- | -------------------------- |
| `new Date()`           | Creates a Date object      |
| `Date.now()`           | Current timestamp          |
| `Date.parse()`         | Parses date string         |
| `Date.UTC()`           | Creates UTC timestamp      |
| `getFullYear()`        | Gets year                  |
| `getMonth()`           | Gets month (0–11)          |
| `getDate()`            | Gets day of month          |
| `getDay()`             | Gets day of week (0–6)     |
| `getHours()`           | Gets local hours           |
| `getMinutes()`         | Gets minutes               |
| `getSeconds()`         | Gets seconds               |
| `getMilliseconds()`    | Gets milliseconds          |
| `getTime()`            | Gets timestamp             |
| `getTimezoneOffset()`  | Gets UTC offset in minutes |
| `setFullYear()`        | Sets year                  |
| `setMonth()`           | Sets month                 |
| `setDate()`            | Sets day                   |
| `setHours()`           | Sets hours                 |
| `setMinutes()`         | Sets minutes               |
| `setSeconds()`         | Sets seconds               |
| `setMilliseconds()`    | Sets milliseconds          |
| `setTime()`            | Sets timestamp             |
| `toString()`           | Local date/time string     |
| `toDateString()`       | Date portion               |
| `toTimeString()`       | Time portion               |
| `toISOString()`        | ISO/UTC string             |
| `toJSON()`             | JSON date string           |
| `toUTCString()`        | UTC string                 |
| `toLocaleString()`     | Localized date + time      |
| `toLocaleDateString()` | Localized date             |
| `toLocaleTimeString()` | Localized time             |

---

# 55. UTC Methods — Quick Revision

```js
getUTCFullYear()
getUTCMonth()
getUTCDate()
getUTCDay()
getUTCHours()
getUTCMinutes()
getUTCSeconds()
getUTCMilliseconds()

setUTCFullYear()
setUTCMonth()
setUTCDate()
setUTCHours()
setUTCMinutes()
setUTCSeconds()
setUTCMilliseconds()
```

---

# 56. Important Points to Remember

### 1. Month starts at 0

```js
new Date(2026, 0, 1)
```

means January 1.

```js
new Date(2026, 11, 1)
```

means December 1.

### 2. Date starts at 1

```js
getDate()
```

returns `1` to `31`.

### 3. Day starts at 0

```js
getDay()
```

returns:

```text
0 = Sunday
1 = Monday
2 = Tuesday
3 = Wednesday
4 = Thursday
5 = Friday
6 = Saturday
```

### 4. Hours use 24-hour format

```text
0 = 12 AM
12 = 12 PM
13 = 1 PM
23 = 11 PM
```

### 5. `Date` stores an instant in time

A JavaScript `Date` represents a point in time internally as a number of milliseconds relative to the Unix epoch. Local and UTC methods simply present or modify that instant using different timezone interpretations.

---

# 57. Complete Practice Code

```js
// Current date
const date = new Date();

console.log(date);

// Get methods
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());

// UTC methods
console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDate());
console.log(date.getUTCDay());
console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());

// Formatting
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toUTCString());

console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

// Date.now()
console.log(Date.now());

// Specific date
const birthday = new Date("2000-05-15");

console.log(birthday);

// Compare dates
const date1 = new Date("2026-01-01");
const date2 = new Date("2026-12-01");

console.log(date1 < date2);

// Add days
date.setDate(date.getDate() + 5);

console.log(date);
```

# Final Revision

## Create Date

```js
new Date()
new Date("2026-09-04")
new Date(2026, 8, 4)
```

## Get

```js
getFullYear()
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()
getMilliseconds()
getTime()
```

## Set

```js
setFullYear()
setMonth()
setDate()
setHours()
setMinutes()
setSeconds()
setMilliseconds()
setTime()
```

## Format

```js
toString()
toDateString()
toTimeString()
toISOString()
toJSON()
toUTCString()
toLocaleString()
toLocaleDateString()
toLocaleTimeString()
```

## Static Methods

```js
Date.now()
Date.parse()
Date.UTC()
```

## Most Important Beginner Methods

Start with these:

```js
new Date()
getFullYear()
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()
getTime()
toISOString()
toLocaleDateString()
Date.now()
```

*/