import React, { useEffect } from 'react'
import { XLg } from 'react-bootstrap-icons'
import { useTodos } from '../contexts/TodosContext'
import { ErrorMsg } from './ErrorMsg'


export function Todos() {

  const { todos, removeTodo } = useTodos()

  if (todos.length <= 0) return (
    <ErrorMsg msg={"No toDo avialiable"}/>
  )

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="todos__todo todo" key={todo.id}>
          <h1 className="todo__text">{todo.text}</h1>
          <button className="todo__btn" onClick={() => removeTodo(todo.id)}><XLg/></button>
        </div>
      ))}
    </div>
  )
}