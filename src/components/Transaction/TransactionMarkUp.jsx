import css from './TransactionTable.module.css';
import PropTypes from 'prop-types';

export const TransactionMarkUp = ({ type, amount, currency } ) => {
     return ( 
        <tr>
          <td className={css.tdType}>{type}</td>
          <td className={css.tdAmount}>{amount}</td>
          <td className={css.tdCurrency} >{currency}</td>  
        </tr>
 );
}

TransactionMarkUp.propTypes = {
  
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,

 };
