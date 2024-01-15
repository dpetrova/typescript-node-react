import { Sorter } from "./Sorter"

export class CharactersCollection extends Sorter {
    constructor(public data: string) {
        super()
    }

    get length(): number {
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        // return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase()
        return this.data[leftIndex].localeCompare(this.data[rightIndex]) > 0 //  0: exact match; -1: left < right; 1: left > right
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('')

        const leftHand = characters[leftIndex]
        characters[leftIndex] = characters[rightIndex]
        characters[rightIndex] = leftHand

        this.data = characters.join('')
    }
}
