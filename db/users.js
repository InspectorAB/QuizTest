const { v4: uuid } = require("uuid");
const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017";

const dbName = "Users";

const client = new MongoClient(uri);

async function connectToMongoDB(){
    try{
        await client.connect();
        console.log("connected");

        const db = client.db(dbName);

        return db;
    }catch(error){
        console.error("Error connecting to MongoDB:",error);
        throw error;
    }
}

async function getUserData(){
    try{
        const db = await connectToMongoDB();

        const collection = db.collection("Users");

        const userData = await collection.find().toArray();

        if(userData.length === 0){
            await collection.insertMany([
                {
                    id: uuid(),
                    username: "aditya",
                    password: "123456789",
                    emailId: "ab@gmail.com",
                },
                {
                    id: uuid(),
                    username: "bhaskar",
                    password: "987654321",
                    emailId: "ba@gmail.com",
                },
            ]);
        }

        return JSON.stringify(userData);
    }catch(error){
        console.error("error retrieiving");
        throw error;
    }
}

const userdata = {
    "users": [
        {
            id: uuid(),
            username: "aditya",
            password: "123456789",
            emailId: "ab@gmail.com",
        },
        {
            id: uuid(),
            username: "bhaskar",
            password: "987654321",
            emailId: "ba@gmail.com",
        },
    ]
}

module.exports = getUserData;