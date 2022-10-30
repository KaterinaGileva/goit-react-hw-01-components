import { TransactionMarkUp } from './TransactionMarkUp.jsx';
import PropTypes from 'prop-types';
import css from './TransactionTable.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
     <thead className={css.thead}>
      <tr>
         <th>Type</th>
         <th>Amount</th>
         <th>Currency</th>
      </tr>
     </thead> 
      <tbody >  
       {items.map(({ id, type , amount, currency }) => (
        <TransactionMarkUp 
        key={id}
        type={type}
        amount={amount}
        currency={currency}
        />
        ))
        }
      </tbody>
    </table>
)
}
 
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
 }),
  ),
 };
