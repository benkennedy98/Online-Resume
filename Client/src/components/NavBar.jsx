import { Link } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className='nav-bar'>
            <nav className='links-container'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/aboutme'>About Me</Link>
                <Link className='link' to='/workhistory'>Work History</Link>
                <Link className='link' to='/education'>Education</Link>
            </nav>
      </div>
    )
}