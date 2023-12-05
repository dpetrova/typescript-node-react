/* Interface creates a new type, describing the property names and value types of an object */

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}, Year: ${this.year}, Broken: ${this.broken}`
    }
}

// long type annotations:
const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
    console.log(`Name: ${vehicle.name}, Year: ${vehicle.year}, Broken: ${vehicle.broken}`)
}
printVehicle(oldCivic)

// using interface:
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string
}
const printVehicle2 = (vehicle: Vehicle): void => {
    console.log(vehicle.summary())
}
printVehicle2(oldCivic)



/* code reuse with interfaces */

interface Reportable {    
    summary(): string
}
const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}

const pepsi = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar}g of sugar`
    }
  };

// both pepsi and oldCivic are of type Reportable (they both have summary(): string)
printSummary(oldCivic)
printSummary(pepsi)