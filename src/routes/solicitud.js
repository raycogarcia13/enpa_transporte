const Router = require('express')
const router = Router();

const {store, get} = require('../controllers/solicitudController')

router.post('/solicitud', store)
router.get('/solicitud', get)

module.exports =  router;

