import fs from "fs"
import { Reporter } from "./Reporter";

export class HtmlReporter implements Reporter {
    print(report: string): void {
        const html = `
        <div>
          <h1>Statistics analysis</h1>
          <div>${report}</div>
        </div>        
        `;

        fs.writeFileSync('report.html', html)
    }   

}