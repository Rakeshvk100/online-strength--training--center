const express = require('express');
const path = require('path');

const app = express();

app.set('views','views');

const MPData = require('./routes/main-page');
const SPData = require('./routes/sub-page');
const MWData = require('./routes/MEN-woMEN');
const PYData = require('./routes/pay-demo');
const TRData = require('./routes/training-demo');
const PMData = require('./routes/paid-men');
const PWData = require('./routes/paid-women');

//app.use(bodyparser.urlencoded({extended: false})); 

app.use(MPData);
app.use(SPData);
app.use(MWData);
app.use(PYData);
app.use(TRData);
app.use(PMData);
app.use(PWData);
app.use(express.static(path.join(__dirname,'public')));

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);