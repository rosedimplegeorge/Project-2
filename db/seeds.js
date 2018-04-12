require('dotenv').config
const mongoose = require('mongoose')

const User = require('../models/userModel')

//mongoose.connect(process.env.MONGODB_URI)
mongoose.connect('mongodb://heroku_zzgrxx7p:pfo0tv32gb7fe0vteo55eapq55@ds147480.mlab.com:47480/heroku_zzgrxx7p')

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
    techStack :[{
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

User.remove().then(() => {
    return User.insertMany([bejoy])
}).then(() => {
    console.log('Saved User Successfully')
    db.close()
}).catch((error) => {
    console.log(error)
    db.close()
})
