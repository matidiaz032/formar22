const db = require('../database/models');

module.exports = {
   list: (req,res) => {
      db.Movie.findAll()
      .then(movies => res.send(movies))
   }
}