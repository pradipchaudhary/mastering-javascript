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
