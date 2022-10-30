import PropTypes from 'prop-types';
import { Statitems } from './Statitems';
import css from './Statistics.module.css';


export const Statistics = ({ stats, title }) => {
    return ( 
      <section className={css.statistics}>   
      <h2 className={css.title}>{title}</h2>  
      <ul className={css.statsList}>

    {stats.map(({ id, label, percentage }) => (
      <Statitems 
      key={id}
      label={label}
      percentage={percentage}
      />
        ))}
    </ul>
    </section>
 );
}

Statistics.propTypes = {
  title:PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.exact({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  }),
  ),
};