function frutaUIUpdateTable() {
    $("#frutas-table tbody").html("")

    frutaStoreGetAll().forEach(fruta => {
        $("<tr>").html(`
            <td>${fruta.name}</td>
            <td>${fruta.price}</td>
            <td>${fruta.quantity}</td>
        `).appendTo("#frutas-table tbody")
    })
}