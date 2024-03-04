const express = require('express');
const quizzes = require('./db/quizzes');

const app = express();

const port = 3000

app.get('/',(req,res) =>{
    res.send('Hello Borld!')
})

app.get("/quiz",(req,res) =>{
    res.send(quizzes)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})