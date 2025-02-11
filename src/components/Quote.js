import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getQuote } from './../actions';

const Quote = ({ quote, isFetching, error, dispatch }) => {

  useEffect(() => {
    dispatch(getQuote());
  }, []);

  if (error) {
    return <h3>We got an error: {error} </h3>
  }

  if (isFetching) {
    return <h3>Fetching a quote for you...</h3>
  }

  const handleClick = () => {
    dispatch(getQuote());
  }

  return (
    <div>
      <div className="quote">
        <h2>{quote.quote}</h2>
        <h5>-Taylor Swift</h5>
        <p>Song: {quote.song} / Album: {quote.album}</p>
        {/* <p className="album">Album: {quote.album}</p> */}
      </div>
      <button onClick={handleClick}>Get New Quote</button>
    </div>
  )
};

const mapStateToProps = (state) => {
  console.log(state, 'state')
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};
export default connect(mapStateToProps)(Quote);