import './index.scss'
import { map } from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';
import { navBarIcons, nav } from '../../../data';


const NavIcon = ({ name, theme, size, index, onClick }) => {
  const [isActive, setIsActive] = useState(false)
  const activeText = useMemo(() => isActive ? 'Active' : 'Inactive', [isActive])
  const onFocus = useCallback((i) => () => {
    setIsActive(i === index)
  }, [index])

  const onBlur = useCallback((i) => () => {
    setIsActive(i === index)
  }, [index])

  return (
    <div key={index} onFocus={onFocus(index)} onBlur={onBlur(index)} onClick={onClick} className='Header-list-item'>
      <img className='nav-bar__icon' title="" alt="blah" src={navBarIcons[`${name + theme + activeText + size}`]} />
    </div>
  )
}

const NavigationBar = ({ isDarkTheme, onClickOption }) => {
  const theme = useMemo(() => isDarkTheme ? 'DarkBG' : 'LightBG', [isDarkTheme])
  const size = useMemo(() => '50', [])

  return (
    <div className='nav-bar'>
      {map(nav, (item, index) => <NavIcon
        key={index}
        index={index}
        size={size}
        theme={theme} {...item}
        onClick={onClickOption(item.screenUrl)}
      />)}
    </div>
  );
}

export default NavigationBar;