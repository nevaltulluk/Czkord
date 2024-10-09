import React, { useState } from 'react';
import '../styles/Sidebar.css';
import useWebRTC from './useWebRTC';

function Sidebar({ voiceChannel, setVoiceChannel }) {
    const [showVoiceControls, setShowVoiceControls] = useState(false);
    const {
        audioRef,
        isConnected,
        isMuted,
        error,
        initializeStream,
        toggleMute,
        disconnect,
        reconnect,
    } = useWebRTC();

    const handleVoiceChannelClick = (channel) => {
        setVoiceChannel(channel);
        setShowVoiceControls(true);
        if (!isConnected) {
            initializeStream(); // Connect to WebRTC when a voice channel is selected
        }
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

            {showVoiceControls && voiceChannel && (
                <div className="voice-controls-box">
                    <h3>Connected to {voiceChannel}</h3>
                    <div className="button-group">
                        <button onClick={toggleMute} disabled={!isConnected} className="emoji-button">
                            {isMuted ? "🔉" : "🔇"}
                        </button>
                        <button onClick={handleDisconnect} disabled={!isConnected} className="emoji-button">
                            📞
                        </button>
                    </div>
                </div>
            )}

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <audio ref={audioRef} autoPlay /> {/* Audio element to play back the audio */}
        </aside>
    );
}

export default Sidebar;
