import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar } from './NavBar';
import { Home } from '../pages/Home';
import { AboutMe } from '../pages/AboutMe'; 
import { WorkHistory } from '../pages/WorkHistory';
import { Education } from '../pages/Education';
import './App.css';

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
              <Route path='/' element={<Home />} />
              <Route path='/aboutme' element={<AboutMe />} />
              <Route path='/workhistory' element={<WorkHistory />} />
              <Route path='/education' element={<Education />} />
            </Routes>


    </div>
  );
}

export default App;


// isLoggedIn ? <Main/> : <Navigate to='/login'/>