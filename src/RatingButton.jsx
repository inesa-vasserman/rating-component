import '../src/styles/RatingButton.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function RatingButton({ setSubmited, ratingRes }) {
  const [triedSubmit, setTriedSubmit] = useState(false);

  const handleClick = () => {
    if (Object.values(ratingRes).includes(true)) {
      setSubmited(true);
    }
    else {
      setTriedSubmit(true);
    }
  };

  return (
    <div className="rating-button">

      {triedSubmit && !Object.values(ratingRes).includes(true) && (
        <p id="error-msg" className="error-tooltip" role="alert">
          Please, select one of these options!
        </p>
      )}

      <button
        className="button-to-submit"
        type="button"
        onClick={handleClick}
        aria-describedby={triedSubmit ? 'error-msg' : undefined}
      >
        Submit Feedback
      </button>

    </div>
  );
}

RatingButton.propTypes = {
  setSubmited: PropTypes.func.isRequired,
  ratingRes: PropTypes.object.isRequired,
};
