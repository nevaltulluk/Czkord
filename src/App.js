import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import Login from './components/Login';
import Signup from './components/Signup';
import './styles/App.css';

function App() {
  const [selectedChannel, setSelectedChannel] = useState("General");

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <div className="main-content">
                <Sidebar setSelectedChannel={setSelectedChannel} />
                <div className="vertical-line"></div>
                <ChatWindow selectedChannel={selectedChannel} />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
