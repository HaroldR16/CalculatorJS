const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname,"/views"));
app.set('view engine','ejs');

app.use(require('./routes/routes.js'));

app.listen(3000, (req, res)=>{
    console.log('Connected');
});