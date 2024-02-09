/* Using generics approach

import { MatchReader } from "./inheritance-approach/MatchReader"
import { MatchResult } from "./MatchResult"

const reader = new MatchReader('football.csv')
reader.read()

const dateOfFirstMatch = reader.data[0][0]
console.log(dateOfFirstMatch)

let manUnitedWins = 0
for (const match of reader.data) {    
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++
    } else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++
    }
}

console.log(`Man United wins ${manUnitedWins} games`)

*/


/* Using interface approach */
import { CsvFileReader } from "./composition-approach/CsvFileReader"
import { MatchReader } from "./composition-approach/MatchReader"
import { ConsoleReporter } from "./composition-approach/reporters/ConsoleReporter"
import { HtmlReporter } from "./composition-approach/reporters/HtmlReporter"
import { WinsAnalyzer } from "./composition-approach/analyzers/WinsAnalyzer"
import { Stats } from "./composition-approach/Stats"

// using instance methods
// const csvFileReader = new CsvFileReader('football.csv') // create an object that satisfy DataReader interface
// const matchReader = new MatchReader(csvFileReader) // create an instance of MatchReader and pass in something satisfying DataReader interface
// matchReader.load() // read, parse and covert values
// const statisticsInLog = new Stats(new WinsAnalyzer('Man United'), new ConsoleReporter()) // perform and output statistics
// statisticsInLog.analyzeAndReport(matchReader.matches)
// const statisticsInHtml = new Stats(new WinsAnalyzer('Man United'), new HtmlReporter()) // perform and output statistics
// statisticsInHtml.analyzeAndReport(matchReader.matches)


// using static methods
const matchReader = MatchReader.fromCsv('football.csv')
const statisticsInLog = Stats.winsAnalysisWithConsoleReport('Man United')
const statisticsInHtml = Stats.winsAnalysisWithHtmlReport('Man United')
matchReader.load()
statisticsInLog.analyzeAndReport(matchReader.matches)
statisticsInHtml.analyzeAndReport(matchReader.matches)
