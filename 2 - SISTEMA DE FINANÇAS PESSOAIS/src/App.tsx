import * as S from './styles/STYLED/index'
import { Item } from './types/Item'
import { Category } from './types/Category'

import { categories } from './data/categories'
import { items } from './data/items'
import { useState, useEffect } from 'react'

import { filterListByMonth, getCurrentMonth } from './helpers/dataFilter'

import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'

const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0
    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }
    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Financeiro</S.HeaderText>
      </S.Header>
      <S.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        ></InfoArea>
        {/* insert infos */}
        <TableArea list={filteredList} />
      </S.Body>
    </S.Container>
  )
}

export default App
