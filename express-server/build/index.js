"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// create app
const app = (0, express_1.default)();
// routes
app.get('/', (req, res) => {
    res.send(`<div>
            <h1>Ni there!</h1>
        </div>`);
});
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
