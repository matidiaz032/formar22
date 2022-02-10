let express = require('express');
let router = express.Router();
let controller = require('../controllers/mainController')
let userAdmin = require('../middlewares/adminUsers')

router.get('/', controller.index);
router.get('/admin', userAdmin, controller.admin);

module.exports = router;