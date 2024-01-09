import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todos/todoSlice'

export default function Todo() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (

    <div>Todo
      {
        todos.map(todo => (
          <div key={todo.id}>
            <span>
              <p> {todo.text} </p>
              <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
            </span>
          </div>
        ))
      }
    </div>


  )
}
