# Object Methods

## 1. `Object.assign()`

The `Object.assign()` method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

### Syntax

```javascript
Object.assign(target, ...sources);
```

-   **`target`**: The target object.
-   **`sources`**: The source object(s).

### Example

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 4, c: 5 }
```

### Key Points

-   **Shallow Copy**: Properties are copied by reference.
-   **Enumerability**: Only enumerable own properties are copied.
-   **Overwrite**: Properties in the target object are overwritten by properties in the source if they have the same key.

### Use Case

-   **Merging Objects**: Combining multiple objects into one.

---

## 2. `Object.create()`

The `Object.create()` method creates a new object with the specified prototype object and properties.

### Syntax

```javascript
Object.create(proto, [propertiesObject]);
```

-   **`proto`**: The object which should be the prototype of the newly-created object.
-   **`propertiesObject`**: Optional. If specified and not undefined, an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object.

### Example

```javascript
const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};
const me = Object.create(person);
me.name = "Matthew";
me.isHuman = true;
me.printIntroduction();
```

### Key Points

-   **Prototype Chain**: Allows setting up the prototype chain for new objects.
-   **Flexible Initialization**: Can initialize new objects with custom prototypes and properties.

### Use Case

-   **Inheritance**: Creating objects with specific prototypes for inheritance.

---

## 3. `Object.defineProperty()`

The `Object.defineProperty()` method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

### Syntax

```javascript
Object.defineProperty(obj, prop, descriptor);
```

-   **`obj`**: The object on which to define the property.
-   **`prop`**: The name of the property to be defined or modified.
-   **`descriptor`**: The descriptor for the property being defined or modified.

### Example

```javascript
const obj = {};
Object.defineProperty(obj, "property1", {
    value: 42,
    writable: false,
});
console.log(obj.property1); // 42
obj.property1 = 77; // Throws an error in strict mode
```

### Key Points

-   **Property Attributes**: Allows defining property attributes (configurable, enumerable, writable, value).
-   **Control**: Provides precise control over properties.

### Use Case

-   **Defining Non-writable Properties**: Creating properties that cannot be changed.

---

## 4. `Object.defineProperties()`

The `Object.defineProperties()` method defines new or modifies existing properties directly on an object, returning the object.

### Syntax

```javascript
Object.defineProperties(obj, props);
```

-   **`obj`**: The object on which to define or modify properties.
-   **`props`**: An object whose keys are the names of the properties to be defined or modified and whose values are objects describing those properties.

### Example

```javascript
const obj = {};
Object.defineProperties(obj, {
    property1: {
        value: 42,
        writable: true,
    },
    property2: {
        value: 30,
        writable: false,
    },
});
console.log(obj.property1); // 42
console.log(obj.property2); // 30
```

### Key Points

-   **Multiple Properties**: Allows defining multiple properties at once.
-   **Detailed Control**: Provides detailed control over each property's attributes.

### Use Case

-   **Complex Object Initialization**: Initializing objects with multiple properties with specific attributes.

---

## 5. `Object.entries()`

The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

### Syntax

```javascript
Object.entries(obj);
```

-   **`obj`**: The object whose enumerable own property [key, value] pairs are to be returned.

### Example

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]
```

### Key Points

-   **Array Format**: Converts object properties to an array of [key, value] pairs.
-   **Enumerability**: Only includes enumerable properties.

### Use Case

-   **Iteration**: Useful for iterating over an object's properties.

---

## 6. `Object.freeze()`

The `Object.freeze()` method freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed. In essence, the object becomes effectively immutable.

### Syntax

```javascript
Object.freeze(obj);
```

-   **`obj`**: The object to freeze.

### Example

```javascript
const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // This will not work
console.log(obj.prop); // 42
```

### Key Points

-   **Immutability**: Makes an object immutable.
-   **Prevent Modifications**: Prevents adding, deleting, or modifying properties.

### Use Case

-   **Constant Objects**: Creating objects that should not be changed.

---

## 7. `Object.getOwnPropertyDescriptor()`

The `Object.getOwnPropertyDescriptor()` method returns a property descriptor for a named property on an object.

### Syntax

```javascript
Object.getOwnPropertyDescriptor(obj, prop);
```

