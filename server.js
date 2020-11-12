const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`
mongoose.connect(
    uri, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
        })

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDb connection made')
})


const usersRouter = require('./routes/employee')

app.use('/employees', usersRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}


app.listen(port, () => {
    console.log(`server running on ${port}`)
})