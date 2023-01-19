import { ITodo } from "../models"

interface ITodos {
    currnet_id: number
    data: ITodo[]
} 

function getTodos(): ITodos {
    if (localStorage.getItem('todosData') != null) {
        return JSON.parse(localStorage.getItem('todosData')!) 
    } else {
        localStorage.setItem('todosData', JSON.stringify({currnet_id: 0, data: []}))
        return getTodos()
    }
}

function newTodo(text: string) {
    let todos = getTodos()
    let todo: ITodo = {
        text: text,
        id: todos.currnet_id + 1
    }
    todos.data.push(todo)
    todos.currnet_id++
    localStorage.setItem('todosData', JSON.stringify(todos))
}

function deleteTodo(id: number) {
    let todos: ITodos = getTodos()
    todos.data = todos.data.filter(i => i.id != id)
    localStorage.setItem('todosData', JSON.stringify(todos))
}

export { getTodos, newTodo, deleteTodo }