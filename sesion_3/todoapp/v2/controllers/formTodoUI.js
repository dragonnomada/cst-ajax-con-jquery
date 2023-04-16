let form = null

window.formTodoUI = {

    async initialize() {
        console.log("Recuperando formTodo.html...")

        const html = await $.ajax("views/formTodo.html")

        console.log(html)
        
        form = $($.parseHTML(html)).appendTo("#app")

        console.log(form)

        $(form).find("#todo-add").on("click", async function () {
            // TODO: Recuperar el titulo y agregar el Todo con el todoStore
            // alert("Hola mundo")
            const titulo = form.find("input").val()
           
            await todoStore.createTodo(titulo)

            await listTodosUI.updateTodos()
        })

        console.log("Inicializado formTodo.html")
    }

}