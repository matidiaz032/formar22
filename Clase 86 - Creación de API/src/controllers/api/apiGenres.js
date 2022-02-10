const db = require('../../database/models');
const fetch = require('node-fetch');
const axios = require('axios');

module.exports = {
   list: (req, res) => {
      db.Genre.findAll()
      .then(data => {
         res.json({
            meta: {
               status: 200,
               total: data.length,
               url: req.url,
            },
            data
         })
      })
   },
   fetch: (req, res) => {
      let countries = [];
      fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(countries => res.render('countries', {countries}))
   },
   fetch2: (req, res) => {
      axios.get('http://localhost:3001/api/genres')
      .then(result => {
         res.render('genresList', {
            genres: result.data.data
         })
      })


      /* fetch('http://localhost:3001/api/genres')
      .then(response => response.json())
      .then(genres => {
         res.render('genresList', {
            genres: genres.data
         })
      }) */
   },
   detail: (req, res) => {
      db.Genre.findByPk(req.params.id)
      .then(data => {
         res.json({
            meta: {
               status: 200,
               total: data.length,
               url: req.url,
            },
            data
         })
      })
   }
}