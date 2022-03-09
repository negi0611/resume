const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://Surender:*Epingk2dips.@cluster0.96eo0.mongodb.net/userdetails?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => {
    console.log(err);
  });
