const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/userRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://boat:boat1234@ds131137.mlab.com:31137/ooad');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/home', userRouter);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

app.listen(port, function(){
  console.log('start port localhost:'+port);
});