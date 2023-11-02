import React, { useCallback, useMemo, useState } from 'react';
// library imports
import { map } from 'lodash';
import { Link } from 'react-router-dom';
// local imports
// data
import { navBarIcons, nav } from '../../../data';
// styles
import './index.scss'


const NavIcon = ({ path, name, theme, size, index, onClick }) => {
  const [isActive, setIsActive] = useState(false)
  const activeText = useMemo(() => isActive ? 'Active' : 'Inactive', [isActive])
  const onFocus = useCallback((i) => () => {
    setIsActive(i === index)
  }, [index])

  const onBlur = useCallback((i) => () => {
    setIsActive(i !== index)
  }, [index])

  return (
    <Link to={path} key={index} onFocus={onFocus(index)} onBlur={onBlur(index)} className='Header-list-item'>
      <img className='nav-bar__icon' title="" alt={`${name}`} src={navBarIcons[`${name + theme + activeText + size}`]} />
    </Link>
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
        path={item.screenUrl}
      />)}
    </div>
  );
}

export default NavigationBar;