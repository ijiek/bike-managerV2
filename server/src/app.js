// // -------
// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const cors = require("cors");

// // const path = __dirname + '/app/views/';

// // const app = express();

// // app.use(express.static(path));

// // // set orgin 
// // var corsOptions = {
// //   origin: "http://localhost:8081"
// // };

// // // add body-parser and cors middleware using app.use() method

// // app.use(cors(corsOptions));

// // // parse requests of content-type - application/json
// // app.use(bodyParser.json());

// // // parse requests of content-type - application/x-www-form-urlencoded
// // app.use(bodyParser.urlencoded({ extended: true }));

// // const db = require("./app/models");

// // db.sequelize.sync();
// // // // drop the table if it already exists
// // // db.sequelize.sync({ force: true }).then(() => {
// // //   console.log("Drop and re-sync db.");
// // // });

// // app.get('/', function (req,res) {
// //   res.sendFile(path + "index.html");
// // });

// // require("./app/routes/turorial.routes")(app);

// // // set port, listen for requests
// // const PORT = process.env.PORT || 8080;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}.`);
// // });


// // In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
// // db.sequelize.sync({ force: true }).then(() => {
// //   console.log("Drop and re-sync db.");
// // });

// // console.log('hello');
// module.exports = {
//   HOST: 'localhost',
//   USER: 'root',
//   PASSWORD: 'password',
//   DB: 'bikerace_manager',
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// }

// const path = require('path')

// module.exports = {
//   port: process.env.PORT || 8081,
//   db: {
//     database: process.env.DB_NAME || 'bikerace_manager',
//     user: process.env.DB_USER || 'bikerace_manager',
//     password: process.env.DB_PASS || 'bikerace_manager',
//     options: {
//       dialect: process.env.DIALECT || 'sqlite',
//       host: process.env.HOST || 'localhost',
//       storage: path.resolve(__dirname, '../../bikerace_manager.sql')
//     }
//   },
//   authentication: {
//     jwtSecret: process.env.JWT_SECRET || 'secret'
//   }
// }


// console.log('hello');

// grabs the dependency from the node_modules folder
const express = require('express') // api for database and website 
const bodyParser = require('body-parser')
const cors = require('cors') // grabs the package 
const morgan = require('morgan')
const { sequelize } = require('./models') // sequalize files in models folder
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))  // tells you what device is using the site
app.use(bodyParser.json()) // allows express api to parse json that comes in
app.use(cors()) // allows client acess, when you want a server to be hosted on a different domain


// cut and placed into routes
// app.post('/register', (req, res) => {
//   res.send({
//     message: `Hello ${req.body.email}! your user was regsitered`
//   })
// })

require('./routes')(app)

// { force: false }
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
