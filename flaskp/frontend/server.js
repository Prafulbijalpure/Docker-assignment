const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/submit', async (req, res) => {
  try {
    await axios.post('http://backend:5000/submit', req.body);
    res.send('Data sent to Flask backend!');
  } catch (error) {
    res.status(500).send('Error connecting to backend');
  }
});

app.listen(3000, () => {
  console.log('Frontend running on http://localhost:3000');
});
