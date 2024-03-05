const express = require('express');
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");

const userdata = require("../db/users");

const getUserData = require("../db/users");



const signupHandler = (req, res) => {
    const { username, password } = req.body;
    //Duplicate user
    const isUserPresent = userdata.users.some(user => user.username === username);
    if (isUserPresent){
        res.status(422).json({ message: "User Already Exists"})
    }else{
        const id = uuid();
        const newUser = { id, username, password };
        userdata.users = [...userdata.users, newUser];
        const token = jwt.sign({ id: username }, process.env.SECRET_TOKEN);
        res.json({ message: `Success - Created new user --> ${username}::${token}`})
    }
}

// const loginHandler = (req, res) => {
//     const { username, password } = req.body;
//         const isUserVerified = userdata.users.some(user => user.username === username && user.password === password);
//         if(isUserVerified){
//             const token = jwt.sign({id: username}, process.env.SECRET_TOKEN)
//             res.json({username, token, message: "User Verfied"})
//         }else{
//             res.status(401).json({message: "Invalid Credentials"})
//         }
// }


const loginHandler = async(req,res) =>{
    try{
        const{username,password} = req.body;

        const userData = await getUserData();

        const isUserVerified = userData.some(user => user.username === username && user.password === password);

        if(isUserVerified){
            const token = jwt.token({id:username},process.env.SECRET_TOKEN);
            res.json({username,token,message:"User Verifed Using MongoDB"});
        }else{
            res.status(401).json({message: "Invalid credentails Using Mongo DB"});
        }
        
    }catch(error){
        console.error("Error in loginhandler");
        res.status(500).json({message: "Internal server error", error:error.message});
    }
}

module.exports = { loginHandler, signupHandler };;