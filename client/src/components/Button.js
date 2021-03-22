import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btnH--primary', 'btnH--outline', 'btnH--test'];

const SIZES = ['btnH--medium', 'btnH--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link  className='btnH-mobile'>
      <button
        className={`btnH ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};