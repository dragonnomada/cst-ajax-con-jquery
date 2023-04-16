function cargarTablaFrutas(frutas, parent) {
    $.ajax({
        url: "mvc/vistas/tablaFrutas.html",
        success(html) {
            const tabla = $(html)

            frutas.forEach(function (fruta) {
                tabla.find("tbody").append($(`
                    <tr>
                        <td>${fruta.nombre}</td>
                        <td>${fruta.precio}</td>
                    </tr>
                `))
            })

            parent.append(tabla)
        }
    })
}

function recuperarFrutas(parent) {
    $.ajax({
        url: "mvc/datos/frutas.json",
        success(respuesta) {
            cargarTablaFrutas(respuesta.frutas, parent)
        }
    })
}