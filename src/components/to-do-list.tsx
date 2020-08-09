import React from 'react';
import ToDoListItem from './to-do-list-item'

const ToDoList = () => {
  const items = ['Learn React', 'Build Awesome App']
  return (
    <ul>
      <li><ToDoListItem item={items[0]} important/></li>
      <li><ToDoListItem item={items[1]} important={false}/></li>
    </ul>
  )
}

export default ToDoList
