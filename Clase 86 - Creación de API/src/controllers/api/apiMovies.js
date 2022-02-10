const db = require('../../database/models');

const getUrl = req => `${req.protocol}://${req.get('host')}${req.originalUrl}`;

module.exports = {
   getAll: (req, res) => {
      db.Movie.findAll({
         include: [
            { association: 'genres' },
            { association: 'actors' }
         ]
      })
   },
   getOne: (req, res) => {
      
   },
   add: (req, res) => {
      
   },
   update: (req, res) => {
      
   },
   delete: (req, res) => {
      
   }
}