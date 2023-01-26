import React from 'react';
import '../css/Button.css'

function Button ({ text, clickButton, onClick }) {
  return(
    <button
      className={ clickButton ? 'clickButton' : 'rebootButton' }
      onClick={onClick}>
    {text}
    </button>
  );
}

export default Button

// Clase Coder
// const Button = ({ text }) => <button className='button'>{text}</button>

// export default Button