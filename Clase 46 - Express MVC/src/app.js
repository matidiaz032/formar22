let express = require('express')
let app = express()
const PORT = 3000

/* Enrutadores */
let indexRouter = require('./routes/indexRouter')
let marcasRouter = require('./routes/marcasRouter')
let sucursalesRouter = require('./routes/sucursalesRouter')
let autosRouter = require('./routes/autosRouter')

/* Middlewares de rutas */
app.use('/', indexRouter)
app.use('/marcas', marcasRouter)
app.use('/sucursales', sucursalesRouter)
app.use('/autos', autosRouter)


app.listen(PORT, () => console.log("Servidor levantado"))
