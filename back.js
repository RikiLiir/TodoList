const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

var cors = require('cors')
app.use(cors())
app.use (express.json())

app.post('/todos', (req, res) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
        console.log(req.body, data)
        if (err) {
            console.log(err)
        } else {
            let users = JSON.parse(data)
            let user = users.find(user => user.username === req.body.username)
            if (user) {
                users[users.indexOf(user)].todos = req.body.todos
                fs.writeFile('users.json', JSON.stringify(users), (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        res.json(user)
                    }
                })
            } else {
                res.send('User not found')
            }
        }
    })
})

  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/login', (req, res) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
        console.log(req.body, data)
        if (err) {
            console.log(err)
        } else {
            let users = JSON.parse(data)
            let user = users.find(user => user.username === req.body.username && user.password === req.body.password)
            if (user) {
                res.json(user)
            } else {
                res.send('User not found')
            }
        }
    })
})