module.exports = (app) => {
    // testing for connection
    app.post('/register', (req, res) => { // sends json object
        res.send({
            message: 'Hello ${req.body.email}! itworks'
        })
    })
} 