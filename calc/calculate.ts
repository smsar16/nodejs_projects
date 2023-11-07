import inquirer from "inquirer"
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import {add} from './add.js';
import {subtract} from './subtract.js';
import {multiply} from './multiply.js';
import {divide} from './divide.js';

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
let result:number | string;
Question();
async function Question() {
    inquirer.prompt([
        {
            type:"list",
            name:"operator",
            message:"What operation do you want to perform?\n",
            choices:["+ Add","- Subtract","x Multiply", "/ Divide"]
        },
        {
            type:"number",
            name: "num1",
            message:"Enter 1st number: "

        },
        {
            type:"number",
            name: "num2",
            message:"Enter 2nd number: "

        }
    ])
    .then((answers)=>{
       
        switch (answers.operator) {
            case '+ Add':
                console.log("Adding................");
                
                result=add(answers.num1,answers.num2);
                break;
            case '- Subtract':
                console.log("subtracting................");
                result=subtract(answers.num1,answers.num2);
                break;
            case 'x Multiply':
                console.log("multiplying................");
                result=multiply(answers.num1,answers.num2);
                break;
            case '/ Divide':
                console.log("dividing................");
                result=divide(answers.num1,answers.num2);
                break;
        }
        console.log(`Result: ${result}`);
        start_again();
    })
    
};



async function start_again() {
    await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "\n Do you want to continue? y or n: \n"
    })
    .then((again)=>{
    if(again.restart ==='y' || again.restart ==='Y'){
        Question();
    }
})
};

