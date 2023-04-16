let pantalla = null

window.tiendaPantallaPrincipal = {

    async initialize() {

        const html = await $.ajax("views/tiendaPantallaPrincipal.html")

        pantalla = $($.parseHTML(html)).appendTo("#app")

        pantalla.find(".tab").click(function () {
            console.log(this)

            pantalla.find(".tab").removeClass("seleccionado")

            $(this).addClass("seleccionado")

            const tabId = $(this).data("tab")

            console.log("Abriendo el tab:", tabId)

            $(".tab-panel").hide()

            $(`#${tabId}`).show()

        })

    }

}