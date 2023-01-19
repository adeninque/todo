import React, { useContext, useEffect, useState } from 'react'
import { deleteTodo, getTodos, newTodo } from '../assets/todos'
import { ITodo } from '../models'


interface TodosProviderProps {
  children: React.ReactNode
}

interface ITodosContext {
  removeTodo: (id: number) => void
  addTodo: (text: string) => void
  todos: ITodo[]
}

const TodosContext = React.createContext<ITodosContext>({removeTodo: () => {}, addTodo: () => {}, todos: []})

export const useTodos = () => {
  return useContext(TodosContext)
}

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState(() => getTodos().data)

  const removeTodo = (id: number) =>{
    deleteTodo(id)
    setTodos(getTodos().data)
  }

  const addTodo = (text: string) => {
    newTodo(text)
    setTodos(getTodos().data)
  }

  useEffect(() => {
  })

  return (
    <TodosContext.Provider value={{removeTodo, todos: todos, addTodo: addTodo}}>
      { children }
    </TodosContext.Provider>
  )
}