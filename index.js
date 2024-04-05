#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 21000;
let myPin = 7273;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("access granted");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    myBalance -= amountAns.amount;
    console.log(`"your remaining balance is:"${myBalance}`);
}
else if (operationAns.amount === "checkbalance") {
    console.log(`"your balance is:"${myBalance}`);
}
else {
    console.log("incorrect pin code");
}
;
