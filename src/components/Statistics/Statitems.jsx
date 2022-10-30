import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statitems = ({ label, percentage }) => {
  return (
    <li className={css.items}>
       <span className={css.label}>{label}</span>
       <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

Statitems.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};