import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  const [selectedChannel, setSelectedChannel] = useState("General");

  return (
    <div className="app">
      <div className="main-content">
        <Sidebar setSelectedChannel={setSelectedChannel} />
        <div className="vertical-line"></div>
        <ChatWindow selectedChannel={selectedChannel} />
      </div>
    </div>
  );
}

export default App;
