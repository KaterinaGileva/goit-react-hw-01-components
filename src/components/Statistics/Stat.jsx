import PropTypes from 'prop-types';

export const Statistics = ({ label, percentage }) => {
  return (
    <section class="statistics">
      
      <ul class="stat-list">
        <li class="item">
          <span class="label">{label}</span>
          <span class="percentage">{percentage}</span>
        </li>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};