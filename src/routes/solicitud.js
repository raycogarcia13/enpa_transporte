const Router = require('express')
const router = Router();

const {store} = require('../controllers/solicitudController')

router.post('/solicitud', store)

module.exports =  router;

