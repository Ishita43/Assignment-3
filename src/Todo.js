import React from 'react';
const Todo = ({ todos })=>{
  const todoList = todos.length ? todos.map(todo=>{
    return (
      <div className='collection-item'>
        <span>{todo.item}</span>
      </div>
    )
  }) : (
    <p> Yay! I don't have anything to do!</p>
  )
  return (
    <div className='todos collection'>
      {todoList}
      </div>
  )
}
export default Todo;
