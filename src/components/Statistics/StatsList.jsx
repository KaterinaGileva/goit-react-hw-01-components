import {Statistics} from './Stat';
import PropTypes from 'prop-types';
//import {css} from './StatsList.module';

export const StatsList = ({ stats }) => {
    return ( 
    <ul /*className={css.statsList}*/>
      {stats.map(({ id, label, percentage }) => (
        <li key={id}>
        <Statistics 
          label={label}
          percentage={percentage}
        />
        </li>
        ))}
    </ul>
 );
}

StatsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.exact({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  }),
  ),
};