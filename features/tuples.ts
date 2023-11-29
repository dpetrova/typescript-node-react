/* Tuple -> array-like structure where each element represents some property of a record */

const drinkAsObject = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// this array is going to always have a very consistent ordering of elements inside of it (a string then a boolean then a number)
const drinkAsArray: [string, boolean, number] = ['brown', true, 40]

// Type alias
type Drink = [string, boolean, number]
const pespi: Drink = ['brown', true, 40]
const coffee: Drink = ['black', false, 0]