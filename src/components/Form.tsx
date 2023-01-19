import React, { useRef, useEffect } from 'react'
import { useTodos } from '../contexts/TodosContext'


export function Form() {

  const form = useRef<HTMLFormElement>(null)
  const input = useRef<HTMLInputElement>(null)
  const { addTodo } = useTodos()

  const addBtnHandler = () => {
    if (input.current) {
      addTodo(input.current.value)
      input.current.value = ''
    }
  }
  
  useEffect(() => {
    form.current?.addEventListener("submit", (e) => {
      e.preventDefault()
    })
  })

  return (
    <form className="add-todo" ref={form}>
      <input className="add-todo__input" ref={input} type="text" placeholder='What ToDo would you like to add'/>
      <button className='add-todo__btn _hover' type="submit" onClick={() => addBtnHandler()}>Add</button>
    </form>
  )
}