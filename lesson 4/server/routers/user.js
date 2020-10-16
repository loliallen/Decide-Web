const express = require('express')

const router = express.Router()

var users = [
    {
        id: 1,
        name: "Norm",
        age: 19,
        livingCity: "NY"
    }
]

// get, update, delete, create

// get all users
router.get('/', (req, res) => {
    res.json(users)
})

// create user
router.post('/', (req, res) => {
    // const body = req.body
    // const { body } = req

    const { user } = req.body
    /*
        user {
            name
            age
            livingCity
        }
    */
    user.id = users.length + 1

    users.push(user)

    res.status(200).json({ message: "User created" })
})

// update user
router.put('/:id', (req, res) => {
    const { id } = req.params

    const { updates } = req.body

    /*
        updates {
            name
            age
            livingCity
        }
    */

    const userIndex = users.findIndex(u => u.id == id)
    // states 1 - [0..n], 2 - (-1)

    if (userIndex === -1) {
        return res.status(404).json({ message: `User with id=${id} not found` })
    }

    users[userIndex] = {
        id: users[userIndex].id,
        name: updates.name,
        age: updates.age,
        livingCity: updates.livingCity,
    }

    res.status(200).json({ message: 'ok' })
})

// delete user
router.delete('/:id', (req, res) => {
    const { id } = req.params
    
    const userIndex = users.findIndex(u => u.id == id)
    // states 1 - [0..n], 2 - (-1)

    if (userIndex === -1) {
        return res.status(404).json({ message: `User with id=${id} not found` })
    }

    users.splice(userIndex, 1)

    res.status(200).json({ message: `User with id=${id} successful deleted`})
})




module.exports = router