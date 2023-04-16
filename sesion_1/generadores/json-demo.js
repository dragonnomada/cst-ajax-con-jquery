const frutas = []

for (let i = 0; i < 10_000; i++) {
    const existencias = Math.floor(Math.random() * 15)
    frutas.push({
        nombre: `Fruta ${i + 1}`,
        precio: Number((Math.random() * 1000 + 2).toFixed(2)),
        peso: Number((Math.random() * 100 + 13).toFixed(2)),
        existencias: existencias,
        hayExistencias: existencias > 0,
        pocasExistencias: existencias < 20
    })
}

const fs = require("fs")

fs.writeFileSync("frutas.json", JSON.stringify(frutas, null, 2), "utf-8")