const readline = require('readline');
const chalk = require('chalk');

const story = {
    question: `Welcome to your blind date with Lisa!
You enter the cafe and see a woman that matches Lisa's description.
Do you approach her?`,
    answers: {
        yes: {
            question: `You approach her, say hello, and ask her if she is Lisa.
She looks at you and asks if you are ${process.env.USER}.
What do you answer?`,
            answers: {
                yes: chalk.red(`She says, "I'm not Lisa."`),
                no: chalk.red(`She says, "Oh, thank god!"`)
            }
        },
        no: chalk.red(
            'Good choice. She may hate your guts for standing her up, but it probably would not have worked out anyway.'
        )
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

askQuestion(story);

function askQuestion(item) {
    const question = `${chalk.yellow(item.question)} ${chalk.green(
        '[ ' + Object.keys(item.answers).join(' | ') + ' ]'
    )}\n`;
    rl.question(question, function(answer) {
        if (item.answers[answer]) {
            if (typeof item.answers[answer] == 'string') {
                console.log(item.answers[answer]);
                console.log(chalk.bgWhite(chalk.black('GAME OVER')));
                rl.close();
            } else {
                askQuestion(item.answers[answer]);
            }
        } else {
            console.log(
                chalk.magenta(
                    `Please type one of the following answers: ${Object.keys(
                        item.answers
                    ).join(', ')}`
                )
            );
            askQuestion(item);
        }
    });
}
