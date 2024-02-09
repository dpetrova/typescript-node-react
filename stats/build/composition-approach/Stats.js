"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = void 0;
const ConsoleReporter_1 = require("./reporters/ConsoleReporter");
const HtmlReporter_1 = require("./reporters/HtmlReporter");
const WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
class Stats {
    constructor(analyzer, reporter) {
        this.analyzer = analyzer;
        this.reporter = reporter;
    }
    // instance method
    analyzeAndReport(matches) {
        const output = this.analyzer.run(matches);
        this.reporter.print(output);
    }
    // static methods
    static winsAnalysisWithConsoleReport(team) {
        return new Stats(new WinsAnalyzer_1.WinsAnalyzer(team), new ConsoleReporter_1.ConsoleReporter());
    }
    static winsAnalysisWithHtmlReport(team) {
        return new Stats(new WinsAnalyzer_1.WinsAnalyzer(team), new HtmlReporter_1.HtmlReporter());
    }
}
exports.Stats = Stats;
