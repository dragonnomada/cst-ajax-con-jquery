let uiSeleccionarProducto = null

window.tiendaSeleccionarProducto = {

    async initialize() {

        const html = await $.ajax("views/tiendaSeleccionarProducto.html")

        uiSeleccionarProducto = $($.parseHTML(html)).appendTo("#tienda-tab-1")

        uiSeleccionarProducto.find("#tienda-search-button").click(async function () {
            await tiendaSeleccionarProducto.buscarProductos()
        })

        await tiendaSeleccionarProducto.buscarProductos()

    },

    async buscarProductos() {
        const search = $("#tienda-producto-search").val()

        await tiendaStore.filtrarProductos(search)

        await tiendaSeleccionarProducto.actualizarProductosFiltrados()

    },

    async actualizarProductosFiltrados() {

        $("#tienda-productos-list").html("")

        for (let producto of tiendaStore.getProductosFiltrados()) {
            const productoItemHTML = await $.ajax("components/productoItem.html")

            productoItem = $($.parseHTML(productoItemHTML)).appendTo("#tienda-productos-list")

            productoItem.find("[data-rel='producto-nombre']").text(producto.nombre)
            productoItem.find("[data-rel='producto-precio']").text(`$${Number(producto.precio).toFixed(2)}`)
            
            productoItem.find("[data-rel='producto-seleccionar']").click(async function () {
                console.log("Se ha seleccionado el producto", producto)
                await tiendaStore.addProductoCarrito(producto.id)
            })
            
        }

    }

}