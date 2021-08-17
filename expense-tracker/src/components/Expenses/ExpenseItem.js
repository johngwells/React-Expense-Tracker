import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem({date, title, amount}) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date}/>
      <div>
        <h2 className='expense-item__description'>{title}</h2>
      </div>
      <div className='expense-item__price'>${amount}</div>
    </Card>
  );
}

export default ExpenseItem;
