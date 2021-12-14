const express = require('express');
const app = express();
// settings
console.log(process.env.PORT)
app.set('port',process.env.PORT || 3000);

// middlewares
app.use(express.json());

// routes
// base
app.use('/api/v1',require('./routes/base'));
// nomencaldores
app.use('/api/v1/nomencladores',require('./routes/nomencladores'));
// colicitudes
app.use('/api/v1',require('./routes/solicitud'));

// auth
app.use('/api/v1',require('./routes/auth'));

// error middleware
const errorMiddleware = require('./middlewares/errors')
app.use(errorMiddleware)

module.exports =  app;