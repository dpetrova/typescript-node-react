const profile = {
    nickname: 'alex',
    age: 34,
    coords: {
        lat: 0,
        lng: 20
    },
    setAge(age: number): void {
        this.age = age
    }
}

// destructuring
const { age, nickname }: { age: number; nickname: string } = profile
const { coords: {lat, lng} }: { coords: {lat: number; lng: number} } = profile