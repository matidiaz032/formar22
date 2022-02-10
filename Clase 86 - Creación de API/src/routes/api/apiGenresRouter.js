const express = require('express');
const router = express.Router();
const apiGenresController = require('../../controllers/api/apiGenres');

router.get('/api/genres', apiGenresController.list);
router.get('/api/genresFetch', apiGenresController.fetch);
router.get('/api/genresFetch2', apiGenresController.fetch2);
router.get('/api/genres/:id', apiGenresController.detail);


module.exports = router;