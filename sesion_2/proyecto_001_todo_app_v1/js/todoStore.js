// TodoStore el contexto lógico

// Definimos las traccionaciones y operaciones lógicas
// Para el manejo local y en la nube (consumo de APIs)

const todoStore = {
    todos: [],
    saved: false,
    sync: false
}

// window.todoStore = todoStore
function todoStoreGetTodos() {
    return todoStore.todos
        .map(todo => ({...todo}))
        .sort((todoA, todoB) => todoB.createdAt.localeCompare(todoA.createdAt))
}

function todoStoreIsSaved() {
    return todoStore.saved
}

function todoStoreIsSync() {
    return todoStore.sync
}

async function todoStoreAddTodo(title) {
    if (!title) {
        throw new Error("No se puede agregar un Todo sin título")
    }

    const todo = {
        id: Math.floor(Math.random() * 1_000_000_000),
        title,
        checked: false,
        createdAt: new Date().toISOString()
    }

    todoStore.todos.push(todo)

    // TODO: Sincronizar el nuevo Todo hacía el servidor

    todoStore.saved = false
    todoStore.sync = false
}

async function todoStoreSaveTodos() {
    const todos_json = JSON.stringify(todoStore.todos) // -> Texto en formato JSON
    localStorage.setItem("todos", todos_json)

    // TODO: Avisar al servidor guardar los Todos

    todoStore.saved = true
}

async function todoStoreLoadTodos() {
    const todos_loaded = JSON.parse(localStorage.getItem("todos") || "[]")

    todoStore.todos.push(...todos_loaded)

    // TODO: Mezclar Todos con los del servidor

    todoStore.todos = todoStore.todos.reduce((uniqueTodos, todo) => {
        if (!uniqueTodos.find(otherTodo => otherTodo.id === todo.id)) {
            uniqueTodos.push(todo)
        }
        return uniqueTodos
    }, [])

    todoStore.sync = true

    await todoStoreSaveTodos()
}