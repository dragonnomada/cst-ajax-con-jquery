const frutaStore = {
    frutas: []
}

function frutaStoreGetAll() {
    return frutaStore.frutas
}

function frutaStoreAdd(name, price, quantity) {
    frutaStore.frutas.push({
        name,
        price,
        quantity
    })
}

function frutaStoreExportCSV() {
    let csv = ""

    for (let fruta of frutaStore.frutas) {
        csv += `${JSON.stringify(fruta.name)},${fruta.price},${fruta.quantity}\n`
    }

    return new Blob([csv], { type: "text/csv" })
}