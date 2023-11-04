import React from "react";
import '../../../styles/components/common.styles.scss'

const Button = ({ colorClass, text, icon, onClick, onMouseOver, onMouseLeave }) => {
  const darkTheme = true
  return (
    <button className={`button ${(((colorClass === 'primary' && darkTheme) || (colorClass === 'secondary' && !darkTheme)) && 'light-button') || 'dark-button'}`} >
      <div className='button__text-wrapper'>
        {text}
      </div>
      <div className='button__icon-wrapper'>
        <img className='button__icon' src={icon} alt="icon" />
      </div>
    </button>
  )
}

export default Button;