//require modules
const express = require('express'),
    app = express(),
    hb = require('express-handlebars'),
    projects = require('./data.json');

// this configures express to use express handlebars
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');

// serves static files
app.use(express.static(__dirname + '/../'));
app.use(express.static('/public'));

app.get('/', (req, res) => {
    res.render('home', {
        //if it's called 'main' and in /views, you could leave this out
        //set it to 'layout: null' if you dont want to use a layout
        layout: 'main',
        // sending data to the front (home template)
        projects
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'main',
        emojis: ['🤠', '🤖', '🧞‍♂️', '🧀', '🌮']
    });
});

app.listen(8080, () => console.log('listening...'));
