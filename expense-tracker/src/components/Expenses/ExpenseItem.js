import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem({date, title, amount}) {
  const [newTitle, setTitle] = useState(title);

  const clickHandler = (e) => {
    setTitle('Updated')
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date}/>
      <div>
        <h2 className='expense-item__description'>{newTitle}</h2>
      </div>
      <div className='expense-item__price'>${amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
