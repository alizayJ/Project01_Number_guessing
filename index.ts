#! /usr/bin/env node
import inquirer from "inquirer";
let random_number = Math.floor(Math.random() * 10 + 1);
let answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number between 1 to 10: ",
    },
]);
if (answers.userGuessedNumber === random_number) {
    console.log("Congrats! you guessed it right");
}
else {
    console.log(`Try again! it was ${random_number}`);
}