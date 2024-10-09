// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import Login from './components/Login';
import Signup from './components/Signup';
import './styles/App.css';

function App() {
    const [voiceChannel, setVoiceChannel] = useState(null); // Track selected voice channel
    const [isMuted, setIsMuted] = useState(false);
    const [isConnected, setIsConnected] = useState(true);

    const toggleMute = () => setIsMuted(!isMuted); // Dummy function
    const disconnect = () => setIsConnected(false); // Dummy function
    const reconnect = () => setIsConnected(true); // Dummy function

    return (
        <Router>
            <div className="app">
                <Sidebar 
                    voiceChannel={voiceChannel} 
                    setVoiceChannel={setVoiceChannel} 
                    isMuted={isMuted} 
                    toggleMute={toggleMute} 
                    disconnect={disconnect} 
                    reconnect={reconnect} 
                    isConnected={isConnected} 
                />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<ChatWindow />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
