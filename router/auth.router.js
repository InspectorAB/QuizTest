const express = require('express');

const {loginHandler,signupHandler} = require('../controllers/authController');

const loginRouter = express.Router();
const signupRouter = express.Router();

loginRouter.route("/")
    .post((req, res, next) => {
        // Middleware logic here if needed
        loginHandler(req, res, next); // Call the controller function within the middleware
    });
    
signupRouter.route("/")
.post(signupHandler)

module.exports = {loginRouter,signupRouter};