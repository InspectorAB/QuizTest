const express = require("express");
const quizRouter = express.Router();
const quizzes = require('../db/quizzes');


quizRouter.route("/")
.get((req,res) =>{
    // when we send some data we also send it as a json
    res.json(quizzes.data)
});

module.exports = quizRouter;