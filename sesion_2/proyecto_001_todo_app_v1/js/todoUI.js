// TodoUI control del TodoStore hacía el TodoUI

// Definimos las operaciones de la interfaz de usuario
// Consumo más genérico del contexto lógico

function todoUIHideStatus() {
    $("#saved-true").hide()
    $("#saved-false").hide()
    $("#sync-true").hide()
    $("#sync-false").hide()
}

function todoUIUpdateStatus() {
    todoUIHideStatus()

    if (todoStoreIsSaved()) {
        $("#saved-true").show()
    } else {
        $("#saved-false").show()
    }

    if (todoStoreIsSync()) {
        $("#sync-true").show()
    } else {
        $("#sync-false").show()
    }
}

function todoUIUpdateTodos() {
    $("#todos").html("")

    todoStoreGetTodos().forEach(todo => {
        $("<div class='todo-item'>").html(`
            <span class="${todo.checked ? 'checked' : 'unchecked'}">${todo.title}</span>
            <span>${todo.createdAt}</span>
        `).appendTo("#todos")
    })
}