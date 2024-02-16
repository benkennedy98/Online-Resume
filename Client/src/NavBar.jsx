import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    return (
       <nav>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/aboutme'>About Me</Link>
        <Link className='link' to='/workhistory'>Work History</Link>
        <Link className='link' to='/education'>Education</Link>
      </nav>
    )
}