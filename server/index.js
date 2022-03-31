//basic imports
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
require('./routes/movies.js')(app);
require('dotenv').config();
const PORT = process.env.PORT || 8080;

//basic configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('starz app');
});

//server status
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
