# Objects

JavaScript objects are a crucial part of the language, used to store collections of data and more complex entities. Here's a detailed explanation of JavaScript objects:

### 1. Declaration and Initialization

You can create an object in JavaScript using various methods:

#### Using Object Literal

```javascript
let obj = {};
let person = {
    name: "John",
    age: 30,
    isStudent: true,
};
```

#### Using the `Object` Constructor

```javascript
let obj = new Object();
let person = new Object();
person.name = "John";
person.age = 30;
person.isStudent = true;
```

### 2. Accessing Object Properties

You can access object properties using dot notation or bracket notation.

#### Dot Notation

```javascript
console.log(person.name); // Outputs: John
console.log(person.age); // Outputs: 30
```

#### Bracket Notation

```javascript
console.log(person["name"]); // Outputs: John
console.log(person["age"]); // Outputs: 30
```

Bracket notation is particularly useful when property names are dynamic or not valid identifiers.

### 3. Modifying Object Properties

You can modify existing properties or add new properties to an object.

```javascript
person.name = "Jane";
person.city = "New York";
console.log(person); // Outputs: { name: "Jane", age: 30, isStudent: true, city: "New York" }
```

### 4. Deleting Object Properties

You can delete a property from an object using the `delete` operator.

```javascript
delete person.isStudent;
console.log(person); // Outputs: { name: "Jane", age: 30, city: "New York" }
```

### 5. Object Methods

Objects can have methods, which are functions stored as properties.

```javascript
let person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    },
};

person.greet(); // Outputs: Hello, my name is John
```

### 6. Common Object Methods

#### `Object.keys()`

The `Object.keys()` method returns an array of a given object's property names.

```javascript
let person = { name: "John", age: 30 };
console.log(Object.keys(person)); // Outputs: ["name", "age"]
```

#### `Object.values()`

The `Object.values()` method returns an array of a given object's values.

```javascript
let person = { name: "John", age: 30 };
console.log(Object.values(person)); // Outputs: ["John", 30]
```

#### `Object.entries()`

The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.

```javascript
let person = { name: "John", age: 30 };
console.log(Object.entries(person)); // Outputs: [["name", "John"], ["age", 30]]
```

### 7. Iterating Over Object Properties

You can iterate over object properties using `for...in` loop, `Object.keys()`, `Object.values()`, or `Object.entries()`.

#### Using `for...in` Loop

```javascript
let person = { name: "John", age: 30 };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

#### Using `Object.keys()`

```javascript
let person = { name: "John", age: 30 };
Object.keys(person).forEach(function (key) {
    console.log(key + ": " + person[key]);
});
```

#### Using `Object.entries()`

```javascript
let person = { name: "John", age: 30 };
Object.entries(person).forEach(function ([key, value]) {
    console.log(key + ": " + value);
});
```

### 8. Nested Objects

Objects can contain other objects as properties, allowing for more complex data structures.

```javascript
let person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: "10001",
    },
};

console.log(person.address.city); // Outputs: New York
```

### 9. `this` Keyword

Within methods, `this` refers to the object the method belongs to.

```javascript
let person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    },
};

person.greet(); // Outputs: Hello, my name is John
```

### 10. Constructor Functions and the `new` Keyword

Constructor functions allow you to create multiple instances of objects with similar properties and methods.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("Hello, my name is " + this.name);
    };
}

let john = new Person("John", 30);
let jane = new Person("Jane", 25);

john.greet(); // Outputs: Hello, my name is John
jane.greet(); // Outputs: Hello, my name is Jane
```

### 11. ES6 Classes

ES6 introduced classes, which provide a cleaner and more concise way to create objects and handle inheritance.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}

let john = new Person("John", 30);
john.greet(); // Outputs: Hello, my name is John
```

JavaScript objects are versatile and can represent complex data structures, making them a powerful feature in the language. Understanding objects is essential for effective JavaScript programming.

# Object Methods

## 1. `Object.keys()`

In JavaScript, the `Object.keys()` method returns an array of a given object's own enumerable property names.

### Syntax

```javascript
let keysArray = Object.keys(object);
```

-   **`object`**: The object whose enumerable own property names are to be returned.

### Example

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

const keys = Object.keys(person);
console.log(keys); // ['firstName', 'lastName', 'age']
```

