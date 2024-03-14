import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

const matchReader = MatchReader.fromCsv('football.csv');
const summary2 = Summary.reportWinsHtml('Man United');

// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport('report.html'));

// summary.buildAndPrintReport(matchReader.matches);

// static method calls - not really needed but it makes reading the file easier
matchReader.load();
summary2.buildAndPrintReport(matchReader.matches);