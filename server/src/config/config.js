// // MySQL Code goes here
// const pool = mysql.createPool({
//     connectionLimit : 10, // max number connections to make at once
//     host            : 'localhost',
//     user            : 'root',
//     password        : 'password',
//     database        : 'bikerace_manager'
// });

// // Get all test data
// app.get('', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if(err) throw err
//         console.log('connected as id ' + connection.threadId)
//         connection.query('SELECT * from Competitor', (err, rows) => {
//             connection.release() // return the connection to pool

//             if (!err) {
//                 res.send(rows)
//             } else {
//                 console.log(err)
//             }

//             // if(err) throw err
//             console.log('The data from test table are: \n', rows)
//         })
//     })
// })



// // Listen on enviroment port or 5000
// app.listen(port, () => console.log(`Listening on port ${port}`)) //passes port variable




module.exports = {
    port: 8081
}

const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'bikerace_manager',
    user: process.env.DB_USER || 'bikerace_manager',
    password: process.env.DB_PASS || 'bikerace_manager',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../bikerace_manager.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}

// var mysql = require('mysql')
// var conn = mysql.createConnection({
//   host: 'localhost', // Replace with your host name
//   user: 'root', // Replace with your database username
//   password: 'password', // Replace with your database password
//   database: 'bikerace_manager' // // Replace with your database Name
// })
// conn.connect(function (err) {
//   if (err) throw err
//   console.log('Database is connected successfully !')
// })
// module.exports = conn