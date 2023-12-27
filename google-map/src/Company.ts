import { faker } from '@faker-js/faker';

export class Company {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }

    markerContent(): string {
        return `
        <div>
            <h3>Company name: ${this.name}</h3>
            Catchphraze: ${this.catchPhrase}
        </div>`
    }
}