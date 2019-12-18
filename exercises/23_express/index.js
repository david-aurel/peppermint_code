const express = require('express'),
    app = express();

// middleware function that grabs user input, parses it and puts it into a js object
app.use(
    express.urlencoded({
        extended: false
    })
);

// listens for a get request to the '/' slash route
app.get('/', (req, res) => {
    console.log(`GET request to '/' happened!`);
    res.send(`<h1>Express Demo</h1>`);
});

// sending a file
app.get('/about', (req, res) => {
    console.log(`GET request to '/about' happened`);
    res.sendFile(__dirname + '/index.html');
});

// dynamic route
app.get('/about/:name', (req, res) => {
    console.log(`GET request to '/about/:name' happened`);
    console.log(`req.params:`, req.params);

    res.send(
        `<p>The word you entered in the url was <strong>${req.params.name}</strong>.</p>`
    );
});

app.get('/add-cute-animal', (req, res) => {
    console.log(`GET request to '/add-cute-animal' happened`);
    res.send(`<form method='POST'>
                <input type='text' name='animal' placeholder='animal' autocomplete=
                'off'>
                <input type='number' name='score' placeholder='score' autocomplete=
                'off'>
                <button>Go</button>
            </form>`);
});

// rew.body gives us access to the user input - in order to see it we need to put the middleware function express.urlencoded on top
app.post('/add-cute-animal', (req, res) => {
    console.log(`POST Request to '/add-cute-animal' happened`);
    console.log(`req.body:`, req.body);
    res.send(
        `<p>The animal is <strong>${req.body.animal}</strong> and it's score is <strong>${req.body.score}</strong>.`
    );
});

app.listen(8080, () => console.log(`my first express server is running!`));
