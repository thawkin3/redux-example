import React from 'react';
import './Button.css';

const Button = ({ buttonText, clickHandler }) => (
    <button
        type="button"
        onClick={clickHandler}
    >
        {buttonText}
    </button>
);

export default Button;
