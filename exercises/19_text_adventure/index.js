const readline = require('readline'),
    chalk = require('chalk'),
    italic = chalk.italic;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const conversation = {
    q: 'Is it friday yet? ',
    a: {
        yes: {
            q: 'Great! What are your weekend plans? '
        },
        no: 'Too bad... bye!'
    }
};

function askQuestion(obj) {
    rl.question(italic(obj.q), answer => {
        if (typeof obj.a[answer] === 'object') {
            console.log(italic('awwww...'));
            rl.close();
        } else {
            console.log(`that's not the right answer... try again!`);
            askQuestion(obj);
        }
    });
}

askQuestion(conversation);
