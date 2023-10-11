#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
inquirer_1.default
    .prompt([
    {
        type: "number",
        name: "num1",
        message: 'Enter your 1st number',
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your 2nd number",
    },
    {
        type: "list",
        name: "operations",
        message: "select operations",
        choices: ["+", "-", "*", "/"]
    }
])
    .then((answer) => {
    if (answer.operations === "+") {
        const result = answer.num1 + answer.num2;
        console.log("Sum:", result);
    }
    else if (answer.operations === "-") {
        const result = answer.num1 - answer.num2;
        console.log("Subtract:", result);
    }
    else if (answer.operations === "*") {
        const result = answer.num1 * answer.num2;
        console.log("Multiply:", result);
    }
    else if (answer.operations === "/") {
        const result = answer.num1 / answer.num2;
        console.log("Divide:", result);
    }
});
