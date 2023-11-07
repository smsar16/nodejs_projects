#!/usr/bin/env node

import inquirer from "inquirer";

interface ansType{
    userID:string,
    userPin:number,
    accountType:string,
    transType:string,
    amount:number
};

type User = {
    userID: string,
    userPin: number
};

let users: User[] = [
    {
        userID:"abc",
        userPin:1234
    },
    {
        userID:"def",
        userPin:5678
    },
    {
        userID:"ghi",
        userPin:9101
    }
];

let balance: number = Math.floor((Math.random()*100000));
let ans1: ansType;
let ans2: ansType;

startLoop();

async function startLoop() {
    await getUserID();
    do{
        await getTransaction();
        var again = await inquirer.prompt([
            {
            type:"list",
            name:"restart",
            choices:["Yes","No"],
            message:"Do you want to continue? "
        }]);
            } while ( 
                (again.restart=="Yes")
            );    
};

async function getUserID() {
    ans1 = await inquirer.prompt([
        {
            type:"input",
            name:"userID",
            message: "Please enter your User ID: "
        },
        {
            type:"number",
            name:"userPin",
            message: "Please enter your PIN: "
        }
    ]);
    await checkUserID(ans1.userID, ans1.userPin);
}

async function checkUserID(userID:string, userPin:number) {
    let condition = false;
    for(let i=0; i<users.length; i++){
        if(userID === users[i].userID && userPin === users[i].userPin){
            condition = true;
            break;
        }
    }
    if(!condition){
        console.log("Invalid user ID or Pin. Try again! ");
        await getUserID();
    }
};

async function getTransaction() {
    ans2 = await inquirer.prompt([
        {
            type:"list",
            name:"accountType",
            choices:["Current","Savings"],
            message:"Please select account type: "
        },
        {
            type:"list",
            name:"transType",
            choices:["Fast Cash","Withdraw"],
            message:"Please select transcation type: "
        },
        {
            type:"list",
            name:"amount",
            choices:[5000, 10000, 15000, 20000, 25000, 30000],
            message:"Please select your amount. Your Current balance is: "+balance,
            when(ans2){
                return ans2.transType == "Fast Cash";
            }
        },
        {
            type:"number",
            name:"amount",
            message:"Please enter your desired amount. Your current balance is: "+balance,
            when(ans2){
            return ans2.transType=="Withdraw"; 
        }
        }
    ])

    if(ans1.userID && ans1.userPin){
        if(ans2.amount<=balance){
            balance -=ans2.amount;
            console.log(`Your current balance is: ${balance}`);
        }else{
            console.log("Insufficient balance. Your balance is "+balance);
        }
    }
}