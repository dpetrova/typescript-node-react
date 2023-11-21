/* we tell TS what type of arguments a function will receive and what type of values it will return */

// arrow functions
const adding = (a: number, b: number) : number => {
    return a + b;
}

// named functions
function dividing(a: number, b: number) : number {
    return a / b;
}

// annonymous functions
const multiplying = function(a: number, b: number) : number {
    return a * b;
}

// void (no return value)
const log = (message: string) : void => {
    console.log(message)
}

// never (never reach the end of the function)
const throwAnError = (message: string): never => {
    throw new Error(message)
}


const forecastData = {
    date: new Date(),
    weather: 'sunny'
}
const logingWeather = (forecastData: {date: Date, weather: string}): void => {
    console.log(forecastData.date)
    console.log(forecastData.weather)
}
// destructuring
const logingWeatherWithDesructuring = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date)
    console.log(weather)
}
