const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
// const cors = require('cors')

const port = process.env.PORT || 8080

// routers

const UserRouter = require('./routers/user')


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger('dev'))
// app.use(cors())


app.get('/', (req, res) => {
    res.json({ message: "Затычка"})
})

app.use('/api/users', require('./routers/user'))



app.listen(port, (err) => {
    if(err)
        throw err
    console.log(`Server listening on port ${port}`)
})