import inquirer from "inquirer";
import chalk from "chalk";

let fair = 0;
let input = await inquirer.prompt(
    [
        {
            name: "user",
            message: chalk.bgBlue.white("Input the Number of Kilometers traveled = "),
            type: "number"
        }
    ]
);

let traveled = input.user;

if (traveled > 5) {
    fair = 150;
    let y = traveled - 5;
    for (let i = 0; i < y; i++) {
        fair += 25;
    }
} else if (traveled == 5) {
    fair += 150;
} else {
    for (let i = 0; i < traveled; i++) {
        fair += 30;
    }
}

console.log(chalk.blue(`Initial fair = ${fair}rs`));
console.log(chalk.green(`--------------------------------------------------------------`));
console.log(chalk.yellow(`Fixed Amount to be added on any bill = 50rs`));
console.log(chalk.green(`--------------------------------------------------------------`));
console.log(chalk.red(`Final fair = ${fair + 50}rs`));
console.log(chalk.green(`--------------------------------------------------------------`));