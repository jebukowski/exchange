import React, { PropTypes } from 'react';

const buttonStyle = {
  textAlign: 'center',
  color: 'black',
  borderStyle: 'solid',
  borderColor: 'black',
  backgroundColor: 'white',
  marginTop: '1em',
};

const Button = ({ clickHandler, isDisabled, children }) => (
  <div>
    <button
      onClick={clickHandler}
      disabled={isDisabled}
      style={buttonStyle}
    >
      {isDisabled ? '...loading' : children}
    </button>
  </div>
);

Button.propTypes = {
  clickHandler: PropTypes.func,
  isDisabled: PropTypes.bool,
  children: PropTypes.string,
};

export default Button;
