const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let lists = ['Buy Food', 'Cook Food', 'Eat Food', 'Sleep'];

app.get('/', (req, res) => { 
    let today = date.getDate();
    res.render('list', {day: today, newListItems: lists});      
});

app.post('/', (req, res) => {
    let item = req.body.newItem;
    lists.push(item);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});