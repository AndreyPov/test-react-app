import React from 'react'
import ReactDOM from 'react-dom'
import ToDoList from './components/to-do-list'
import SearchPanel from './components/search-panel'
import AppHeader from './components/app-header'

const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <ToDoList/>
    </div>
  )
}

console.log(App)
// const hello = React.createElement('h1',null, 'Hello World!')
console.log('hi there, developer')

ReactDOM.render(App(), document.getElementById('root'))

export {}