-   **`obj`**: The object in which to look for the property.
-   **`prop`**: The name of the property whose descriptor is to be returned.

### Example

```javascript
const obj = { a: 1 };
console.log(Object.getOwnPropertyDescriptor(obj, "a"));
// { value: 1, writable: true, enumerable: true, configurable: true }
```

### Key Points

-   **Property Details**: Provides detailed information about a property.
-   **Non-enumerable Properties**: Includes non-enumerable properties.

### Use Case

-   **Inspection**: Inspecting property attributes.

---

## 8. `Object.getOwnPropertyDescriptors()`

The `Object.getOwnPropertyDescriptors()` method returns an object containing all own property descriptors of an object.

### Syntax

```javascript
Object.getOwnPropertyDescriptors(obj);
```

-   **`obj`**: The object whose property descriptors are to be returned.

### Example

```javascript
const obj = { a: 1 };
console.log(Object.getOwnPropertyDescriptors(obj));
```

### Key Points

-   **All Descriptors**: Returns descriptors for all properties.
-   **Detailed Information**: Includes all property attributes.

### Use Case

-   **Cloning**: Useful for deep cloning objects.

---

## 9. `Object.getOwnPropertyNames()`

The `Object.getOwnPropertyNames()` method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly upon a given object.

### Syntax

```javascript
Object.getOwnPropertyNames(obj);
```

-   **`obj`**: The object whose own properties are to be returned.

### Example

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.getOwnPropertyNames(obj)); // ['a', 'b', 'c']
```

### Key Points

-   **All Properties**: Includes non-enumerable properties.
-   **String Keys**: Only returns properties with string keys.

### Use Case

-   **Inspection**: Getting a list of all property names.

---

## 10. `Object.getOwnPropertySymbols()`

The `Object.getOwnPropertySymbols()` method returns an array of all symbol properties found directly upon a given object.

### Syntax

```javascript
Object.getOwnPropertySymbols(obj);
```

-   **`obj`**: The object whose own symbol properties are to be returned.

### Example

```javascript
const obj = { [Symbol("a")]: 1 };
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(a)]
```

### Key Points

-   **Symbol Properties**: Only includes symbol properties.
-   **Own Properties**: Only includes properties directly on the object.

### Use Case

-   **Symbol Inspection**: Getting a list of symbol properties.

---

## 11. `Object.getPrototypeOf()`

The `Object.getPrototypeOf()` method returns the prototype (i.e., the internal [[Prototype]] property) of the specified object.

### Syntax

```javascript
Object.getPrototypeOf(obj);
```

-   **`obj`**: The object whose prototype is to be returned.

### Example

```javascript
const proto = {};
const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto); // true
```

### Key Points

-   **Prototype Chain**: Provides access to the object's

prototype.

-   **Non-nullable**: Returns null if the object has no prototype.

### Use Case

-   **Inheritance Inspection**: Checking an object's prototype.

---

## 12. `Object.is()`

The `Object.is()` method determines whether two values are the same value.

### Syntax

```javascript
Object.is(value1, value2);
```

-   **`value1`**: The first value to compare.
-   **`value2`**: The second value to compare.

### Example

```javascript
Object.is("foo", "foo"); // true
Object.is(window, window); // true
Object.is("foo", "bar"); // false
Object.is([], []); // false
```

### Key Points

-   **Strict Comparison**: More accurate than `===` for `NaN` and `-0`/`+0`.
-   **Same Value**: Determines if two values are the same.

### Use Case

-   **Equality Checks**: Performing strict equality checks.

---

## 13. `Object.isExtensible()`

The `Object.isExtensible()` method determines if an object is extensible (whether it can have new properties added to it).

### Syntax

```javascript
Object.isExtensible(obj);
```

-   **`obj`**: The object to test.

### Example

```javascript
const obj = {};
console.log(Object.isExtensible(obj)); // true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false
```

### Key Points

-   **Extension Check**: Determines if new properties can be added.
-   **Prevent Extensions**: Use `Object.preventExtensions` to make an object non-extensible.

### Use Case

-   **Object Integrity**: Checking if an object can be extended.

---

## 14. `Object.isFrozen()`

The `Object.isFrozen()` method determines if an object is frozen.

### Syntax

```javascript
Object.isFrozen(obj);
```

-   **`obj`**: The object to test.

### Example

```javascript
const obj = Object.freeze({});
console.log(Object.isFrozen(obj)); // true
```

### Key Points

-   **Freeze Check**: Determines if an object is frozen.
-   **Immutability**: Use `Object.freeze` to freeze an object.

### Use Case

-   **Object Integrity**: Checking if an object is immutable.

---

## 15. `Object.isSealed()`

The `Object.isSealed()` method determines if an object is sealed.

### Syntax

```javascript
Object.isSealed(obj);
```

-   **`obj`**: The object to test.

### Example

```javascript
const obj = Object.seal({});
console.log(Object.isSealed(obj)); // true
```

### Key Points

-   **Seal Check**: Determines if an object is sealed.
-   **Prevent Configuring**: Use `Object.seal` to seal an object.

### Use Case

-   **Object Integrity**: Checking if an object is sealed.

---

## 16. `Object.keys()`

The `Object.keys()` method returns an array of a given object's own enumerable property names.

### Syntax

```javascript
Object.keys(obj);
```

-   **`obj`**: The object whose enumerable own properties are to be returned.

### Example

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ['a', 'b', 'c']
```

