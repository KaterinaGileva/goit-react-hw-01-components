import {TransactionHistory} from './TransactionHistory';
import PropTypes from 'prop-types';
//import {css} from './StatsList.module';

export const TransactionTable = ({ items }) => {
    return ( 
      <table /*className ="transaction-history"*/>
        <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead> 
      {items.map(({ id, type , amount, currency }) => (
       
    <tbody>
        <tr /*className={css.statsList}*/>
        <td key={id}>
        <TransactionHistory 
          type={type}
          amount={amount}
          currency={currency}
        />
        </td>
        </tr>
        </tbody>
    
        ))}
        </table>
 );
}

TransactionTable.propTypes = {
 transactions: PropTypes.arrayOf(PropTypes.exact({
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  }),
  ),
};