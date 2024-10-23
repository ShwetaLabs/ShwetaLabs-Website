import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { getMainAppRoutes, homeLink } from './data/navigation';
import { Footer } from './components/footer/Footer';
import { useState } from 'react';
import { fadeIn, isDesktop } from './utils';
import Scroll from './components/SmoothScroll';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [navBarVisible, setNavBarVisible] = useState(false);
  const location = useLocation(); // Get current route location

  return (
    <div className='App'>
      <Scroll />
      <span
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 3,
        }}
      >
        <Header
          navBarVisible={navBarVisible}
          setNavBarVisible={setNavBarVisible}
        />
      </span>

      {/* Animate route transitions */}
      <AnimatePresence mode='wait'> {/* Add AnimatePresence to handle route transitions */}
        <motion.div
          key={location.pathname} // Ensure animation happens on route change
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden" // You can add an exit animation if needed
          className='main'
          style={{
            display: getDisplay(),
            marginInline: isDesktop() ? 'default' : '24px',
          }}
        >
          <Routes location={location} key={location.key}> {/* Pass the location to Routes */}
            {getMainAppRoutes().map(route => (
              <Route
                path={route.path}
                element={<route.element />}
                key={route.path}
              />
            ))}
            <Route path='*' element={<Navigate to={homeLink.url} />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer getDisplay={getDisplay} />
    </div>
  );

  function getDisplay() {
    return isDesktop() || !navBarVisible ? 'block' : 'none';
  }
}

export default App;
