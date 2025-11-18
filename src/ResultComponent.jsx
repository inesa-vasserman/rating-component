import PropTypes from 'prop-types';
import './styles/ResultComponent.css';

export default function ResultComponent({ ratingRes }) {
  const selected = Object.keys(ratingRes).find(k => ratingRes[k] === true);

  return (
    <div className="result-component" role="status" aria-live="polite">
      <p>
        We received
        {' '}
        {selected}
        {' '}
        as your feedback. Thank you!
      </p>
    </div>
  );
}

ResultComponent.propTypes = {
  ratingRes: PropTypes.object.isRequired,
};
