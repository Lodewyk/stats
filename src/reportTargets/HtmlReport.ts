import { OutputTarget } from "../Summary";
import fs from 'fs';

export class HtmlReport implements OutputTarget {
    constructor(public outputTarget: string) {}

    print(report: string): void {
        const html = `
            <div>
                <h1>Analysis Output</h1>
                <div>${report}</div>
            </div>
        `;
        fs.writeFileSync(this.outputTarget, html);
    }
}