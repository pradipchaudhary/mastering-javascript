# 1. **Basics**

## Variables in JavaScript: `var`, `let`, `const`

_Programming languages make use of the computer's memory to 'remember' previous information to be used throughout a program's execution, such as specific values, names and inputs. These are stored in allocations of the computer's memory called variables._

JavaScript provides three keywords for declaring variables: `var`, `let`, and `const`. Each has different properties and use cases.

### `var`

`var` is the oldest way of declaring variables in JavaScript. It has function scope and hoisting behavior.

-   **Function Scope**: A `var` variable is scoped to the function in which it is declared. If declared outside any function, it becomes a global variable.

```javascript
function example() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable, function-scoped
        console.log(x); // 20
    }
    console.log(x); // 20
}
example();
```

-   **Hoisting**: Variables declared with `var` are hoisted to the top of their scope, meaning the declaration is processed before any code is executed, but not the assignment.

```javascript
console.log(y); // undefined
var y = 5;
```

### `let`

`let` was introduced in ES6 (ES2015) and provides block scope, which means it is limited to the block, statement, or expression in which it is used.

-   **Block Scope**: A `let` variable is only accessible within the block it was declared.

```javascript
function example() {
    let x = 10;
    if (true) {
        let x = 20; // Different variable, block-scoped
        console.log(x); // 20
    }
    console.log(x); // 10
}
example();
```

-   **No Hoisting**: Variables declared with `let` are not hoisted to the top of their block. They are in a "temporal dead zone" from the start of the block until the declaration is encountered.

```javascript
console.log(z); // ReferenceError: z is not defined
let z = 5;
```

### `const`

`const` was also introduced in ES6 (ES2015) and is used to declare variables that are constant and block-scoped. The value of a `const` variable cannot be changed through reassignment.

-   **Block Scope**: Like `let`, `const` is block-scoped.

```javascript
function example() {
    const x = 10;
    if (true) {
        const x = 20; // Different variable, block-scoped
        console.log(x); // 20
    }
    console.log(x); // 10
}
example();
```

-   **No Reassignment**: Once a value is assigned to a `const` variable, it cannot be changed.

```javascript
const a = 5;
a = 10; // TypeError: Assignment to constant variable.
```

-   **Const Object Mutability**: While the reference to a `const` variable cannot be changed, the properties of objects or arrays assigned to `const` can be modified.

```javascript
const obj = { key: "value" };
obj.key = "newValue"; // This is allowed
console.log(obj.key); // 'newValue'
```

### Summary

-   **`var`**: Function-scoped, hoisted, can be redeclared and updated.
-   **`let`**: Block-scoped, not hoisted, can be updated but not redeclared within the same scope.
-   **`const`**: Block-scoped, not hoisted, cannot be updated or redeclared.

Use `let` and `const` to write more predictable and less error-prone code. `const` is preferred for values that do not need to be reassigned, whereas `let` is suitable for values that will change. `var` is generally avoided in modern JavaScript development due to its function-scoped behavior and hoisting, which can lead to confusing code and bugs.

## Data Types

### Introduction to JavaScript Data Types

JavaScript is a dynamically typed language, which means that variables do not have a fixed type and can hold any type of value. Understanding the various data types available in JavaScript and how to work with them is fundamental to writing effective and efficient code. This guide covers the different data types in JavaScript, their characteristics, use cases, and how to convert between them.

### Primitive Data Types

1. **Number**

    - **Definition**: The `Number` type represents both integer and floating-point numbers in JavaScript. It is used for numerical values in arithmetic operations and mathematical calculations.
    - **When and Where to Use**: Use the `Number` type for any kind of numeric values, whether integers or floating-point numbers.
    - **Advantages**: Easy arithmetic operations, single type for all numeric calculations.
    - **Disadvantages**: Limited precision for very large or very small numbers, potential issues with floating-point arithmetic.

    - **Example**:
        ```javascript
        let integer = 42;
        let float = 3.14;
        let sum = integer + float; // 45.14
        ```

2. **String**

    - **Definition**: The `String` type represents sequences of characters enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template literals. It is used for text data and provides various methods for manipulation.
    - **When and Where to Use**: Use `String` for text data.
    - **Advantages**: Rich set of built-in methods for manipulation (e.g., concatenation, slicing, searching).
    - **Disadvantages**: Immutable, meaning every change results in a new string, potentially inefficient for frequent changes.

    - **Example**:
        ```javascript
        let greeting = "Hello, ";
        let name = "World";
        let message = greeting + name; // "Hello, World"
        ```