### Key Points

-   **Property Names**: Returns an array of property names.
-   **Enumerability**: Only includes enumerable properties.

### Use Case

-   **Iteration**: Iterating over an object's keys.

---

## 17. `Object.preventExtensions()`

The `Object.preventExtensions()` method prevents new properties from ever being added to an object (i.e., prevents future extensions to the object).

### Syntax

```javascript
Object.preventExtensions(obj);
```

-   **`obj`**: The object to make non-extensible.

### Example

```javascript
const obj = {};
Object.preventExtensions(obj);
obj.newProp = "hello"; // This will not work
```

### Key Points

-   **Non-extensibility**: Makes an object non-extensible.
-   **Prevent Adding Properties**: Prevents new properties from being added.

### Use Case

-   **Object Integrity**: Preventing an object from being extended.

---

## 18. `Object.seal()`

The `Object.seal()` method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable.

### Syntax

```javascript
Object.seal(obj);
```

-   **`obj`**: The object to seal.

### Example

```javascript
const obj = { prop: 1 };
Object.seal(obj);
obj.prop = 2; // This will work
delete obj.prop; // This will not work
```

### Key Points

-   **Sealed Objects**: Prevents adding or deleting properties.
-   **Non-configurable**: Existing properties become non-configurable.

### Use Case

-   **Object Integrity**: Sealing an object to prevent changes.

---

## 19. `Object.setPrototypeOf()`

The `Object.setPrototypeOf()` method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

### Syntax

```javascript
Object.setPrototypeOf(obj, prototype);
```

-   **`obj`**: The object which is to have its prototype set.
-   **`prototype`**: The object's new prototype (an object or null).

### Example

```javascript
const obj = {};
const proto = {};
Object.setPrototypeOf(obj, proto);
console.log(Object.getPrototypeOf(obj) === proto); // true
```

### Key Points

-   **Prototype Chain**: Changes the prototype of an object.
-   **Null Prototype**: Can set the prototype to null.

### Use Case

-   **Inheritance**: Modifying the prototype chain for inheritance.

---

## 20. `Object.values()`

The `Object.values()` method returns an array of a given object's own enumerable property values.

### Syntax

```javascript
Object.values(obj);
```

-   **`obj`**: The object whose enumerable own property values are to be returned.

