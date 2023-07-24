const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors());

const collegeData = require('./college.json')
const gpaData = require('./gpa.json')
const subjectData = require('./subject.json')

app.get('/college', (req, res)=>{
    res.send(collegeData);
})

app.get('/gpa', (req, res)=>{
    res.send(gpaData);
})

app.get('/subject', (req, res)=>{
    res.send(subjectData);
})


app.get('/', (req, res) =>{
    res.send("College Server Site");
})

app.listen(port, ()=>{
    console.log(`Port is: ${port}`);
})