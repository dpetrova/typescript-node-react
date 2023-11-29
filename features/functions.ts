// arrow functions
const add = (a: number, b: number) : number => {
    return a + b;
}

// named functions
function divide(a: number, b: number) : number {
    return a / b;
}

// annonymous functions
const multiply = function(a: number, b: number) : number {
    return a * b;
}

// void (no return value)
const logger = (message: string) : void => {
    console.log(message)
}

// never (never reach the end of the function)
const throwError = (message: string): never => {
    throw new Error(message)
}


const forecast = {
    date: new Date(),
    weather: 'sunny'
}
const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}
// destructuring
const logWeatherWithDesructuring = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date)
    console.log(weather)
}
