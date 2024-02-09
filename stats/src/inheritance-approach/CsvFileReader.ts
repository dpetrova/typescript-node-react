import fs from "fs"
import { readFileSync } from 'node:fs';

export abstract class CsvFileReader<T> {
    // two-dimentional array    
    data: T[] = []

    constructor (public filename: string) {}

    abstract mapRow(row: string[]): T

    read(): void {        
        this.data = fs
            // fs.readFileSync can read any type of file (image, executable, json, csv)
            .readFileSync(this.filename, {
                encoding: 'utf-8' // what type of content we expect to find in that file -> text content encoded with UTF 8
            })
            // split rows by new line
            .split('\n')
            // split values in each row
            .map((row: string): string[] => row.split(','))
            // convert values
            .map(this.mapRow)
    }    
}