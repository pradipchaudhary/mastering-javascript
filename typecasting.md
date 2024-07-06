# **Type Casting in JavaScript**

Typecasting in JavaScript is the conversion of one data type into another data type, for example, a number to a string. Typecasting is often also known as type conversion.

# **What is data type?**

JavaScript has 8 main data types:

-   String
-   Number
-   Boolean
-   Null
-   Undefined
-   Bigint
-   Symbol
-   Object

The object can be divided into more data types or to be more precise there are data types that are also objects:

-   Array
-   Object
-   Date

JavaScript is a dynamic language with dynamic data types because variable types are defined the moment they are assigned the value. Check out my post to learn more about [data types](https://dev.to/catherineisonline/javascript-data-types-5ec5) if you don’t have prior knowledge.

There are two types of typecasting — implicit typecasting and explicit typecasting.

# The implicit typecasting

The implicit type conversion takes place automatically by the [interpreter](<https://en.wikipedia.org/wiki/Interpreter_(computing)>) or the [compiler](https://en.wikipedia.org/wiki/Compiler) when there is an internal requirement for that.

To understand what I mean exactly, let’s go through several examples.

## The implicit typecasting of strings with plus to strings

When you try to add any data type to a string, JavaScript will convert anything to a string. A string plus anything else even if not a string, will be converted to a string automatically. Note that this works like this only with a plus because any other math operation will return a NaN(Not a Number).

```js
// ✅ Result One = "Hey 1"
console.log("Hey " + 1);

// ✅ Result Two = "Hey 2"
const resultTwo = "Hey " + 1;
console.log(resultTwo);

// ✅ Result Three = "Hey true"
const resultThree = "Hey " + true;
console.log(resultThree);

// ❌ Result Four = "Hey null"
const resultFour = "Hey " + null;
console.log(resultFour);

// ❌ Result Five = undefined
const resultFive = null + undefined;
console.log(resultFive);
```

## The implicit typecasting of numeric strings to numbers

When you have a numeric value in a string but you perform a math operation (specifically subtraction, multiplication, or division) with another numeric value, the numeric string will be converted to a number. Note that this does not work with a plus.

```js
const resultOne = "1" * 2;
console.log(resultOne);
// ✅ Result: 2

const resultTwo = "1" - 2;
console.log(resultTwo);
// ✅ Result: -1

const resultThree = "1" / 2;
console.log(resultThree);
// ✅ Result: 0.5
```

Also, both values can be a string with a numeric value as well and as a result, you will still receive a number.

```js
const resultOne = "1" * "1";
console.log(resultOne);
// ✅ Result: 1

const resultTwo = "1" - "1";
console.log(resultTwo);
// ✅ Result: 0

const resultThree = "1" / "1";
console.log(resultThree);
// ✅ Result: 1
```

If there are any other types with such math operations rather than a number or a numeric string, there are some other behaviors that we will go through shortly.

## The implicit typecasting of booleans to numbers

If you use booleans in math operations with numbers then true is always converted to 1 and false is always converted to 0. Note that if it’s a numeric string (a number in the string) then plus will convert the boolean to a string but anything else will convert the numeric string into a number.

## Number + boolean

```js
const resultOne = 1 + true;
console.log(resultOne); // Result: 2

const resultTwo = 1 + false;
console.log(resultTwo); // Result: 1
```

## Numeric string + boolean

```js
const resultOne = "1" + true;
console.log(resultOne); // Result: 1true

const resultTwo = "1" + false;
console.log(resultTwo); // Result: 1false
```

## A number — boolean

```js
const resultOne = 1 - true;
console.log(resultOne); // Result: 0

const resultTwo = 1 - false;
console.log(resultTwo); // Result: 1
```

## Numeric string — boolean

```js
const resultOne = "1" - true;
console.log(resultOne);
// ✅ Result: 0

const resultTwo = "1" - false;
console.log(resultTwo);
// ✅ Result: 1
```

## Number/boolean

```js
const resultOne = "1" - true;
console.log(resultOne);
// ✅ Result: 0

const resultTwo = "1" - false;
console.log(resultTwo);
// ✅ Result: 1
```

## Numeric string/boolean

```js
const resultOne = "1" / true;
console.log(resultOne);
// ✅ Result: 1

const resultTwo = "1" / false;
console.log(resultTwo);
// ✅ Result: Infinity
```

## Number \* boolean

```js
const resultOne = "1" * true;
console.log(resultOne);
// ✅ Result: 1

const resultTwo = "1" * false;
console.log(resultTwo);
// ✅ Result: 0
```

## The implicit typecasting of null to numbers

When used with numbers, null is converted to 0 whether it’s a plus, minus, division, or multiplication.

```js
const resultOne = 1 + null;
console.log(resultOne);
// ✅ Result: 1

const resultTwo = 1 - null;
console.log(resultTwo);
// ✅ Result: 1

const resultThree = 1 / null;
console.log(resultThree);
// ✅ Result: 1

const resultFour = 1 * null;
console.log(resultFour);
// ✅ Result: 1
```

## The implicit typecasting of undefined

Performing operations with undefined always returns NaN whether it’s a boolean, number, or null. Although an undefined plus string will convert it to a string as we learned earlier.

## Undefined with numbers

```js
const resultOne = 1 + undefined;
console.log(resultOne);
// ✅ Result: NaN

const resultTwo = 1 - undefined;
console.log(resultTwo);
// ✅ Result: NaN

const resultThree = 1 / undefined;
console.log(resultThree);
// ✅ Result: NaN

const resultFour = 1 * undefined;
console.log(resultFour);
// ✅ Result: NaN
```

## Undefined with null

```js
const resultOne = null + undefined;
console.log(resultOne);
// ✅ Result: NaN

const resultTwo = null - undefined;
console.log(resultTwo);
// ✅ Result: NaN

const resultThree = null / undefined;
console.log(resultThree);
// ✅ Result: NaN

const resultFour = null * undefined;
console.log(resultFour);
// ✅ Result: NaN
```

## Undefined with boolean

```js
const resultOne = true + undefined;
console.log(resultOne);
// ✅ Result: NaN

const resultTwo = false - undefined;
console.log(resultTwo);
// ✅ Result: NaN

const resultThree = true / undefined;
console.log(resultThree);
// ✅ Result: NaN

const resultFour = false * undefined;
console.log(resultFour);
// ✅ Result: NaN
```

# The explicit typecasting

Opposite to implicit typecasting, explicit typecasting means data type conversion manually. This can be achieved via various built-in methods. Built-in methods are functions that already exist in JavaScript and you don’t create them yourself.

## The explicit typecasting to number

To convert anything to a number you can use the method Number(). However, the result will be various depending on the data type.

## String to a number

```js
const resultOne = Number("Hi");
console.log(resultOne);
// ✅ Result: NaN
```

## Numeric string to a number

```js
const resultOne = Number("1");
console.log(resultOne);
// ✅ Result: 1
```

## Boolean (true) to a number

```js
const resultOne = Number(true);
console.log(resultOne);
// ✅ Result: 1
```

## Boolean (false) to a number

```js
const resultFour = Number(false);
console.log(resultFour);
// ✅ Result: 0
```

## Null to a number

```js
const resultFive = Number(null);
console.log(resultFive);
// ✅ Result: 0
```

## Undefined to a number

```js
const resultSix = Number(undefine);
console.log(resultSix);
// ✅ Result: NaN
```

## Empty string to a number

```js
const resultSeven = Number(" ");
console.log(resultSeven);
// ✅ Result: 0
```

## Date to a number

```js
const newDate = new Date();

const resultEight = Number(newDate);
console.log(resultEight);
// ✅ Result: 1683923179433
```

Note that the date itself is an object, not a number and the output will be different for you because the new Date() returns milliseconds elapsed since the start of 1970 in UTC, which hopefully has changed ever since I wrote this code.

## The explicit typecasting to string

To convert anything to a string you can use a String() method or toString(). Mostly we use toString() but it might give a different result in some situations.

## Number to a string

```js
const resultOne = (1).toString();
console.log(resultOne);
// ✅ Result: 1

const resultTwo = String(1);
console.log(resultTwo);
// ✅ Result: 1
```

## Null to a string

```js
const resultThree = null.toString();
console.log(resultThree);
// ✅ Result: Uncaught TypeError

const resultFour = String(null);
console.log(resultFour);
// ✅ Result: 'null'
```

## Undefined to a string

```js
const resultFive = undefined.toString();
console.log(resultFive);
// ✅ Result: Uncaught TypeError

const resultSix = String(undefined);
console.log(resultSix);
// ✅ Result: 'undefined'
```

## NaN to a string

```js
const resultSeven = NaN.toString();
console.log(resltSeven);
// ✅ Result: 'NaN'

const resultEight = String(NaN);
console.log(resultEight);
// ✅ Result: 'NaN'
```

## Boolean (true) to a string

![](https://miro.medium.com/v2/resize:fit:700/1*7T0BCEAa9Ch_kKHyM8zCDg.png)

## Boolean (false) to a string

![](https://miro.medium.com/v2/resize:fit:700/1*yDRASidprS4w9IFukYde1w.png)

## Date to a number

![](https://miro.medium.com/v2/resize:fit:700/1*5T2fnUHE5bRvCz95sg1-MA.png)

## The explicit typecasting to boolean

To convert a data type to a boolean we can use the method Boolean(). This conversion can be divided into two parts to make it easier to remember. First, we will group those that return true and then we will group those that return true, simple as that.

## The explicit typecasting to false

The data types that confer to false using the Boolean() method are undefined, null, 0, NaN, ‘’ (an empty string without space).

![](https://miro.medium.com/v2/resize:fit:700/1*Wa3O2L_QRKP_FrU7ltY9TQ.png)

## The explicit typecasting to true

Strings, numbers, and strings that have space convert o true if we use the method Boolean().

![](https://miro.medium.com/v2/resize:fit:700/1*sigsdmn-HvssCP6lHfbsLg.png)

# Converting arrays to objects

There are several ways to convert arrays to objects. Let’s go through each of them.

## The spread operator

A spread operator is an easy way to spread an array inside the object.

![](https://miro.medium.com/v2/resize:fit:700/1*EeshEcMABLB0K42Ws-HyAg.png)

## A for loop

Another way to create an object from an array is to loop through an array and create a key with the array item index and add an array item at a relevant position to the value.

![](https://miro.medium.com/v2/resize:fit:700/1*jHYoDp_XyJc7WQpnosZsjQ.png)

## A forEach loop

A very similar way will be looping through an array via forEach loop.

![](https://miro.medium.com/v2/resize:fit:700/1*VTUJC9WZ1G9ze9hbu-Wjzg.png)

## With the Object.assign()

Next, you can use an object built-in method Object.assign() to merge an array with an object

![](https://miro.medium.com/v2/resize:fit:700/1*FxizKSFIUPKtNbhnrPoOdg.png)

## With the Object.fromEntries()

Finally, you can use another object method Object.fromEntries(). However it will only work if you have a 2-dimensional array, otherwise, it will throw an error.

![](https://miro.medium.com/v2/resize:fit:700/1*p3zUSN13RNPMeyW8bz5jlw.png)

# Converting objects to arrays

To convert objects to arrays there are several built-in methods that we can use. Let’s check them out.

## With the Object.entries()

We used a similar method to convert arrays to objects and we can do the same by using entries. It will return a 2-d array with 3 arrays from each key-value pair.

![](https://miro.medium.com/v2/resize:fit:700/1*wFL_SJBl3vdkK1OgeeebPg.png)

## With the Object.keys()

Next, we can use a keys method that retrieves only the keys of the objects.

![](https://miro.medium.com/v2/resize:fit:700/1*y0W1GqGDnn02rtROtYaoDw.png)

## With the Object.values()

Finally, we can do the same but with the values of the object this time

![](https://miro.medium.com/v2/resize:fit:700/1*ObG67_ugPJ3NForivuI4ew.png)

# Type conversion vs Type coercion

Both type conversion and type coercion do sound and seem similar however they are different things. When we say type coercion it always is an implicit typecasting. If you remember, implicit means that it’s done automatically so to remember it easier consider coercion and implicit kind of synonyms because coercing means ‘persuading someone to do something by threading or force’. So it does kind of associate with the implicit because it’s done automatically, ’by force’.

Type conversion however refers to the general process of typecasting whether it’s an implicit or explicit one.
