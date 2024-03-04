const express = require('express');
const quizzes = require('./db/quizzes');
const cors = require('cors');
const quizRouter = require("./router/quiz.router");
const userData = require('./db/users');

const app = express();

const port = 3000
app.use(cors());
app.use(express.json());

app.get('/',(req,res) =>{
    res.send('Hello Borld!')
})

app.post("/auth/login",(req,res) =>{
    const {username,password} = req.body;
    console.log({username,password});
})

app.use("/quiz",quizRouter);

//https://difficult-pear-dragonfly.cyclic.app/quiz
// dont need this now, routing through a quizRouter
// app.get("/quiz",(req,res) =>{
//     res.send(quizzes.data)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})