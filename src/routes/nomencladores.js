const Router = require('express')
const router = Router();

const {department} = require('../controllers/nomencladoreController')

router.get('/departamentos', department)

module.exports =  router;

