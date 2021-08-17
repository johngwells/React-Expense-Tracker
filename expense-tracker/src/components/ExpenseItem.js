import './ExpenseItem.css';

function ExpenseItem({date, title, amount}) {
  return (
    <div className='expense-item'>
      <div>{date}</div>
      <div>
        <h2 className='expense-item__description'>{title}</h2>
      </div>
      <div className='expense-item__price'>${amount}</div>
    </div>
  );
}

export default ExpenseItem;
