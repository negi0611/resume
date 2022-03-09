const express = require('express');
const app = express();

//Import Routes
const authRoute = require('./routes/auth');

//Connecting database to server
require('./database/connection');

//Middlewares
app.use(express.json());

//Route Middlewares
app.use('/api/user', authRoute);

app.listen(3000, () => {
  console.log('server is up and running');
});
