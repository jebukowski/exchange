import React from 'react';
import PropTypes from 'prop-types';

const errorStyle = {
  textAlign: 'center',
  color: 'black',
  borderStyle: 'solid',
  borderColor: 'red',
  backgroundColor: 'white',
};

const Error = ({ children }) => (
  <div style={errorStyle}>
    <p>Error: {children}</p>
  </div>
);

Error.propTypes = {
  children: PropTypes.string,
};

export default Error;
