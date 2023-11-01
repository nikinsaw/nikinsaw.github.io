import React, { useCallback, useEffect, useState } from 'react';
import { NavigationBar } from './components'
import './App.scss';
import { nav } from './data'
import { AnimatePresence, motion } from "framer-motion"
import { map } from 'lodash';


const App = () => {
  const [screen, setScreen] = useState('/')
  const [isDarkTheme] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])
  const getScreenName = useCallback((screenUrl) => () => { setScreen(screenUrl) }, [])
  console.log('screen', isDarkTheme)
  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} >
      <NavigationBar isMobile={isMobile} isDarkTheme={isDarkTheme} onClickOption={getScreenName} />
      <AnimatePresence mode="popLayout">
        <motion.div key={screen}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, y: -100 }}>
          {map(nav, ({ screenUrl, component }, i) => screenUrl === screen && <div key={i}>{component}</div>)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
