import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
  let classList = props.classList || '';
  let className = classList + ' button button--' + props.variant + ' button--' + props.color;

  return ( 
  <button className={className} onClick={props.onClick}>
    {props.children}
  </button> );
}

Button.propTypes = {
  classList: PropTypes.string,
  color: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
 
export default Button;