import React from 'react';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Left Sidebar - Profile */}
      <aside className="sidebar">
        <Profile />
      </aside>
      
      {/* Main Content - Portfolio */}
      <main className="main-content">
        <Portfolio />
      </main>
    </div>
  );
}

export default App;