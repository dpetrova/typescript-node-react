"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        // two-dimentional array    
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            // fs.readFileSync can read any type of file (image, executable, json, csv)
            .readFileSync(this.filename, {
            encoding: 'utf-8' // what type of content we expect to find in that file -> text content encoded with UTF 8
        })
            // split rows by new line
            .split('\n')
            // split values in each row
            .map((row) => row.split(','))
            // convert values
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
