let db = require('../database')

let controller = {
  getBrands: (req, res) => {
    res.set({'content-type':'text/plain;charset=utf-8'})

    let marcas = []
   
    db.forEach(sucursal => {
       sucursal.autos.forEach(auto => {
           marcas.push(auto.marca)
       })
    });

    let arrayFiltrado = marcas.filter((x, i, a) => a.indexOf(x) == i)
                          //Marca, indice, array -- array.indexOf(marca) == indice
    res.write(`
    Nuestras Marcas: 

    _______________

    `)
    arrayFiltrado.forEach(marca => {
        res.write(`
        ${marca.toUpperCase()}
        `)
    })
    res.end()
  },
  getOneBrand: (req, res) => {
    res.set({'content-type':'text/plain;charset=utf-8'})
    res.write(`
    ****************************
    Bienvenid@s a nuestra página
    ****************************
    Empresa lider en el mercado.

    ____________________________ 
    `)

    let marcaUser = req.params.marca.toLowerCase();

    let autosSucursales = [];

    db.forEach(sucursal => {
        sucursal.autos.forEach(auto => {
            autosSucursales.push(auto);
        })
    })
    
    let autosFiltrados = autosSucursales.filter(auto => auto.marca === marcaUser);

    if (autosFiltrados.length > 0) {
        autosFiltrados.forEach(auto => res.write(`
        Marca: ${auto.marca}
        Modelo: ${auto.modelo}
        Año: ${auto.anio}
        Color: ${auto.color}
        `))
    } else {
        res.write('No hay autos que coincidan con la marca ingresada')
    }

    res.end();
     
  }
}

module.exports = controller