3. **Boolean**

    - **Definition**: The `Boolean` type represents logical values: `true` and `false`. It is used for control flow, conditions, and logical operations.
    - **When and Where to Use**: Use `Boolean` for logical values representing true or false.
    - **Advantages**: Essential for control flow (e.g., conditions, loops).
    - **Disadvantages**: Limited to two values.

    - **Example**:
        ```javascript
        let isActive = true;
        if (isActive) {
            console.log("The system is active.");
        }
        ```

4. **Null**

    - **Definition**: The `null` type represents the intentional absence of any object value. It is often used to indicate the absence of a value or as a placeholder for uninitialized variables.
    - **When and Where to Use**: Use `null` to represent the intentional absence of any object value.
    - **Advantages**: Explicitly denotes "no value".
    - **Disadvantages**: Can be confused with `undefined`.

    - **Example**:
        ```javascript
        let user = null;
        ```

5. **Undefined**

    - **Definition**: The `undefined` type indicates that a variable has been declared but not assigned a value. It is often the default value of uninitialized variables.
    - **When and Where to Use**: Variables that have been declared but not assigned a value are `undefined`.
    - **Advantages**: Indicates uninitialized variables.
    - **Disadvantages**: Can lead to bugs if not handled properly.

    - **Example**:
        ```javascript
        let age;
        console.log(age); // undefined
        ```

6. **Symbol** (ES6)

    - **Definition**: The `Symbol` type represents a unique and immutable value that can be used as an identifier for object properties.
    - **When and Where to Use**: Use `Symbol` for unique identifiers, especially for object properties.
    - **Advantages**: Ensures unique property keys, avoids property name collisions.
    - **Disadvantages**: Less intuitive and less commonly used than other types.

    - **Example**:
        ```javascript
        let uniqueId = Symbol("id");
        let obj = {
            [uniqueId]: 12345,
        };
        console.log(obj[uniqueId]); // 12345
        ```

7. **BigInt** (ES11)

    - **Definition**: The `BigInt` type represents integers with arbitrary precision, allowing the representation of integers beyond the `Number.MAX_SAFE_INTEGER` limit.
    - **When and Where to Use**: Use `BigInt` for integers larger than `Number.MAX_SAFE_INTEGER`.
    - **Advantages**: Supports arbitrarily large integers.
    - **Disadvantages**: Not compatible with `Number` operations directly.

    - **Example**:
        ```javascript
        let big = 1234567890123456789012345678901234567890n;
        let anotherBig = BigInt("1234567890123456789012345678901234567890");
        ```

### Non-Primitive (Reference) Data Types

1. **Object**

    - **Definition**: The `Object` type represents a collection of key-value pairs where keys are strings (or Symbols) and values can be any type. It is a fundamental data structure in JavaScript used for storing and organizing data.
    - **When and Where to Use**: Use `Object` for storing collections of key-value pairs.
    - **Advantages**: Flexible, can store various types of values.
    - **Disadvantages**: Can be more complex to manipulate compared to primitives.

    - **Example**:
        ```javascript
        let user = {
            name: "John",
            age: 30,
            greet: function () {
                console.log("Hello, " + this.name);
            },
        };
        user.greet(); // Hello, John
        ```

2. **Array**

    - **Definition**: The `Array` type represents ordered collections of values, where each value is identified by an index. It provides methods for iteration, modification, and manipulation.
    - **When and Where to Use**: Use `Array` for ordered collections of values.
    - **Advantages**: Methods for iteration, modification, and manipulation.
    - **Disadvantages**: Can become inefficient with very large arrays.

    - **Example**:
        ```javascript
        let numbers = [1, 2, 3, 4, 5];
        numbers.push(6); // [1, 2, 3, 4, 5, 6]
        ```

