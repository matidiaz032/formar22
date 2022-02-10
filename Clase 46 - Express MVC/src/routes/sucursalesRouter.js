let express = require('express')
let router = express.Router()
let controller = require('../controllers/sucursalesController.js')

router.get('/', controller.getStores)
router.get('/:sucursal', controller.getOneStore)

module.exports = router
