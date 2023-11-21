// TS guess what type of arguments a function will return, but not guess type of values of arguments

// arrow functions
const addition = (a: number, b: number) => {
    return a + b;
}

// named functions
function division(a: number, b: number) {
    return a / b;
}

// annonymous functions
const multiplication = function(a: number, b: number) {
    return a * b;
}

// void (no return value)
const logging = (message: string) => {
    console.log(message)
}

// never (never reach the end of the function)
const throwingError = (message: string) => {
    throw new Error(message)
}