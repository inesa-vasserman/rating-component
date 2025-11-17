import { useState } from 'react';
import RatingComponent from './RatingComponent';
import RatingButton from './RatingButton';
import ResultComponent from './ResultComponent';
import HeadingComponent from './HeadingComponent';
import '../src/styles/App.css';

export default function App() {
  const [ratingRes, setRatingRes] = useState({ 1: false, 2: false, 3: false, 4: false, 5: false });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="App app">
      {!submitted
        ? (
            <>
              <HeadingComponent />
              <RatingComponent ratingRes={ratingRes} setRatingRes={setRatingRes} />
              <RatingButton setSubmited={setSubmitted} ratingRes={ratingRes} />
            </>
          )
        : (
            <ResultComponent ratingRes={ratingRes} />
          )}
    </div>
  );
}
