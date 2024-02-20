import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar } from './NavBar';
import { Home } from '../pages/Home';
import { AboutMe } from '../pages/AboutMe';
import { WorkHistory } from '../pages/WorkHistory';
import { Education } from '../pages/Education';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={isAuthenticated ? <AboutMe /> : <Navigate to="/" />} />
        <Route
          path="/workhistory"
          element={isAuthenticated ? <WorkHistory /> : <Navigate to="/" />}
        />
        <Route path="/education" element={isAuthenticated ? <Education /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
