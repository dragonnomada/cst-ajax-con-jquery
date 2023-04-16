let todos = []

window.todoStore = {
    getTodos() {
        return todos.reverse()
    },
    async requestTodos() {
        console.log("Obteniendo Todos...")
        const response = await $.ajax("api/getTodos.php")
        todos = response
        // $(document).trigger("todosUpdated", [todos])
        console.log("Todos:", todos)
        return todos
    },
    async createTodo(titulo) {
        const formData = new FormData()
        formData.append("titulo", titulo)
        const response = await $.ajax("api/createTodo.php", {
            method: "post",
            data: formData,
            processData: false,
            contentType: false
        })
        todos = response
        // $(document).trigger("todosUpdated", [todos])
        return todos
    }
}