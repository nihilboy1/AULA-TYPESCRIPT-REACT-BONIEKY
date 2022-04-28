import * as React from 'react'
import * as S from './styles/STYLED/index'
import { Item } from './types/item'
import ListItem from './components/ListItem'
import AddArea from './components/AddArea'

function App() {
  const [list, setList] = React.useState<Item[]>([
    { id: 1, name: 'Comprar pão', done: false },
    { id: 2, name: 'Comprar bolo', done: false }
  ])

  function handleAddTask(taskname: string) {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false
    })
    setList(newList)
  }

  // Função feita para tarefinha de casa.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list]
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done
      }
    }
    setList(newList)
  }
  return (
    <div className="container">
      <div className="area">
        <header>Lista de Tarefas</header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => {
          return (
            <ListItem key={index} item={item} onChange={handleTaskChange} />
          )
        })}
      </div>
    </div>
  )
}

export default App
