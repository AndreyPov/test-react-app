import React from 'react';

const ToDoListItem = ({item, important}: {item: string, important: boolean}) => {
  const style = {
    color: important ? 'tomato' : 'black'
  }
  return (
    <span style={style}>{item}</span>
  )
}

export default ToDoListItem
