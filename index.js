const express = require("express");

const app = express();
const port = process.env.NODE_ENV || 5175;

app.use(express.static('./frontend/dist'));
app.listen(port, () => console.log('App is running on port 5175'));