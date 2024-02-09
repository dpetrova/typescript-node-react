"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReporter = void 0;
const fs_1 = __importDefault(require("fs"));
class HtmlReporter {
    print(report) {
        const html = `
        <div>
          <h1>Statistics analysis</h1>
          <div>${report}</div>
        </div>        
        `;
        fs_1.default.writeFileSync('report.html', html);
    }
}
exports.HtmlReporter = HtmlReporter;
