const express = require('express');
const app = express();
// settings
console.log(process.env.PORT)
app.set('port',process.env.PORT || 3000);

// middlewares
app.use(express.json());

// routes

// error middleware
const errorMiddleware = require('./middlewares/errors')
app.use(errorMiddleware)

module.exports =  app;