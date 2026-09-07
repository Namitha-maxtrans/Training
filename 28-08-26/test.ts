class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let student = new Student("Namitha", 25);

console.log(student.name);
console.log(student.age);
// decorator: adding some more information
function Welcome(constructor: Function) {
    console.log("Welcome to TypeScript!");
}

@Welcome
class Stud2 {
    
}
// dependency injection
//A class needs something → instead of creating it itself, we give it from outside.
class Engine {
    start(): void {
        console.log("Engine started");
    }
}

class Car {
    private engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }

    start(): void {
        this.engine.start();
    }
}

// Create the dependency
const engine = new Engine();

// Inject the dependency into Car
const car = new Car(engine);

// Use the Car
car.start();