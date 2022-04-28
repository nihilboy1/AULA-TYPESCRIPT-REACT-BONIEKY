import { useState, KeyboardEvent } from 'react'

type Props = {
  onEnter: (taskname: string) => void
}

function AddArea({ onEnter }: Props) {
  const [inputText, setInputText] = useState('')
  function handleKeyUp(e: KeyboardEvent) {
    if (e.code === 'Enter' && inputText !== '') {
      onEnter(inputText)
      setInputText("")
    }
  }
  return (
    <div className="add_area_box">
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <p>+</p>
    </div>
  )
}

export default AddArea
