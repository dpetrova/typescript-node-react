"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        // two-dimentional array
        // data: string[][] = []
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
            .map((row) => {
            return [
                (0, utils_1.parseDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    }
}
exports.CsvFileReader = CsvFileReader;
