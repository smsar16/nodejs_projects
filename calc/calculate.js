"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const add_js_1 = require("./add.js");
const subtract_js_1 = require("./subtract.js");
const multiply_js_1 = require("./multiply.js");
const divide_js_1 = require("./divide.js");
/*
const sleep =()=>{
    return new Promise((res=>{
        setTimeout(res,2000);
    }))
}


async function welcome() {
    let first_Title = chalkAnimation.neon('Start using the Calculator');
    await sleep();
    first_Title.stop();
    console.log(`
    _____________________
   |  _________________  |
   | | JO           0. | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|
   `);
    Question();
}
await welcome();
*/
let result;
Question();
function Question() {
    return __awaiter(this, void 0, void 0, function* () {
        inquirer_1.default.prompt([
            {
                type: "list",
                name: "operator",
                message: "What operation do you want to perform?\n",
                choices: ["+ Add", "- Subtract", "x Multiply", "/ Divide"]
            },
            {
                type: "number",
                name: "num1",
                message: "Enter 1st number: "
            },
            {
                type: "number",
                name: "num2",
                message: "Enter 2nd number: "
            }
        ])
            .then((answers) => {
            switch (answers.operator) {
                case '+ Add':
                    console.log("Adding................");
                    result = (0, add_js_1.add)(answers.num1, answers.num2);
                    break;
                case '- Subtract':
                    console.log("subtracting................");
                    result = (0, subtract_js_1.subtract)(answers.num1, answers.num2);
                    break;
                case 'x Multiply':
                    console.log("multiplying................");
                    result = (0, multiply_js_1.multiply)(answers.num1, answers.num2);
                    break;
                case '/ Divide':
                    console.log("dividing................");
                    result = (0, divide_js_1.divide)(answers.num1, answers.num2);
                    break;
            }
            console.log(`Result: ${result}`);
            start_again();
        });
    });
}
;
function start_again() {
    return __awaiter(this, void 0, void 0, function* () {
        yield inquirer_1.default.prompt({
            type: "input",
            name: "restart",
            message: "\n Do you want to continue? y or n: \n"
        })
            .then((again) => {
            if (again.restart === 'y' || again.restart === 'Y') {
                Question();
            }
        });
    });
}
;
