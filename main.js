#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
console.log("\n \t Welcome to Todo-List Application\n");
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todo List?"
        }
    ]);
    todos.push(addTask.todo);
    console.log(`${addTask.todo}  added in your todo list successfully`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more things in your Todo List?",
            default: "false",
        },
    ]);
    condition = addMoreTask.addMore;
}
;
console.log("Todo List: ", todos);
