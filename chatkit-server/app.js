const express = require('express');
const app = express();
const auth = require('./api/routes/auth');
const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server Started at port ${port}`));