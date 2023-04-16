$(document).ready(async function () {
    console.log("Inicializando interfaz...")

    await todoStore.requestTodos()

    await formTodoUI.initialize()
    await listTodosUI.initialize()

})