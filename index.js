const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  res.render('index')
})
 
app.listen(3000, function(){
    console.log('Server running on port 3000');
});


module.exports = app;
