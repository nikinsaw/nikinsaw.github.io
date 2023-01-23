import './index.css'
import { map } from 'lodash';
import React,{ useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({listItems }) => {
  const navigate = useNavigate();
    const navigateToScreen = useCallback( (screenName)=>() => { navigate(screenName)}, [navigate])
  return (
    <header className='Header'>
      <div className='Header-list-item-wrapper'>
        {map(listItems,listItem=><h3 onClick={navigateToScreen(listItem.screenName)} className='Header-list-item'>{listItem.title}</h3>)}
      </div>
    </header>
  );
}

export default Header;