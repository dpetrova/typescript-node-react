/* Inference is when Typescript guess what type the variable schould be */

// primitive types
let bananas = 5;
let color = "red";
let hasCompleted = true;
let notMuch = null;
let notExist = undefined;

// built in objects
let today = new Date()

// arrays
let rgb = ["red", "blue", "green"];
let nums = [1, 2, 3];

// classes
class Person {}
let person = new Person()

// object literal
let dot = {
    x: 5,
    y: 10
}

// functions
const logNum = (i: number) => {
    console.log(i);
}
const sumNum = (a: number, b: number) => {
    return a + b;
}