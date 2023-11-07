#!/usr/bin/env node
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
;
let users = [
    {
        userID: "abc",
        userPin: 1234
    },
    {
        userID: "def",
        userPin: 5678
    },
    {
        userID: "ghi",
        userPin: 9101
    }
];
let balance = Math.floor((Math.random() * 100000));
let ans1;
let ans2;
startLoop();
function startLoop() {
    return __awaiter(this, void 0, void 0, function* () {
        yield getUserID();
        do {
            yield getTransaction();
            var again = yield inquirer_1.default.prompt([
                {
                    type: "list",
                    name: "restart",
                    choices: ["Yes", "No"],
                    message: "Do you want to continue? "
                }
            ]);
        } while ((again.restart == "Yes"));
    });
}
;
function getUserID() {
    return __awaiter(this, void 0, void 0, function* () {
        ans1 = yield inquirer_1.default.prompt([
            {
                type: "input",
                name: "userID",
                message: "Please enter your User ID: "
            },
            {
                type: "number",
                name: "userPin",
                message: "Please enter your PIN: "
            }
        ]);
        yield checkUserID(ans1.userID, ans1.userPin);
    });
}
function checkUserID(userID, userPin) {
    return __awaiter(this, void 0, void 0, function* () {
        let condition = false;
        for (let i = 0; i < users.length; i++) {
            if (userID === users[i].userID && userPin === users[i].userPin) {
                condition = true;
                break;
            }
        }
        if (!condition) {
            console.log("Invalid user ID or Pin. Try again! ");
            yield getUserID();
        }
    });
}
;
function getTransaction() {
    return __awaiter(this, void 0, void 0, function* () {
        ans2 = yield inquirer_1.default.prompt([
            {
                type: "list",
                name: "accountType",
                choices: ["Current", "Savings"],
                message: "Please select account type: "
            },
            {
                type: "list",
                name: "transType",
                choices: ["Fast Cash", "Withdraw"],
                message: "Please select transcation type: "
            },
            {
                type: "list",
                name: "amount",
                choices: [5000, 10000, 15000, 20000, 25000, 30000],
                message: "Please select your amount. Your Current balance is: " + balance,
                when(ans2) {
                    return ans2.transType == "Fast Cash";
                }
            },
            {
                type: "number",
                name: "amount",
                message: "Please enter your desired amount. Your current balance is: " + balance,
                when(ans2) {
                    return ans2.transType == "Withdraw";
                }
            }
        ]);
        if (ans1.userID && ans1.userPin) {
            if (ans2.amount <= balance) {
                balance -= ans2.amount;
                console.log(`Your current balance is: ${balance}`);
            }
            else {
                console.log("Insufficient balance. Your balance is " + balance);
            }
        }
    });
}
