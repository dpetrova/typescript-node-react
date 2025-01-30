import 'reflect-metadata'

const plane = {
    color: "red"
}

/*  define metadata to object */
// defineMetadata(key, value, target)
Reflect.defineMetadata('note', 'hi there', plane)
Reflect.defineMetadata('height', 10, plane)

// getMetadata(key, target) 
const note = Reflect.getMetadata('note', plane) 
const height = Reflect.getMetadata('height', plane) 
console.log(note)
console.log(height)


/*  define metadata to property */
// defineMetadata(key, value, target, property)
Reflect.defineMetadata('note', 'plane color', plane, 'color')

// getMetadata(key, target, property) 
const noteProperty = Reflect.getMetadata('note', plane, 'color') 
console.log(noteProperty)


/*  define metadata in/to class */
@printMetadata
class Plane {
    color: string = 'red';

    //@markFunction
    @markFunction("Hi there!")
    fly(): void {
        console.log("vrrrrrrrr");
    }
}

// decorator function
// function markFunction(target: Plane, key: string) {
//     Reflect.defineMetadata('secret', 123, target, key)
// }

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly') 
// console.log(secret)

// factory decorator function
function markFunction(secretInfo: string) {
    return function(target: Plane, key: string) {
        Reflect.defineMetadata('secret', secretInfo, target, key)
    }
}

const secretInfo = Reflect.getMetadata('secret', Plane.prototype, 'fly') 
console.log(secretInfo)

function printMetadata(target: typeof Plane) {
    for (const key in target.prototype) {
        const secret = Reflect.getMetadata('secret', target.prototype, key)
        console.log(secret)
    }
    
}