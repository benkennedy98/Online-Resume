import { Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Home } from './Pages/Home';
import { AboutMe } from './Pages/AboutMe'; 
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
        <Route path='/workhistory' element={<div>Work History</div>} />
        <Route path='/education' element={<div>Education</div>} />
      </Routes>
    </div>
  );
}

export default App;
