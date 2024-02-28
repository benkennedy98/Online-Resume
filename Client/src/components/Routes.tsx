import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Home } from '../pages/Home';
import { AboutMe } from '../pages/AboutMe';
import { WorkHistory } from '../pages/WorkHistory';
import { Education } from '../pages/Education';
import { Temperature } from '../pages/Temperature';

export const AppRoutes = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={isAuthenticated ? <AboutMe /> : <Navigate to="/" />} />
            <Route
                path="/workhistory"
                element={isAuthenticated ? <WorkHistory /> : <Navigate to="/" />}
            />
            <Route
                path="/education"
                element={isAuthenticated ? <Education /> : <Navigate to="/" />}
            />
            <Route
                path="/temperature"
                element={isAuthenticated ? <Temperature /> : <Navigate to="/" />}
            />
        </Routes>
    );
};
