import React, { useState } from 'react';
import '../styles/Sidebar.css';

function Sidebar({ 
    voiceChannel, 
    setVoiceChannel, 
    isMuted, 
    toggleMute, 
    disconnect, 
    reconnect, 
    isConnected 
}) {
    const [showVoiceControls, setShowVoiceControls] = useState(false);

    const handleVoiceChannelClick = (channel) => {
        setVoiceChannel(channel);
        setShowVoiceControls(true); // Show controls when a voice channel is selected
    };

    const handleDisconnect = () => {
        disconnect();
        setShowVoiceControls(false); // Hide controls on disconnect
    };

    const connectedUsersByChannel = {
        "Voice Room 1": ["User1"],
        "Voice Room 2": ["User2", "User3"],
    };

    return (
        <aside className="sidebar">
            <h2>Channels</h2>
            <hr className="divider" />
            <ul>
                <li onClick={() => setVoiceChannel("General Chat")}>General Chat</li>
                <li onClick={() => setVoiceChannel("Gaming Chat")}>Gaming Chat</li>

                <li onClick={() => handleVoiceChannelClick("Voice Room 1")}>
                    Voice Room 1
                    {voiceChannel === "Voice Room 1" && (
                        <ul className="user-list">
                            {connectedUsersByChannel["Voice Room 1"].map((user, index) => (
                                <li key={index}>{user}</li>
                            ))}
                        </ul>
                    )}
                </li>

                <li onClick={() => handleVoiceChannelClick("Voice Room 2")}>
                    Voice Room 2
                    {voiceChannel === "Voice Room 2" && (
                        <ul className="user-list">
                            {connectedUsersByChannel["Voice Room 2"].map((user, index) => (
                                <li key={index}>{user}</li>
                            ))}
                        </ul>
                    )}
                </li>
            </ul>

            {/* Show the voice controls box if a voice channel is selected and not disconnected */}
            {showVoiceControls && voiceChannel && (
                <div className="voice-controls-box">
                    <h3>Connected to {voiceChannel}</h3>
                    <div className="button-group">
                        <button onClick={toggleMute} disabled={!isConnected} className="emoji-button">
                            {isMuted ? "🎤" : "🎙️"}
                        </button>
                        <button onClick={handleDisconnect} disabled={!isConnected} className="emoji-button">
                            📞
                        </button>
                    </div>
                </div>
            )}
        </aside>
    );
}

export default Sidebar;
