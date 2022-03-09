const router = require('express').Router();
const userSchema = require('../models/userSchema');

router.post('/register', (req, res) => {
  const userDetails = new userSchema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
});

module.exports = router;
