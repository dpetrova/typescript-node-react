"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("../utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    // instance method
    load() {
        // read data
        this.reader.read();
        // convert values
        this.matches = this.reader.data.map((row) => {
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
    // static method
    static fromCsv(filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    }
}
exports.MatchReader = MatchReader;
