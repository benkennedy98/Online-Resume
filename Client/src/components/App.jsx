import { Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Home } from '../pages/Home';
import { AboutMe } from '../pages/AboutMe'; 
import { WorkHistory } from '../pages/WorkHistory';
import { Education } from '../pages/Education';
import './App.css';

function App() {
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