### Key Points

-   **Returns Array**: `Object.keys()` returns an array containing the keys of the object.
-   **Own Properties**: Only enumerable own properties are included.
-   **Order**: The order of keys is determined by the order in which they were added to the object (for string keys) or by integer index (for array-like indexed properties).

## 2. `Object.values()`

In JavaScript, the `Object.values()` method returns an array of a given object's own enumerable property values.

### Syntax

```javascript
let valuesArray = Object.values(object);
```

-   **`object`**: The object whose enumerable own property values are to be returned.

### Example

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

const values = Object.values(person);
console.log(values); // ['John', 'Doe', 30]
```

### Key Points

-   **Returns Array**: `Object.values()` returns an array containing the values of the object's own enumerable properties.
-   **Order**: The order of values corresponds to the order of keys returned by `Object.keys()`.

## 3. `Object.entries()`

In JavaScript, the `Object.entries()` method returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.

### Syntax

```javascript
let entriesArray = Object.entries(object);
```

-   **`object`**: The object whose enumerable own property `[key, value]` pairs are to be returned.

### Example

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

const entries = Object.entries(person);
console.log(entries); // [['firstName', 'John'], ['lastName', 'Doe'], ['age', 30]]
```

### Key Points

-   **Returns Array of Arrays**: `Object.entries()` returns an array where each element is an array `[key, value]` pair of the object's own enumerable properties.
-   **Order**: The order of `[key, value]` pairs corresponds to the order of keys returned by `Object.keys()`.

## 4. `Object.assign()`

In JavaScript, the `Object.assign()` method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

### Syntax

```javascript
let target = Object.assign(target, ...sources);
```

-   **`target`**: The target object to which the properties will be copied. It is modified and returned by `Object.assign()`.
-   **`sources`**: One or more source objects containing the properties to copy.

### Example

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const merged = Object.assign({}, target, source);
console.log(merged); // { a: 1, b: 4, c: 5 }
```

### Key Points

-   **Modifies Target**: `Object.assign()` modifies the `target` object by copying properties from `sources` objects to it.
-   **Shallow Copy**: It performs a shallow copy, meaning nested objects or arrays within `sources` are copied by reference rather than by value.
-   **Returns Target**: `Object.assign()` returns the modified `target` object.

## 5. `Object.getOwnPropertyNames()`

In JavaScript, the `Object.getOwnPropertyNames()` method returns an array of all properties (including non-enumerable properties) found directly in a given object.

### Syntax

```javascript
let propertyNamesArray = Object.getOwnPropertyNames(object);
```

-   **`object`**: The object whose property names are to be returned.

### Example

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

const propertyNames = Object.getOwnPropertyNames(person);
console.log(propertyNames); // ['firstName', 'lastName', 'age']
```

### Key Points

-   **Returns Array**: `Object.getOwnPropertyNames()` returns an array containing all property names (enumerable and non-enumerable) directly found in the object.
-   **Order**: The order of property names is implementation-dependent and not guaranteed to be consistent across different JS engines.

## 6. `Object.getOwnPropertyDescriptor()`

In JavaScript, the `Object.getOwnPropertyDescriptor()` method returns an object describing the configuration of a specific property on a given object (including whether it is enumerable, writable, configurable, etc.).

### Syntax

```javascript
let propertyDescriptor = Object.getOwnPropertyDescriptor(object, propertyName);
```

-   **`object`**: The object containing the property.
-   **`propertyName`**: The name of the property whose descriptor is to be retrieved.

### Example

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};

const descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);
// {
//   value: 'John',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

### Key Points

-   **Returns Descriptor Object**: `Object.getOwnPropertyDescriptor()` returns an object containing the property descriptor (attributes like `value`, `writable`, `enumerable`, and `configurable`) for the specified property.
-   **Non-Enumerable Properties**: It can retrieve descriptors for non-enumerable properties, unlike `Object.keys()`.

## 7. `Object.defineProperty()`

In JavaScript, the `Object.defineProperty()` method defines a new property directly on an object or modifies an existing property on an object, and returns the object.

### Syntax

```javascript
Object.defineProperty(object, propertyName, propertyDescriptor);
```

