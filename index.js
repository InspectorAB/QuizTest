const express = require('express');
const quizzes = require('./db/quizzes');
const cors = require('cors');
const quizRouter = require("./router/quiz.router");

const app = express();

const port = 3000
app.use(cors());

app.get('/',(req,res) =>{
    res.send('Hello Borld!')
})

app.use("/quiz",quizRouter);


// dont need this now, routing through a quizRouter
// app.get("/quiz",(req,res) =>{
//     res.send(quizzes.data)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})