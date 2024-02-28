import { useAuth0 } from '@auth0/auth0-react';
import { NavBar } from './NavBar';
import { AppRoutes } from './Routes';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <AppRoutes />
    </div>
  );
};

export default App;
