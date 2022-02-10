const db = require('../database/models');
const sequelize = db.sequelize;
const { op } = require("sequelize")

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recommended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        res.render('moviesAdd')
    },
    create: function (req, res) {
        
        const {title, rating, awards, release_date, length} = req.body;

            Movies.create({
            id: "",
            title,
            rating,
            awards,
            release_date,
            length
        })
        .then(result => res.redirect('/movies'))
        .catch(err => res.send(err))
    },
    edit: function(req, res) {
        Movies.findByPk(req.params.id)
        .then(movie => res.render('moviesEdit', {
            movie
        }))
        .catch(err => res.send(err))
    },
    update: function (req,res) {

        const {title, rating, awards, release_date, length} = req.body;

        Movies.update({
            title,
            rating,
            awards,
            release_date,
            length
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            if(result){
                res.redirect('/movies')
            }
        })
        .catch(err => res.send(err))
    },
    delete: function (req, res) {
        Movies.findByPk(req.params.id)
        .then(movie => res.render('moviesDelete', {
            movie
        }))
        .catch(err => res.send(err))
    },
    destroy: function (req, res) {
        Movies.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            res.redirect('/movies')
        })
    }

}

module.exports = moviesController;