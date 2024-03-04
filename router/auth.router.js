const express = require('express');

const loginHandler = require("../controllers/authController");

const loginRouter = express.Router();
const signupRouter = express.Router();

// loginRouter.route("/")
//     .post(loginHandler)

loginRouter.post("/", (req, res) => {
    const { username, password } = req.body;
    const isUserVerified = userdata.data.some(user => user.username === username && user.password === password);
    if (isUserVerified) {
        const token = jwt.sign({ id: username }, process.env.SECRET_TOKEN);
        res.json({ username, token, message: "User Verified" });
    } else {
        res.status(401).json({ message: "Invalid Credentials" });
    }
});

// signupRouter.route("/")
//     .post(signupHandler)

module.exports = { loginRouter };