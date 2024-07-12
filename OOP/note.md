# OOP

Object-Oriented Programming (OOP) in JavaScript is a programming paradigm that relies on the concept of classes and objects to create reusable code. JavaScript supports OOP principles such as encapsulation, inheritance, and polymorphism, allowing developers to create robust and modular applications.

### Key Concepts of OOP in JavaScript

1. **Classes and Objects**

    - **Class**: A blueprint for creating objects. It defines a set of properties and methods that the created objects can use.
    - **Object**: An instance of a class. It contains actual values and can perform actions defined by its class.

    #### Example:

    ```javascript
    class Dog {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        bark() {
            return `${this.name} says woof!`;
        }
    }

    const myDog = new Dog("Buddy", 3);
    console.log(myDog.bark()); // Output: Buddy says woof!
    ```

2. **Inheritance**

    - Inheritance allows a class to inherit properties and methods from another class. This promotes code reuse and establishes a relationship between classes.

    #### Example:

    ```javascript
    class Animal {
        constructor(name) {
            this.name = name;
        }

        move() {
            return `${this.name} moves.`;
        }
    }

    class Bird extends Animal {
        fly() {
            return `${this.name} flies.`;
        }
    }

    const eagle = new Bird("Eagle");
    console.log(eagle.move()); // Output: Eagle moves.
    console.log(eagle.fly()); // Output: Eagle flies.
    ```

3. **Encapsulation**

    - Encapsulation is the practice of hiding the internal state and behavior of an object, exposing only what is necessary through a public interface. This is achieved using private properties and methods.

    #### Example:

    ```javascript
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }

        getName() {
            return this._name;
        }

        getAge() {
            return this._age;
        }

        setAge(age) {
            if (age > 0) {
                this._age = age;
            }
        }
    }

    const person = new Person("Alice", 25);
    console.log(person.getName()); // Output: Alice
    person.setAge(26);
    console.log(person.getAge()); // Output: 26
    ```

4. **Polymorphism**

    - Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to be used for different underlying forms (data types).

    #### Example:

    ```javascript
    class Shape {
        draw() {
            console.log("Drawing a shape");
        }
    }

    class Circle extends Shape {
        draw() {
            console.log("Drawing a circle");
        }
    }

    class Square extends Shape {
        draw() {
            console.log("Drawing a square");
        }
    }

    const shapes = [new Circle(), new Square()];

    shapes.forEach((shape) => {
        shape.draw();
    });

    // Output:
    // Drawing a circle
    // Drawing a square
    ```

5. **Abstraction**

    - Abstraction involves hiding the complex implementation details of a system and exposing only the necessary parts. This can be achieved using abstract classes or interfaces (though JavaScript does not have native support for abstract classes).

    #### Example:

    ```javascript
    class Employee {
        constructor(name) {
            this.name = name;
        }

        work() {
            throw new Error("This method should be overridden!");
        }
    }

    class Developer extends Employee {
        work() {
            return `${this.name} is writing code.`;
        }
    }

    class Designer extends Employee {
        work() {
            return `${this.name} is designing interfaces.`;
        }
    }

    const dev = new Developer("John");
    const des = new Designer("Jane");

    console.log(dev.work()); // Output: John is writing code.
    console.log(des.work()); // Output: Jane is designing interfaces.
    ```

### Summary

OOP in JavaScript involves using classes and objects to create reusable and modular code. Key concepts include encapsulation, inheritance, polymorphism, and abstraction. These principles help in building robust and maintainable applications.

<!-- Program1 -->

# OOP Program

Sure! Let's create a simple program using Object-Oriented Programming (OOP) concepts in JavaScript. We'll create a basic program to manage a library with books. This program will include classes for `Book` and `Library`, demonstrating encapsulation, inheritance, and polymorphism.

### Step-by-Step Explanation

1. **Class Definition**:

    - Define a `Book` class to represent individual books.
    - Define a `Library` class to manage a collection of books.

2. **Encapsulation**:

    - Use private properties to store book details.

3. **Methods**:
    - Add methods to the `Library` class to add books, remove books, and list all books.

### Program

```javascript
// Define the Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    getDetails() {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn})`;
    }
}

// Define the Library class
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Book added: ${book.getDetails()}`);
    }

    removeBook(isbn) {
        this.books = this.books.filter((book) => book.isbn !== isbn);
        console.log(`Book removed: ISBN ${isbn}`);
    }

    listBooks() {
        console.log("Library contains:");
        this.books.forEach((book) => {
            console.log(book.getDetails());
        });
    }
}

// Create some book instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "1234567890");
const book2 = new Book("1984", "George Orwell", "0987654321");

// Create a library instance
const library = new Library();

// Add books to the library
library.addBook(book1);
library.addBook(book2);

// List all books in the library
library.listBooks();

// Remove a book from the library by ISBN
library.removeBook("1234567890");

// List all books in the library after removal
library.listBooks();
```

### Explanation

1. **Book Class**:

    - The `Book` class has a constructor that takes `title`, `author`, and `isbn` as arguments and initializes the respective properties.
    - The `getDetails` method returns a string containing the book's details.

2. **Library Class**:

    - The `Library` class has a constructor that initializes an empty array `books` to store the book instances.
    - The `addBook` method takes a `book` object, adds it to the `books` array, and logs a message.
    - The `removeBook` method takes an `isbn`, filters out the book with the given `isbn` from the `books` array, and logs a message.
    - The `listBooks` method iterates over the `books` array and logs the details of each book.

3. **Usage**:
    - Two book instances are created.
    - A library instance is created.
    - Books are added to the library, listed, and then one book is removed and the list is shown again to demonstrate the functionality.

This example demonstrates basic OOP principles in JavaScript, including class creation, encapsulation of data within objects, and methods for interacting with the data.
