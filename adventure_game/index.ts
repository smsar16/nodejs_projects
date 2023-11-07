import chalk from "chalk";
import inquirer from "inquirer";



class Player {
    name: string
    fuel:number = 100
    constructor(name:string) {
       
        this.name = name;
    }
    fuel_decrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel
    }

    fuel_increase(){
        this.fuel = 100
    }
}



class Opponent {
    name: string
    fuel:number = 100
    constructor(name:string) {
        this.fuel = 100;
        this.name = name;
    }
    fuel_decrease(){
        let fuel = this.fuel - 25;
        this.fuel = fuel
    }

    fuel_increase(){
        this.fuel = 100
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please enter your name: "
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select your opponent!",
    choices: ["Zombie", "Monster", "Terrorist"]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do{
    // Zombie
    if (opponent.select == "Zombie") {
    
    let ask = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "What do you want to do?",
    choices: ["Attack", "Open the Lock", "Run for your Life!"]
    });

    if (ask.options == "Attack"){
        let num = Math.floor(Math.random()*2);
            if (num > 0){
                p1.fuel_decrease()
                console.log(chalk.bold.bgBlue(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.bgYellowBright(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <=0){
                    console.log(chalk.red.bold.italic.strikethrough("You loose! Better Luck Next Time!"));
                    process.exit();
                }
            };
            if (num <= 0){
                o1.fuel_decrease()
                console.log(chalk.bold.bgBlue(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.bgYellowBright(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <=0){
                    console.log(chalk.red.bold.italic.underline("You win! You gave a good beating to ", `${opponent.select}`,"!"));
                    process.exit();
                }
    }
}
    if (ask.options == "Open the Lock"){
        p1.fuel_increase()
        console.log(chalk.bold.underline(`${p1.name} fuel is ${p1.fuel}`))
        // console.log(chalk.bold.underline(`${o1.name} fuel is ${o1.fuel}`))
    }
    if (ask.options == "Run for your Life!"){
        console.log(chalk.red.bold.italic.strikethrough("You loose! Better Luck Next Time!"));
        
    }

}

// Monster
if (opponent.select == "Monster") {
    
    let ask = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "What do you want to do?",
    choices: ["Attack", "Open the Lock", "Run for your Life!"]
    });

    if (ask.options == "Attack"){
        let num = Math.floor(Math.random()*2);
            if (num > 0){
                p1.fuel_decrease()
                console.log(chalk.bold.bgBlue(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.bgYellowBright(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <=0){
                    console.log(chalk.red.bold.italic.strikethrough("You loose! Better Luck Next Time!"));
                    process.exit();
                }
            };
            if (num <= 0){
                o1.fuel_decrease()
                console.log(chalk.bold.bgBlue(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.bgYellowBright(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <=0){
                    console.log(chalk.red.bold.italic.underline("You win! You gave a good beating to ", `${opponent.select}`,"!"));
                    process.exit();
                }
    }
}
    if (ask.options == "Open the Lock"){
        p1.fuel_increase()
        console.log(chalk.bold.underline(`${p1.name} fuel is ${p1.fuel}`))
        // console.log(chalk.bold.underline(`${o1.name} fuel is ${o1.fuel}`))
    }
    if (ask.options == "Run for your Life!"){
        console.log(chalk.red.bold.italic.strikethrough("You loose! Better Luck Next Time!"));
        
    }

}

// Terrorist
if (opponent.select == "Terrorist") {
    
    let ask = await inquirer.prompt({
    type: "list",
    name: "options",
    message: "What do you want to do?",
    choices: ["Attack", "Open the Lock", "Run for your Life!"]
    });

    if (ask.options == "Attack"){
        let num = Math.floor(Math.random()*2);
            if (num > 0){
                p1.fuel_decrease()
                console.log(chalk.bold.bgBlue(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.bgYellowBright(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <=0){
                    console.log(chalk.red.bold.italic.strikethrough("You loose! Better Luck Next Time!"));
                    process.exit();
                }
            };
            if (num <= 0){
                o1.fuel_decrease()
                console.log(chalk.bold.bgBlue(`${o1.name} fuel is ${o1.fuel}`));
                console.log(chalk.bold.bgYellowBright(`${p1.name} fuel is ${p1.fuel}`));
                if (o1.fuel <=0){
                    console.log(chalk.red.bold.italic.underline("You win! You gave a good beating to ", `${opponent.select}`,"!"));
                    process.exit();
                }
    }
}
    if (ask.options == "Open the Lock"){
        p1.fuel_increase()
        console.log(chalk.bold.underline(`${p1.name} fuel is ${p1.fuel}`))
        // console.log(chalk.bold.underline(`${o1.name} fuel is ${o1.fuel}`))
    }
    if (ask.options == "Run for your Life!"){
        console.log(chalk.red.bold.italic.strikethrough("You loose! Better Luck Next Time!"));
        
    }

}

}
while(true)

