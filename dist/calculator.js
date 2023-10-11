#! /usr/bin/env node
import inquirer from 'inquirer';
inquirer
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
