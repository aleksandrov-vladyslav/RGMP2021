import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
  let classList = props.classList || '';
  let className = classList + ' button button--' + props.variant + ' button--' + props.color;

  return ( 
  <button className={className} onClick={props.onClick} type={props.type ? props.type : ''}>
    {props.children}
  </button> );
}

Button.propTypes = {
  classList: PropTypes.string,
  color: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string
};
 
export default Button;