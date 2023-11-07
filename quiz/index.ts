import inquirer from "inquirer";
import chalk from "chalk";
import fetch from "node-fetch";

const apiLink: string = "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple";

let fetchData = async (data: string) => {
    try {
        let fetchQuiz: any = await fetch(data);
        let res = await fetchQuiz.json();
        return res.results;
    } catch (error) {
        console.error("Error fetching quiz data: " + error);
        return [];
    }
}

let startQuiz = async () => {
    let score: number = 0;

    // User name
    let nameUser = await inquirer.prompt({
        name: "fname",
        type: "input",
        message: "What is your name? "
    })

    let data = await fetchData(apiLink);

    if (data.length === 0) {
        console.error("No quiz data available. Exiting.");
        return;
    }

    for (let i = 0; i < 5; i++) {
        if (!data[i]) {
            console.error("Invalid data for question " + (i + 1));
            continue;
        }

        let answers = [...data[i].incorrect_answers, data[i].correct_answer];

        let ans = await inquirer.prompt({
            type: "list",
            name: "quiz",
            message: data[i].question,
            choices: answers.map((val: any) => val),
        });

        if (ans.quiz == data[i].correct_answer) {
            ++score;
            console.log(chalk.bold.italic.blue("Correct Answer!"));
        } else {
            console.log(chalk.bold.red("Wrong Answer!"));

            console.log(chalk.green.italic(`Correct answer is ${data[i].correct_answer}`));

        }
    }
    console.log(`Dear ${chalk.green.bold(nameUser.fname)}, your score is ${chalk.red.bold(score)} out of ${chalk.yellowBright("5")}`);
};

startQuiz()
    .catch((error) => {
        console.error("An error occurred: " + error);
    });
