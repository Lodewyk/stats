"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
    static reportWinsHtml(teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HtmlReport_1.HtmlReport('staticReport.html'));
    }
}
exports.Summary = Summary;