-   **`object`**: The object on which to define or modify the property.
-   **`propertyName`**: The name of the property to be defined or modified.
-   **`propertyDescriptor`**: An object that configures the behavior of the property being defined or modified.

### Example

```javascript
const person = {};

Object.defineProperty(person, "firstName", {
    value: "John",
    writable: false,
    enumerable: true,
    configurable: true,
});

console.log(person.firstName); // 'John'
person.firstName = "Jane"; // Throws an error in strict mode or silently fails in non-strict mode
console.log(person.firstName); // 'John'
```

### Key Points

-   **Defines or Modifies Property**: `Object.defineProperty()` either defines a new property on an object or modifies an existing property with the specified descriptor.
-   **Control over Attributes**: It allows fine-grained control over property attributes such as `value`, `writable`, `enumerable`, and `configurable`.
-   **Returns Object**: `Object.defineProperty()` returns the object that was passed as `object`.

## 8. `Object.defineProperties()`

In JavaScript, the `Object.defineProperties()` method defines new or modifies existing properties on an object with the specified property descriptors and returns the object.

### Syntax

```javascript
Object.defineProperties(object, propertyDescriptors);
```

-   **`object`**: The object on which to define or modify properties.
-   **`propertyDescriptors`**: An object whose keys are property names and values are property descriptors for those properties.

### Example

```javascript
const person = {};

Object.defineProperties(person, {
    firstName: {
        value: "John",
        writable: false,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: "Doe",
        writable: false,
        enumerable: true,
        configurable: true,
    },
});

console.log(person.firstName); // 'John'
console.log(person.lastName); // 'Doe'
```

### Key Points

-   **Defines or Modifies Properties**: `Object.defineProperties()` defines new properties or modifies existing properties on an object with the specified descriptors.
-   **Multiple Properties**: It allows defining multiple properties at once using a single method call.
-   **Returns Object**: `Object.defineProperties()` returns the object that was passed as `object`.

Certainly! Let's continue exploring more JavaScript object methods:

## 9. `Object.freeze()`

In JavaScript, the `Object.freeze()` method freezes an object: that is, prevents new properties from being added to it, prevents existing properties from being removed, and prevents existing properties or their enumerability, configurability, or writability from being changed. In essence, it makes the object immutable.

### Syntax

```javascript
Object.freeze(object);
```

-   **`object`**: The object to be frozen.

### Example

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
};

Object.freeze(person);

person.firstName = "Jane"; // This change will be ignored in strict mode or throw an error in non-strict mode
console.log(person.firstName); // 'John'

delete person.lastName; // This operation will fail silently in strict mode or throw an error in non-strict mode
console.log(person.lastName); // 'Doe'

// Trying to define a new property will also fail silently or throw an error
Object.defineProperty(person, "age", {
    value: 30,
    enumerable: true,
});

console.log(person.age); // undefined
```

### Key Points

-   **Freezes Object**: `Object.freeze()` makes an object immutable by preventing any modifications to its properties and their attributes.
-   **Existing Properties**: Existing properties become read-only, and their attributes (`writable`, `enumerable`, `configurable`) cannot be changed.
-   **Returns Frozen Object**: `Object.freeze()` returns the frozen object.

## 10. `Object.seal()`

In JavaScript, the `Object.seal()` method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. However, you can still modify the values of existing properties if they are writable.

### Syntax

```javascript
Object.seal(object);
```

-   **`object`**: The object to be sealed.

### Example

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
};

Object.seal(person);

person.firstName = "Jane"; // Allowed because 'firstName' is writable
console.log(person.firstName); // 'Jane'

delete person.lastName; // This operation will fail silently in strict mode or throw an error in non-strict mode
console.log(person.lastName); // 'Doe'

// Trying to add a new property will fail silently or throw an error
Object.defineProperty(person, "age", {
    value: 30,
    enumerable: true,
});

console.log(person.age); // undefined
```

### Key Points

-   **Seals Object**: `Object.seal()` seals an object, preventing new properties from being added and marking existing properties as non-configurable.
-   **Existing Properties**: Existing properties remain writable if they were originally defined as writable.
-   **Returns Sealed Object**: `Object.seal()` returns the sealed object.

## 11. `Object.isFrozen()`

