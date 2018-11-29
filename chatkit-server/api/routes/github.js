const express = require('express');
const router = express.Router();
const chatkit = require('../../Config/chatkit');
const User = require('../../models/User');
const axios = require('axios');

//get all repos from the api.
router.get('/repos/all', (req, res) => {
  axios.get(`https://api.github.com/user/repos?${response.data}`)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});


module.exports = router;