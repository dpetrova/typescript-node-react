/* Annotation tells the variable what type it should be */

// primitive types
let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date()

// arrays
let colors: string[] = ["red", "blue", "green"];
let numbers: number[] = [1, 2, 3];

// classes
class Car {}
let car: Car = new Car()

// object literal
let point: { x: number; y: number } = {
    x: 5,
    y: 10
}

// functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}
const sumNumbers: (a: number, b: number) => number = (a: number, b: number) => {
    return a + b;
}



/* When to use annotations */

// 1. Functions that return "any" type (TS cannot predict what type of value will be returned)

// JSON.parse() return type "any"
const num = JSON.parse("4");
const bool = JSON.parse("false");
const alex = JSON.parse("{'name': 'alex'}");
const coordinates = JSON.parse("{'x': 5, 'y': 10}"); 

// fix the "any" type
const num2: number = JSON.parse("4");
const bool2: boolean = JSON.parse("false");
const alex2: {name: string} = JSON.parse("{'name': 'alex'}");
const coordinates2: {x: number; y: number} = JSON.parse("{'x': 5, 'y': 10}"); 


// 2. When we have delayed initialization of a variable
let words = ["red", "blue", "green"];
let hasGreen;
hasGreen = words.includes("green")

// fix the "any" type
let hasRed: boolean;
hasGreen = words.includes("red")
// or better
let hasBlue = false;
hasGreen = words.includes("blue")


// 3. Variables whose type cannot be inferred correctly
let numbersArr = [-10, -1, 12];
let numberAboutZero;

for (let i = 0; i < numbersArr.length; i++) {
    if(numbersArr[i] > 0) {
        numberAboutZero = numbersArr[i]
    } else {
        numberAboutZero = false
    }    
}

// fix the "any" type
let numAboutZero: boolean | number;

for (let i = 0; i < numbersArr.length; i++) {
    if(numbersArr[i] > 0) {
        numAboutZero = numbersArr[i]
    } else {
        numAboutZero = false
    }    
}