import { Reporter } from "./Reporter";

export class ConsoleReporter implements Reporter {
    print(report: string): void {
        console.log(report)
    }

}