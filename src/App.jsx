import { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className='min-h-screen bg-gray-600'>
        {isLoggedIn ? <Dashboard /> : <LoginPage onLogin={handleLogin} />}
      </div>
    </>
  );
}

export default App;
