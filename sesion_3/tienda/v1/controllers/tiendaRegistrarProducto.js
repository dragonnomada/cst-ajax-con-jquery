let uiRegistrarProducto = null

window.tiendaRegistrarProducto = {

    async initialize() {

        const html = await $.ajax("views/tiendaRegistrarProducto.html")

        uiRegistrarProducto = $($.parseHTML(html)).appendTo("#tienda-tab-2")

        uiRegistrarProducto.find("#tienda-registrar-boton").click(async function () {
            const codigoBarras = $("#registrar-codigo-barras").val()
            const nombre = $("#registrar-nombre").val()
            const precio = Number($("#registrar-precio").val()) || 0
            const existencias = Number($("#registrar-existencias").val()) || 0

            await tiendaStore.addProducto(codigoBarras, nombre, precio, existencias)

            await tiendaSeleccionarProducto.buscarProductos()
        })

    }

}