"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = void 0;
function divide(a, b) {
    if (b === 0) {
        return 'Division by zero is not allowed';
    }
    else {
        return a / b;
    }
}
exports.divide = divide;