In JavaScript, the `Object.isFrozen()` method determines if an object is frozen (immutable).

### Syntax

```javascript
let isFrozen = Object.isFrozen(object);
```

-   **`object`**: The object to check.

### Example

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
};

Object.freeze(person);

console.log(Object.isFrozen(person)); // true

person.firstName = "Jane"; // This change will be ignored
console.log(person.firstName); // 'John'

delete person.lastName; // This operation will fail silently
console.log(person.lastName); // 'Doe'
```

### Key Points

-   **Checks Frozen State**: `Object.isFrozen()` returns `true` if the object is frozen (immutable) and `false` otherwise.

## 12. `Object.isSealed()`

In JavaScript, the `Object.isSealed()` method determines if an object is sealed (non-extensible and all properties are non-configurable).

### Syntax

```javascript
let isSealed = Object.isSealed(object);
```

-   **`object`**: The object to check.

### Example

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
};

Object.seal(person);

console.log(Object.isSealed(person)); // true

person.firstName = "Jane"; // Allowed because 'firstName' is writable
console.log(person.firstName); // 'Jane'

delete person.lastName; // This operation will fail silently
console.log(person.lastName); // 'Doe'
```

### Key Points

-   **Checks Sealed State**: `Object.isSealed()` returns `true` if the object is sealed (non-extensible and all properties are non-configurable) and `false` otherwise.

Certainly! Let's explore a few more JavaScript object methods that are useful for various operations:

## 13. `Object.is()`

In JavaScript, the `Object.is()` method determines whether two values are the same value.

### Syntax

```javascript
Object.is(value1, value2);
```

-   **`value1`**: The first value to compare.
-   **`value2`**: The second value to compare.

### Examples

```javascript
console.log(Object.is(5, 5)); // true
console.log(Object.is("hello", "hello")); // true
console.log(Object.is(null, null)); // true

console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
```

### Key Points

-   **Strict Equality**: `Object.is()` compares values similar to strict equality (`===`), but with a few differences:
    -   It considers `+0` and `-0` as different values.
    -   It considers `NaN` as equal to `NaN`.

## 14. `Object.setPrototypeOf()`

In JavaScript, the `Object.setPrototypeOf()` method sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object to another object or `null`.

### Syntax

```javascript
Object.setPrototypeOf(object, prototype);
```

-   **`object`**: The object whose prototype is to be set or changed.
-   **`prototype`**: The object that will become the new prototype, or `null` to remove the prototype.

### Example

```javascript
const person = {
    greet() {
        return `Hello, ${this.firstName} ${this.lastName}!`;
    },
};

const john = {
    firstName: "John",
    lastName: "Doe",
};

Object.setPrototypeOf(john, person);

console.log(john.greet()); // "Hello, John Doe!"
```

### Key Points

-   **Sets Prototype**: `Object.setPrototypeOf()` sets the prototype of `object` to `prototype`.
-   **Dynamic Prototype Chain**: Changes to the prototype chain take effect immediately.
-   **Returns Object**: `Object.setPrototypeOf()` returns the modified object.

## 15. `Object.getOwnPropertyDescriptors()`

In JavaScript, the `Object.getOwnPropertyDescriptors()` method returns all own property descriptors of a given object.

### Syntax

```javascript
Object.getOwnPropertyDescriptors(object);
```

-   **`object`**: The object whose property descriptors are to be retrieved.

### Example

```javascript
const person = {
    firstName: {
        value: "John",
        writable: true,
        enumerable: true,
        configurable: true,
    },
    lastName: {
        value: "Doe",
        writable: true,
        enumerable: true,
        configurable: true,
    },
};

const descriptors = Object.getOwnPropertyDescriptors(person);
console.log(descriptors);
// {
//   firstName: { value: 'John', writable: true, enumerable: true, configurable: true },
//   lastName: { value: 'Doe', writable: true, enumerable: true, configurable: true }
// }
```

### Key Points

-   **Returns Descriptors**: `Object.getOwnPropertyDescriptors()` returns an object containing all own property descriptors (attributes like `value`, `writable`, `enumerable`, `configurable`) of the specified object.

These additional object methods in JavaScript provide flexibility and control over object comparisons, prototype setting, and property descriptor retrieval, enhancing the language's capabilities for object manipulation and management.
