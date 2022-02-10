let db = require('../database');

let controller = {
    getAutos: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(`
        ****************************
        Bienvenid@s a nuestra página
        ****************************
        Empresa lider en el mercado.

        ____________________________
        Todos nuestros autos: 
        `)
        db.forEach(sucursal => {
            sucursal.autos.forEach(auto => {
                res.write(`
                Marca: ${auto.marca}
                Modelo: ${auto.modelo}
                Año: ${auto.anio}
                Color: ${auto.color}
                `)
            })
        })
       res.end()
    },
    getMarca: (req, res) => {
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
    },
    getMarcaDato: (req, res) => {
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
        
        let autosFiltradosMarca = autosSucursales.filter(auto => auto.marca === marcaUser);

        /* Filtro por dato */
        let datoUser = req.params.dato.toLowerCase();
        let autosFiltradosDato = autosFiltradosMarca.filter(auto => auto.anio === datoUser || auto.color === datoUser); // no

        console.log(autosFiltradosDato);

        if (autosFiltradosMarca.length > 0) {
            autosFiltradosMarca.forEach(auto => res.write(`
            Marca: ${auto.marca}
            Modelo: ${auto.modelo}
            Año: ${auto.anio}
            Color: ${auto.color}
            `))
        } if (autosFiltradosMarca.length > 0 && datoUser.length > 0) {
            autosFiltradosDato.forEach(auto => res.write(`
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

module.exports = controller;