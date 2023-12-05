/* Blueprint to create an object with some fields and methods */

/*
modifiers:
  public -> this methods can be called anywhere, anytime
  private -> this methods can be called only by other methods in this class
  protected -> this methods can be called by other methods in this class, or by other methods in child classes
*/

class Vehicle {
  // traditional constructor
  // color: string
  // constructor(color: string) {
  //   this.color = color
  // }

  // shorthand
  constructor(public color: string) {}  

  public honk(): void {
    console.log("beep")
  }

  protected drive(): void {
    console.log("brmmm brumm")
  }

  private startEngine(): void {
    console.log("taka-taka")
  }
}

// inheritance
class Car extends Vehicle {
  // override method
  honk(): void {
    console.log("bip bip")
  }

  startDrivingProcess(): void {
    this.startEngine() // cannot call private parent method outside the parent class
    this.drive() // call protected method
  }

  private break(): void {
    console.log("drannn")
  }
}

class Bicycle extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  } 
}

const vehicle = new Vehicle("white")
console.log(vehicle.color)
vehicle.honk() // call public method
vehicle.drive() // cannot call protected method outside the class


const car = new Car("red") // automatically call parent's constructor
console.log(car.color)
car.honk() // call parent's public method
car.drive() // cannot call protected method outside the class
car.break() // cannot call private method outside the class
car.startDrivingProcess() // call child's public method

const bicylce = new Bicycle(2, "red")