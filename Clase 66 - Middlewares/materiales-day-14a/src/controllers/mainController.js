let controller = {
    index: (req, res) => {
        res.render('index');
    },
    admin: (req, res) => {
        res.send("Bienvenido/a")
    }
}

module.exports = controller;