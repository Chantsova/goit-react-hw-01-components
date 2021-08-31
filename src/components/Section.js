import PropTypes from 'prop-types';
import '../App.css';

function Section({ title, children }) {
  return (
    <div className="Section">
      {title && <h2 className="Section__title">{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
