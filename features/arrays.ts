/* Typed arrays -> arrays where each element is some consistent type of value */

/* type inference -> here Typescript guesses what typed array schould be */
const carMakers = ['folkswagen', 'ford', 'toyota'] // string[]
const dates = [new Date(), new Date()] // Date[]
const carsByMake = [
    ['tiguan'],
    ['kuga'],
    ['corolla']
] // string[][]


/* type annotation -> we need to explicitly define typed array when initialize empty array */
const emptyCarMakers: string[] = []
const emptyDates: Date[] = []
const emptyCarsByMake: string[][] = [] 


/* why use typed arrays */

// 1. help with inference when extracting values
const maker = carMakers[0] // TS know that it will be string

// 2. prevent adding incompatible values to the array
carMakers.push(100)

// 3. help with built-in functions (when iterating over a collection of elements)
carMakers.map((maker: string): string => {
    return maker.toUpperCase()
})


/* flexible types (array that contain multiple different types) */
const importantDates = [new Date(), '2023-11-20'] // (string | Date)[]
const emptyImportantDates: (string | Date)[]  = []
