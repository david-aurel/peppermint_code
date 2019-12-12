const readline = require('readline'),
    chalk = require('chalk');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let color = chalk.italic;

const story = {
    q: 'Welcome to The Land Of Wizards! Would you like to play? [yes/no] ',
    a: {
        yes: {
            q:
                'You are alone in a dark forest and facing a fork in the road. Which direction do you turn? [left/ right] ',
            a: {
                left: {
                    q:
                        "There's a scary wizard! He asks you a tough question. What's 1+1? ",
                    a: {
                        '2': 'congratulations!'
                    }
                },
                right: 'This was not the right choice. Goodbye!'
            }
        },
        no: 'Alright then. Enjoy your day!'
    }
};

function askQuestion(obj) {
    rl.question(color(obj.q), answer => {
        if (typeof obj.a[answer] == 'object') {
            obj = obj.a[answer];

            rl.question(color(obj.q), answer => {
                if (typeof obj.a[answer] == 'object') {
                    obj = obj.a[answer];

                    rl.question(color(obj.q), answer => {
                        if (obj.a[answer]) {
                            console.log(obj.a[answer]);
                            rl.close();
                        } else {
                            console.log(obj.a.yes.a['right']);
                            rl.close();
                        }
                    });
                } else {
                    console.log(obj.a['right']);
                    rl.close();
                }
            });
        } else {
            console.log(obj.a['no']);
            rl.close();
        }
    });
}

askQuestion(story);
