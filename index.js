// import inquirer from "inquirer";
// let todoList: string[] = [];
// async function RepeatFlow() {
//   const answer = await inquirer.prompt([
//     {
//       name: "repeat",
//       type: "list",
//       choices: ["Yes", "No"],
//       message: "Do you want to another Operation",
//     },
//   ]);
//   return answer.repeat === "YES" ? true : false;
// }
// async function TodoList() {
//   let startAgain = true;
//   do {
//     const answer: { option: string } = await inquirer.prompt([
//       {
//         name: "optioms",
//         type: "list",
//         choices: ["Add Item", "Display", "Remove Items"],
//         message: "What you want to do ?",
//       },
//     ]);
//     if (answer.option === "Add Items") {
//       const item = await inquirer.prompt([
//         {
//           name: "newitem",
//           type: "input",
//           message: "Enter new Item",
//         },
//       ]);
//       todoList.push(item);
//       startAgain = await RepeatFlow();
//     } else if (answer.option === "Display") {
//       if (todoList.length == 0) {
//         console.log("Your List is already empty");
//       }
//       todoList.forEach((element) => console.log(element));
//       startAgain = await RepeatFlow();
//     } else if (answer.option === "Remove Items") {
//       if (todoList.length == 0) {
//         console.log("Your List is already empty");
//       }
//       const removeItems: { remove: string } = await inquirer.prompt([
//         {
//           name: "Remove",
//           type: "input",
//           message: "Which item you want to remove",
//         },
//       ]);
//       todoList.pop();
//     }
//   } while (startAgain !== false);
// }
// TodoList();
const doSomething = (cb) => {
    console.log("do some");
    cb();
};
const doSomethin2g = () => {
    console.log("do some");
};
doSomething(doSomethin2g);
export {};
