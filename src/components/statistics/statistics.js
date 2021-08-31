import './statistics.css';
import PropTypes from 'prop-types';

function Statistics({ stats }) {
  return (
    <ul className="Statistics__list">
      {stats.map(data => (
        <li className="Statistics__item" key={data.id}>
          <span className="Statistics__label">{data.label}</span>
          <span className="Statistics__percentage">{data.percentage} %</span>
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
