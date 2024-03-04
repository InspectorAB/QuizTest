const {v4:uuid} = require("uuid");

const quizzes = {
    "data":[
        {
            id:uuid(),
            category:"marvel",
            title:"Marvel",
            description:"Lmao Lmao",

            quiz:[
                {
                    id:uuid(),
                    question:"Black Panther who",
                    options:[
                        {
                            id:uuid(),
                            option:"Wakanda",isCorrect:true
                        },
                        {
                            id:uuid(),
                            option:"Not Wakanda",isCorrect:false
                        },
                        {
                            id:uuid(),
                            option:"Nope Wakanda",isCorrect:false
                        },
                        {
                            id:uuid(),
                            option:"Cant be Wakanda",isCorrect:false
                        }
                    ]
                }
            ],
            
        },
        {
            id:uuid(),
            question:"Captain America who",
            options:[
                {
                    id:uuid(),
                    option:"Josh",isCorrect:false
                },
                {
                    id:uuid(),
                    option:"Steve ",isCorrect:true
                },
                {
                    id:uuid(),
                    option:"Not Steve",isCorrect:false
                },
                {
                    id:uuid(),
                    option:"Not hulk",isCorrect:false
                }
            ]
        }
    ]
}

module.exports = quizzes;