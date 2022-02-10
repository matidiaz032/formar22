let express = require('express')
let router = express.Router()
let controller = require('../controllers/autosController')

/* GET - Home page */
router.get('/', controller.getAutos);
router.get('/:marca', controller.getMarca);
router.get('/:marca/:dato?', controller.getMarcaDato);


module.exports = router