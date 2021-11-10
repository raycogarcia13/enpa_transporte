const Router = require('express')
const router = Router();

const {init} = require('../controllers/configController')

router.get('/', (req,res)=>{
    res.send("Welcome to Aisco API version: 1 (v1)")
})

router.get('/config', init)

module.exports =  router;

