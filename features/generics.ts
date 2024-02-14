/* example of generics with classes */
class ArrayOfNumbers {    
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {    
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {    
    constructor(public collection: T[]) { }

    get(index: number): T {
        return this.collection[index];
    }
}

const numbers = new ArrayOfNumbers([1,2,3])
const strs = new ArrayOfStrings(['1', '2', '3'])
const any = new ArrayOfAnything<number>([1,2,3])
const any2 = new ArrayOfAnything([1,2,3]) // type inference



/* example of generics with functions */
function printNumbers(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
       console.log(arr[i])        
    }
}

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])        
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])        
    }
}

printNumbers([1,2,3])
printStrings(['1', '2', '3'])
printAnything<string>(['1', '2', '3'])
printAnything(['1', '2', '3']) // type inference



/* Generic constrains */
class Car {
    print() {
        console.log("Car")
    }
}

class House {
    print() {
        console.log("House")
    }
}

interface Printable {
    print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print()       
     }
}

printHousesOrCars<House>([new House(), new House()])
printHousesOrCars([new House(), new House()]) // type inference
printHousesOrCars<Car>([new Car(), new Car()])
printHousesOrCars([new Car(), new Car()]) // type inference
printHousesOrCars<Car | House>([new House(), new Car()])
printHousesOrCars([new House(), new Car()]) // type inference