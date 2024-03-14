"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
const summary2 = Summary_1.Summary.reportWinsHtml('Man United');
// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport('report.html'));
// summary.buildAndPrintReport(matchReader.matches);
// static method calls - not really needed but it makes reading the file easier
matchReader.load();
summary2.buildAndPrintReport(matchReader.matches);
