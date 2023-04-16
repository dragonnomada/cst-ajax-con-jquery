$("#fruta-add").click(function () {

    const name = $("#fruta-name").val()
    const price = Number($("#fruta-price").val())
    const quantity = Number($("#fruta-quantity").val())

    frutaStoreAdd(name, price, quantity)

    frutaUIUpdateTable()

})

$("#fruta-export-csv").click(() => {

    const blob = frutaStoreExportCSV()

    console.log({ blob })

    const url = URL.createObjectURL(blob)

    window.open(url, '_blank')

    // const link = $("<a>")
    //     .text("DESCARGAR")
    //     .attr("href", url)
    //     .attr("download", "frutas.csv")
    //     .attr("target", "_blank")
    //     .attr("rel", "nofollow")
    //     .appendTo(".frutas-table-actions")

    // link.click(function () {
    //     link.remove()
    // })
        
    // setTimeout(() => {
    //     console.log("Dando click al link")
    //     link.triggerHandler("click")
    // }, 1000)

})