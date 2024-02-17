import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './NavBar.css';

export const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0()
    return (
        <div className='nav-bar'>
            {!isAuthenticated && (
                <div className='auth-button'>
                    <button onClick={() => loginWithRedirect({})}>Login</button>
                </div>
            )}
            {isAuthenticated && (
                <>
                    <nav className='links-container'>
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/aboutme'>About Me</Link>
                        <Link className='link' to='/workhistory'>Work History</Link>
                        <Link className='link' to='/education'>Education</Link>
                    </nav>
                    <div className='auth-button'>
                        <button onClick={() => logout()}>logout</button>
                    </div>
                </>
            )}
      </div>
    )
}