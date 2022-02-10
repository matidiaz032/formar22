let db = require('../database')

let controller = {
    getStores: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(`
        ****************************
        ++++NUESTRAS SUCURSALES+++++
        ****************************
        Empresa lider en el mercado.

        ____________________________
        `)
        db.forEach(sucursal => {
            res.write(`
                ${sucursal.sucursal}
                Teléfono: ${sucursal.telefono}
                Dirección: ${sucursal.direccion}
            `)
        })
       res.end()
    },
    getOneStore: (req, res) => {
        let paramsStore = req.params.sucursal.trim()
        res.set({'content-type':'text/plain;charset=utf-8'})
        let store = db.find(store => {
            return store.sucursal.toLowerCase() === paramsStore.toLowerCase()
        })
        
        if(store !== undefined){
            res.write(`
            ****************************
            -------- ${store.sucursal.toUpperCase()} --------
            ****************************
            ____________________________
            ${store.telefono}
    
            ${store.direccion}
            `)

            res.write(`Cantidad de autos: ${store.autos.length}
            Nuestros autos
            ______________
            `)

            store.autos.forEach(auto => {
                res.write(`
                Marca: ${auto.marca}
                Modelo: ${auto.modelo}
                Año: ${auto.anio}
                `)
            })
        }else{
            res.write(`La sucursal ${req.params.sucursal} no existe`)
        }
        res.end()
    },
}


module.exports = controller
