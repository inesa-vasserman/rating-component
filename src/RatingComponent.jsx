import '../src/styles/RatingComponent.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function RatingComponent({ ratingRes, setRatingRes }) {
  const [hoveredKey, setHoveredKey] = useState(null);
  const [selectedKey, setSelectedKey] = useState(null);

  function setValue(receivedKey) {
    const numericKey = Number(receivedKey);
    setSelectedKey(numericKey);

    const newRating = Object.entries(ratingRes).map(([key]) =>
      Number(key) === numericKey ? [key, true] : [key, false],
    );

    setRatingRes(Object.fromEntries(newRating));
  }

  return (
    <div className="rating-component">
      <h3>Select your rating:</h3>

      <ul className="button-group">
        {Object.keys(ratingRes).map((key) => {
          const numericKey = Number(key);
          const isHighlighted = numericKey <= (hoveredKey ?? selectedKey);

          return (
            <li key={key}>
              <button
                aria-label={`Rating number: ${key}`}
                className={`rating-button ${
                  isHighlighted ? 'btn-on-hover' : ''
                } ${ratingRes[key] ? 'selected' : ''}`}
                type="button"
                onMouseEnter={() => setHoveredKey(numericKey)}
                onMouseLeave={() => setHoveredKey(null)}
                onClick={() => setValue(key)}
                onFocus={() => setHoveredKey(numericKey)}
                onBlur={() => setHoveredKey(null)}
              >
                {key}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

RatingComponent.propTypes = {
  ratingRes: PropTypes.object.isRequired,
  setRatingRes: PropTypes.func.isRequired,
};
