import React from 'react';
import { Category } from './Category'
import { MoneyForm } from './MoneyForm'
import { MoneyList } from './MoneyList'

const App : React.FC = () => {
  return (
    <div>
      <Category name='123'/>
      <MoneyForm />
      <MoneyList />
    </div>
  )
}

export default App