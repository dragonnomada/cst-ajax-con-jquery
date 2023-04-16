let list = null

window.listTodosUI = {

    async initialize() {
        const html = await $.ajax("views/listTodos.html")

        list = $($.parseHTML(html)).appendTo("#app")

        await this.updateTodos()
    },

    async updateTodos() {
        const self = this

        await new Promise(resolve => {
            list.find(".todo-item").fadeOut(200, function () {
                this.remove()
            })

            setTimeout(resolve, 200)
        })
        for (let todo of todoStore.getTodos()) {
            const itemTodoHTML = await $.ajax("views/itemTodo.html")
            const todoItem = $($.parseHTML(itemTodoHTML)).appendTo(list)
            todoItem.find("[data-rel='id']").text(`[${`000${todo.id}`.slice(-3)}]`)
            todoItem.find("[data-rel='titulo']").text(todo.titulo)
            todoItem.find("[data-rel='creado']").text(todo.creado)
            todoItem.find("[data-rel='actualizado']").text(todo.actualizado || "SIN ACTUALIZAR")
            todoItem.addClass(todo.completado ? 'completado' : 'no-completado')

            console.log(todo)

            todoItem.find("[data-rel='completado']")
                .attr("checked", todo.completado)
                .on('change', async function () {
                console.log(todo.id, this.checked)
                await todoStore.updateTodoCompletado(todo.id, this.checked)
                await self.updateTodos()
            })
        }
    }

}