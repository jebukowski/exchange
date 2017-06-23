import React, { PropTypes } from 'react';

const buttonStyle = {
  textAlign: 'center',
  color: 'black',
  borderStyle: 'solid',
  borderColor: 'black',
  backgroundColor: 'white',
};

const Button = ({ clickHandler, children }) => (
  <div>
    <button onClick={clickHandler} style={buttonStyle}>
      {children}
    </button>
  </div>
);

Button.propTypes = {
  clickHandler: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
