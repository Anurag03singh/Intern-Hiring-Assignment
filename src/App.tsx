import React from 'react';
import SignIn from './pages/SignIn';
import Repository from './pages/Repository';

function App() {
  // Set to true to view the repository section
  const isAuthenticated = true;

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated ? <Repository /> : <SignIn />}
    </div>
  );
}

export default App;