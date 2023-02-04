import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  submit = false, color, text, onClick,
}) => (
  <button type={submit ? 'submit' : 'button'} style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
);

Button.defaultProps = {
  submit: false,
  onClick: () => '',
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  submit: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