3. **Function**

    - **Definition**: The `Function` type represents a callable piece of code that can be defined and invoked in JavaScript. Functions are used for code reuse, abstraction, and encapsulation.
    - **When and Where to Use**: Use `Function` for reusable blocks of code.
    - **Advantages**: Modular, supports DRY (Don't Repeat Yourself) principles.
    - **Disadvantages**: Can lead to complex call stacks and scope issues.

    - **Example**:
        ```javascript
        function add(a, b) {
            return a + b;
        }
        console.log(add(2, 3)); // 5
        ```

4. **Date**

    - **Definition**: The `Date` type represents dates and times in JavaScript. It provides methods for parsing, manipulating, and formatting dates and times.
    - **When and Where to Use**: Use `Date` for handling dates and times.
    - **Advantages**: Methods for parsing, manipulating, and formatting dates.
    - **Disadvantages**: Date manipulation can be complex and error-prone.

    - **Example**:
        ```javascript
        let now = new Date();
        console.log(now); // current date and time
        ```

5. **RegExp**

    - **Definition**: The `RegExp` type represents regular expressions, which are used for pattern matching within strings. Regular expressions provide a powerful tool for validation and searching.
    - **When and Where to Use**: Use `RegExp` for pattern matching within strings.
    - **Advantages**: Powerful tool for validation and searching.
    - **Disadvantages**: Syntax can be complex and hard to read.

    - **Example**:
        ```javascript
        let pattern = /ab+c/;
        console.log(pattern.test("abc")); // true
        ```

6. **Map**

    - **Definition**: The `Map` type represents collections of key-value pairs where keys can be of any type. It maintains insertion order and allows for any type of keys.
    - **When and Where to Use**: Use `Map` for collections of key-value pairs where keys can be of any type.
    - **Advantages**: Maintains insertion order, allows for any type of keys.
    - **Disadvantages**: Overhead compared to plain objects for simple use cases.

    - **Example**:
        ```javascript
        let map = new Map();
        map.set("key", "value");
        map.set(42, "answer");
        console.log(map.get(42)); // 'answer'
        ```

7. **Set**

    - **Definition**: The `Set` type represents collections of unique values. It automatically removes duplicates and is useful for ensuring unique elements.
    - **When and Where to Use**: Use `Set` for collections of unique values.
    - **Advantages**: Automatically removes duplicates, useful for ensuring unique elements.
    - **Disadvantages**: Lacks direct access to elements by index.

    - **Example**:
        ```javascript
        let set = new Set([1, 2, 2, 3]);
        set.add(4);
        console.log(set); // Set { 1, 2, 3, 4 }
        ```

### Data Type Conversion

JavaScript provides several methods for converting data between different types. These conversions can be explicit (manual) or implicit (automatic by the interpreter).

#### String Conversion

-   **Definition**: String conversion refers to the process of converting a value to a string data type. It is commonly used for display, concatenation, or storage purposes.
-   **Methods**:
    -   `String(value)`: Converts the value to a string.
    -   `value.toString()`: Converts the value to a string (for non-null and non-undefined values).
    -   Template literals: Use backticks (`` ` ``) and `${}` for embedding expressions.
-   **Examples**:
    ```javascript
    let num = 123;
    let str1 = String(num); // "123"
    let str2 = num.toString(); // "123"
    let str3 = `The number is ${num}`; // "The number is 123"
    ```

#### Number Conversion

-   **Definition**: Number conversion involves converting a value to a numeric data type. It is used primarily for mathematical operations and calculations.
-   **Methods**:
    -   `Number(value)`: Converts the value to a number.
    -   `parseInt(value, 10)`: Parses the value as an integer (base 10).
    -   `parseFloat(value)`: Parses the value as a floating-point number.
-   **Examples**:
    ```javascript
    let str = "123.45";
    let num1 = Number(str); // 123.45
    let num2 = parseInt(str, 10); // 123
    let num3 = parseFloat(str); // 123.45
    ```

#### Boolean Conversion

-   **Definition**: Boolean conversion transforms a value into a boolean data type, representing either true or false. It is often used for conditional checks and logical operations.
-   **Methods**:
    -   `Boolean(value)`: Converts the value to a boolean.
    -   Double negation (`!!value`): Converts the value to a boolean.
-   **Examples**:
    ```javascript
    let str = "hello";
    let bool1 = Boolean(str); // true
    let bool2 = !!str; // true
    ```

#### Automatic Type Conversion (Type Coercion)

-   **Definition**: Automatic type conversion, also known as type coercion, occurs when JavaScript automatically converts values from one data type to another in expressions. It is an implicit process handled by the interpreter.

-   **When and Where to Use**: JavaScript automatically converts values to the appropriate

type in expressions.

-   **Examples**:
    ```javascript
    let result1 = "5" + 3; // "53" (string concatenation)
    let result2 = "5" - 3; // 2 (numeric subtraction)
    let result3 = "5" * "2"; // 10 (numeric multiplication)
    ```