### Example

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]
```

### Key Points

-   **Property Values**: Returns an array of property values.
-   **Enumerability**: Only includes enumerable properties.

### Use Case

-   **Iteration**: Iterating over an object's values.

---

## 21. `Object.fromEntries()`

The `Object.fromEntries()` method transforms a list of key-value pairs into an object.

### Syntax

```javascript
Object.fromEntries(iterable);
```

-   **`iterable`**: An iterable such as an Array or Map, containing key-value pairs.

### Example

```javascript
const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);
const obj = Object.fromEntries(entries);
console.log(obj); // { foo: 'bar', baz: 42 }
```

### Key Points

-   **Object Creation**: Creates an object from an iterable of key-value pairs.
-   **Inversion**: Inverts the operation of `Object.entries()`.

### Use Case

-   **Conversion**: Converting a Map or array of key-value pairs to an object.

---

## 22. `Object.hasOwn()`

The `Object.hasOwn()` method determines whether an object has a property with the specified key as its own property.

### Syntax

```javascript
Object.hasOwn(obj, prop);
```

-   **`obj`**: The object to test.
-   **`prop`**: The name or Symbol of the property to test.

### Example

```javascript
const obj = { a: 1 };
console.log(Object.hasOwn(obj, "a")); // true
console.log(Object.hasOwn(obj, "b")); // false
```

### Key Points

-   **Own Properties**: Checks if a property exists directly on the object.
-   **String or Symbol**: Works with both string and symbol properties.

### Use Case

-   **Property Check**: Checking if an object has a specific property.

---

## 23. `Object.prototype.hasOwnProperty()`

The `Object.prototype.hasOwnProperty()` method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

### Syntax

```javascript
obj.hasOwnProperty(prop);
```

-   **`prop`**: The name of the property to test.

### Example

```javascript
const obj = { a: 1 };
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("b")); // false
```

### Key Points

-   **Own Properties**: Checks if a property exists directly on the object.
-   **Inherited Properties**: Does not check inherited properties.

### Use Case

-   **Property Check**: Verifying the existence of an own property.

---

## 24. `Object.prototype.isPrototypeOf()`

The `Object.prototype.isPrototypeOf()` method checks if an object exists in another object's prototype chain.

### Syntax

```javascript
proto.isPrototypeOf(obj);
```

-   **`proto`**: The object which may be in the prototype chain of `obj`.
-   **`obj`**: The object whose prototype chain is to be checked.

### Example

```javascript
function Foo() {}
function Bar() {}

Bar.prototype = Object.create(Foo.prototype);

const b = new Bar();
console.log(Foo.prototype.isPrototypeOf(b)); // true
```

### Key Points

-   **Prototype Chain**: Checks if an object is in another object's prototype chain.
-   **Inheritance**: Useful for checking inheritance relationships.

### Use Case

-   **Prototype Check**: Verifying prototype chain relationships.

---

## 25. `Object.prototype.propertyIsEnumerable()`

The `Object.prototype.propertyIsEnumerable()` method returns a boolean indicating whether the specified property is enumerable.

### Syntax

```javascript
obj.propertyIsEnumerable(prop);
```

-   **`prop`**: The name of the property to test.

### Example

```javascript
const obj = { a: 1 };
console.log(obj.propertyIsEnumerable("a")); // true
console.log(obj.propertyIsEnumerable("b")); // false
```

### Key Points

-   **Enumerability Check**: Determines if a property is enumerable.
-   **Own Properties**: Only checks own properties.

### Use Case

-   **Property Attributes**: Checking if a property is enumerable.

---

## 26. `Object.prototype.toLocaleString()`

The `Object.prototype.toLocaleString()` method returns a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.

### Syntax

```javascript
obj.toLocaleString();
```

### Example

```javascript
const date = new Date();
console.log(date.toLocaleString()); // "7/5/2024, 1:45:30 PM"
```

### Key Points

-   **Locale-Specific**: Intended for locale-specific string representations.
-   **Overridable**: Can be overridden by derived objects.

### Use Case

-   **Localization**: Providing localized string representations.

---

## 27. `Object.prototype.toString()`

The `Object.prototype.toString()` method returns a string representing the object.

### Syntax

```javascript
obj.toString();
```

### Example

```javascript
const obj = {};
console.log(obj.toString()); // "[object Object]"
```

### Key Points

-   **String Representation**: Provides a default string representation.
-   **Overridable**: Can be overridden by derived objects.

### Use Case

-   **Inspection**: Getting a string representation of an object.

---

## 28. `Object.prototype.valueOf()`

The `Object.prototype.valueOf()` method returns the primitive value of the specified object.

### Syntax

```javascript
obj.valueOf();
```

### Example

```javascript
const obj = {};
console.log(obj.valueOf() === obj); // true
```

### Key Points

-   **Primitive Value**: Returns the primitive value of an object.
-   **Overridable**: Can be overridden by derived objects.

### Use Case

-   **Primitive Access**: Accessing the primitive value of an object.

---

I can compile this into a markdown file for you if you want. Let me know if you'd like me to proceed.
