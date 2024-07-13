import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getMainAppRoutes, homeLink } from './data/navigation';
import { Footer } from './components/footer/Footer';
import { useState } from 'react';
import { isDesktop } from './utils';
function App() {
  const [navBarVisible, setNavBarVisible] = useState(false);
  return (
    <div className='App'>
      <Header
        navBarVisible={navBarVisible}
        setNavBarVisible={setNavBarVisible}
      />
      <div
        className='main'
        style={{
          display: getDisplay(),
        }}
      >
        <Routes>
          {getMainAppRoutes().map(route => {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={route.path}
              />
            );
          })}
          <Route path='*' element={<Navigate to={homeLink.url} />} />
        </Routes>
      </div>
      <Footer getDisplay={getDisplay} />
    </div>
  );

  function getDisplay() {
    return isDesktop() || navBarVisible ? 'none' : 'block';
  }
}

export default App;
