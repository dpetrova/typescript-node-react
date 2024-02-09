"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = void 0;
const parseDate = (dateString) => {
    const dateParts = dateString
        .split("/")
        .map((val) => parseInt(val));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // months in Date constructor are 0 indexed   
};
exports.parseDate = parseDate;
