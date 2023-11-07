import React, { useEffect, useState } from 'react';
// library imports
import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from 'react-router-dom';
// local imports
// components
import { NavigationBar } from './components'
// containers
import HomeScreen from './containers/HomeScreen';
import AlbumScreen from './containers/AlbumScreen'
import StackScreen from './containers/StackScreen';
import ContactScreen from './containers/ContactScreen';
import ProfileScreen from './containers/ProfileScreen';
import ProjectsScreen from './containers/ProjectsScreen';
// styles
import './App.scss';

const App = () => {
  const [isDarkTheme] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} >
      <NavigationBar isMobile={isMobile} isDarkTheme={isDarkTheme} />
      <React.Suspense fallback={<div>Loading...</div>}>
        <AnimatePresence mode='wait' >
          <Routes key={location.pathname} location={location} >
            <Route path="/" element={<HomeScreen />} />
            <Route path="projects/:slug" element={<ProjectsScreen />} />
            <Route path="stack/" element={<StackScreen />} />
            <Route path="album/" element={<AlbumScreen />} />
            <Route path="profile/" element={<ProfileScreen />} />
            <Route path="contact/" element={<ContactScreen />} />
          </Routes>
        </AnimatePresence>
      </React.Suspense>
    </div>
  );
}

export default App;
