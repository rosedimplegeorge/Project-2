require('dotenv').config()
const mongoose = require('mongoose')

const User = require('../models/userModel')

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection

db.on('open',() => {
    console.log('Successfully Connected to the DB')
})
db.on('error',(error) => {
    console.log(error)
})

const bejoy = new User({
    userName : 'Bejoy',
    email : 'bejoy@gmail.com',
    yrs_Of_Exp : 7,
    techStacks :[{
        title : 'Java',
        description :'Java 8' ,
        expertise : 3,
        resources : [
            {
            id: 1,
            description :'javabrains.io'
            },
            {
            id: 2,
            description :'udemy.com' 
            }
        ]
    },
    {
        title : 'Python',
        description :'Python Programming' ,
        expertise : 4,
        resources : [
            {
            id: 1,
            description :'udacity.com'
            }
        ]
    }
    ]
})

const rose = new User({
    userName : 'Rose',
    email : 'rose@gmail.com',
    yrs_Of_Exp : 3,
    techStacks :[{
        title : 'Java',
        description :'Java Script' ,
        expertise : 4,
        resources : [
            {
            id: 1,
            description :'javabrains.io'
            },
            {
            id: 2,
            description :'generalassemb.ly' 
            }
        ]
    },
    {
        title : 'Data Base',
        description :'MongoDB' ,
        expertise : 1,
        resources : [
            {
            id: 1,
            description :'udacity.com'
            }
        ]
    }
    ]
})

const ethan = new User({
    userName : 'Ethan',
    email : 'ethan@gmail.com',
    yrs_Of_Exp : 0,
    techStacks :[{
        title : 'Coding',
        description :'HTML' ,
        expertise : 1,
        resources : [
            {
            id: 1,
            description :'school.co'
            },
            {
            id: 2,
            description :'udemy.com' 
            }
        ]
    },
    {
        title : 'games',
        description :'video games' ,
        expertise : 4,
        resources : [
            {
            id: 1,
            description :'ipad.com'
            }
        ]
    }
    ]
})

User.remove().then(() => {
    return User.insertMany([bejoy,rose,ethan])
}).then(() => {
    console.log('Saved User Successfully')
    db.close()
}).catch((error) => {
    console.log(error)
    db.close()
})
