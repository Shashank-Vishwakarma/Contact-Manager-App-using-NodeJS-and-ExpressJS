const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 5001;

app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
})