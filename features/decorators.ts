@classDecorator
class Boat {
    // property
    @testDecorator
    color: string = 'red'

    // accessor
    @testDecorator
    get formattedColor(): string {
        return `This boats color is ${this.color}`
    }

    // method
    @logErrorCustomMessage("The boat is sinking...Help!")
    // @logError
    // @testDecorator
    float(@parameterDecorator speed: number): void {
        if(speed > 100) {
            console.log("Floating...")
        } else {
            // throw new Error()
            console.log("Sinking...")
        }        
    }
}

function testDecorator(target: any, key: string): void {
    console.log(target)
    console.log(key)
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value // reference to the exact method that decorator is applied to
    // change initial behaviour
    desc.value = function() {
        try {
            method()
        } catch (error) {
            console.log("Oops, the boat was sink!")
        }
    }
}

function logErrorCustomMessage(errorMessage: string) {
    return function(target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value // reference to the exact method that decorator is applied to
        // change initial behaviour
        desc.value = function() {
            try {
                method()
            } catch (error) {
                console.log(errorMessage)
            }
        }
    }
}

function parameterDecorator(target: any, key: string, index: number): void {
    console.log(target)
    console.log(key)
    console.log(index) // index of argument
}

function classDecorator(constructor: typeof Boat): void {
    console.log(constructor)    
}

new Boat().float(240)
new Boat().float(10)