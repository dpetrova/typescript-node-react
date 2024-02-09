import { MatchData } from "../MatchData";
import { Analyzer } from "./analyzers/Analyzer";
import { Reporter } from "./reporters/Reporter";
import { ConsoleReporter } from "./reporters/ConsoleReporter"
import { HtmlReporter } from "./reporters/HtmlReporter"
import { WinsAnalyzer } from "./analyzers/WinsAnalyzer"

export class Stats {
    constructor(public analyzer: Analyzer, public reporter: Reporter) { }

    // instance method
    analyzeAndReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches)
        this.reporter.print(output)
    }

    // static methods
    static winsAnalysisWithConsoleReport(team: string): Stats {
        return new Stats(new WinsAnalyzer(team), new ConsoleReporter())
    }

    static winsAnalysisWithHtmlReport(team: string): Stats {
        return new Stats(new WinsAnalyzer(team), new HtmlReporter())
    }
}