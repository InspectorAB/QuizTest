const express = require('express');
const quizzes = require('./db/quizzes');
const cors = require('cors');
const quizRouter = require("./router/quiz.router");
const userdata = require('./db/users');
const loginRouter = require('./controllers/authController');
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");

const app = express();

const port = 3000
app.use(cors());
app.use(express.json());

app.get('/',(req,res) =>{
    res.send('Hello Borld!')
})

app.use("/auth/login", loginRouter);
//app.use("/auth/signup", signupRouter);
app.use("/quiz",quizRouter);

//https://difficult-pear-dragonfly.cyclic.app/quiz
// dont need this now, routing through a quizRouter
// app.get("/quiz",(req,res) =>{
//     res.send(quizzes.data)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})