let productos = [
    {
        id: 1,
        codigoBarras: "01234",
        nombre: "Coca Cola",
        precio: 17.5,
        existencias: 10
    },
    {
        id: 2,
        codigoBarras: "03456",
        nombre: "Gansito",
        precio: 20.5,
        existencias: 5
    },
]

let productosFiltrados = []

let carrito = []

window.tiendaStore = {

    getProductos() {
        return productos
    },
    
    getProductosFiltrados() {
        return productosFiltrados
    },

    async addProducto(codigoBarras, nombre, precio, existencias) {
        const maxId = productos.reduce((maxId, producto) => {
            return producto.id > maxId ? producto.id : maxId
        }, 0)

        const producto = {
            id: maxId + 1,
            codigoBarras,
            nombre,
            precio,
            existencias
        }

        productos.push(producto)

        return productos
    },

    async filtrarProductos(search) {
        const regSearch = new RegExp((search || "").split(/[\s\n\t]+/).join("|"), "i")

        console.log("Buscando...", regSearch)

        productosFiltrados = productos.filter(producto => {
            return regSearch.test(producto.codigoBarras) || 
                regSearch.test(producto.nombre)
        })

        console.log(productosFiltrados)

        return productosFiltrados
    },

    async addProductoCarrito(productoId) {
        const productoEnCarrito = carrito.find(producto => producto.id === productoId)

        if (productoEnCarrito) {
            productoEnCarrito.veces += 1
        } else {
            const producto = productos.find(producto => producto.id === productoId)
    
            if (producto) {
    
                carrito.push({
                    ...producto,
                    veces: 1
                })
    
            } else {
                throw new Error(`El producto con id=${productoId} no existe`)
            }
        }

        console.log({ carrito })
    },

}

// TODO: Agregar un quitar del carrito
// TODO: Agregar un obtener del carrito