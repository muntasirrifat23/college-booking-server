const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors());

const collegeData = require('./college.json')

app.get('/college', (req, res)=>{
    res.send(collegeData);
})


app.get('/', (req, res) =>{
    res.send("College Server Site");
})

app.listen(port, ()=>{
    console.log(`Port is: ${port}`);
})