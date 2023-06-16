const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.get('/', (req, res) => { 
    const d = new Date();
    let day = d.getDay();
    let dayName = '';
    switch (day) {
        case 0:
            dayName = 'Sunday';
            break;
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        default:
            dayName = 'Unknown';
            break;
    }
     let kindOfDayType = '';

    if (day === 0 || day === 6) {
        kindOfDayType = 'Weekend';
    }
    else {  
        kindOfDayType = 'Weekday';
    }
    res.render('list', {kindOfDay: kindOfDayType, day: dayName});       
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});