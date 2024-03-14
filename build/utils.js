"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
// currently assumes that dates are in the format dd/mm/yyyy
const dateStringToDate = (dateString) => {
    const dateParts = dateString
        .split('/')
        .map((value) => { return parseInt(value); });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
