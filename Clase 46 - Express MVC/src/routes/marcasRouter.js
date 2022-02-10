let express = require('express')
let router = express.Router()
let controller = require('../controllers/marcasController')

router.get('/', controller.getBrands)
router.get('/:marca', controller.getOneBrand)


module.exports = router
