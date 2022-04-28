import { useState } from 'react'
import { Item } from '../../src/types/item'
import { LabelComponent } from '../styles/STYLED'

type Props = {
  item: Item
  onChange: (id: number, done: boolean) => void
}

function ListItem({ item, onChange }: Props) {
  return (
    <div className="list_item_container">
      <input
        type="checkbox"
        checked={item.done}
        onChange={e => {
          onChange(item.id, e.target.checked)
        }}
      />
      <LabelComponent done={item.done}>{item.name} - {item.done.toString()}</LabelComponent>
    </div>
  )
}

export default ListItem
