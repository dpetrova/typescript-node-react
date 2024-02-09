import fs from "fs"
import { readFileSync } from 'node:fs';

export class CsvFileReader {
    // two-dimentional array
    data: string[][] = []

    constructor (public filename: string) {}

    read(): void {
        
        this.data = fs
            // fs.readFileSync can read any type of file (image, executable, json, csv)
            .readFileSync(this.filename, {
                encoding: 'utf-8' // what type of content we expect to find in that file -> text content encoded with UTF 8
            })
            // split rows by new line
            .split('\n')
            // split values in each row
            .map((row: string): string[] => row.split(','));            
    }
}