const { v4: uuid } = require("uuid");

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

module.exports = userdata;