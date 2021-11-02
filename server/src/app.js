// console.log('hello');


// grabs the dependency from the node_modules folder
const express = require('express') // api for database and website 
const bodyParser = require('body-parser') 
const cors = require('cors') // grabs the package 
const morgan = require('morgan') 
// const {sequelize} = require('./models')
// const config = require('./config/config')

const app = express()
app.use(morgan('combined'))  // tells you what device is using the site
app.use(bodyParser.json()) // allows express api to parse json that comes in
app.use(cors()) // allows client acess, when you want a server to be hosted on a different domain

// require('./passport')

// require('./routes')(app)

// sequelize.sync({force: false})
//   .then(() => {
//     app.listen(config.port)
//     console.log(`Server started on port ${config.port}`)
//   })


// testing for connection
app.post('/register', (req, res) => { // sends json object
    res.send({
        message: 'Hello ${req.body.email}! itworks'
    })
})

app.listen(process.env.PORT || 8081)