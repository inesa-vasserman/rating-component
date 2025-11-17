import PropTypes from 'prop-types';
import './styles/ResultComponent.css';

export default function ResultComponent({ ratingRes }) {
  return (
    <div className="result-component">
      <p>
        We recieved
        {' '}
        {Object.keys(ratingRes).find(k => ratingRes[k] === true)}
        {' '}
        as your feedback. Thank you
      </p>
    </div>
  );
}

ResultComponent.propTypes = {
  ratingRes: PropTypes.object.isRequired,
};
