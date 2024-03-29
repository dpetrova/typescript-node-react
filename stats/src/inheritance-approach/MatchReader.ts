import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "../MatchResult"
import { parseDate } from "../utils";
import { MatchData } from "../MatchData";

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            parseDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult, // type assertion
            row[6]
        ]
    }
}