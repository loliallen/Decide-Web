// обращение к библиотеке
const express = require('express')

// import express from 'express'

const port = 8000;

// объект приложения express
const app = express();

app.use('/static', express.static(__dirname + '/public/'))

// роут гет запроса
app.get('/', (request, response) => { 
    response.sendFile(__dirname + '/public/index.html')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})