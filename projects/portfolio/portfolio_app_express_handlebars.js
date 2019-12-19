//require modules
const express = require('express'),
    app = express(),
    hb = require('express-handlebars');

// this configures express to use express handlebars
app.engine('handlebars', hb());
app.set('view engine', 'handlebars');

// serves static files
app.use(express.static(__dirname + '/../'));

app.listen(8080, () => console.log('listening...'));

app.get('/', (req, res) => {
    res.render('home', {
        layout: null,
        cohort: 'Peppermint'
    });
});
