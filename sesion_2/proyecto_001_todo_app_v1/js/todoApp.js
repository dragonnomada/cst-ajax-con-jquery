// TodoApp controla el index.js

// Controlamos los elementos finales
// Hacemos el control de eventos de la interfaz de usuario 

$(document).ready(async function () {
    await todoStoreLoadTodos()
    todoUIUpdateTodos()
    todoUIUpdateStatus()
})

$("button#addTodo").click(async function () {
    const title = $("input").val()
    if (!title) {
        alert("Ingresa un título")
        return
    }
    await todoStoreAddTodo(title)
    todoUIUpdateTodos()
    todoUIUpdateStatus()
})

$("button#saveTodos").click(async function () {
    await todoStoreSaveTodos()
    todoUIUpdateTodos()
    todoUIUpdateStatus()
})

$("button#loadTodos").click(async function () {
    await todoStoreLoadTodos()
    todoUIUpdateTodos()
    todoUIUpdateStatus()
})