import React, { useEffect, useRef, useState } from 'react';

function WebRTC() {
    const localAudioRef = useRef(null); // Reference for playing back audio
    const [isMuted, setIsMuted] = useState(false); // Track mute state
    const [audioTrack, setAudioTrack] = useState(null); // Track for muting/unmuting
    const [isConnected, setIsConnected] = useState(true); // Track connection state

    // Function to initialize the audio stream
    const initializeStream = () => {
        navigator.mediaDevices.getUserMedia({
            audio: {
                sampleRate: 44100,
                sampleSize: 16,
                channelCount: 1,
                echoCancellation: true,
                noiseSuppression: false,
                autoGainControl: false,
            }
        })
        .then(stream => {
            localAudioRef.current.srcObject = stream; // Play back the local audio
            const track = stream.getAudioTracks()[0];
            setAudioTrack(track); // Save audio track for control
            setIsConnected(true); // Update connection state
        })
        .catch(error => console.error('Error accessing microphone:', error));
    };

    useEffect(() => {
        initializeStream();

        // Clean up audio on component unmount
        return () => disconnect();
    }, []);

    // Mute/unmute the microphone
    const toggleMute = () => {
        if (audioTrack) {
            audioTrack.enabled = !audioTrack.enabled; // Toggle mute
            setIsMuted(!audioTrack.enabled); // Update state
        }
    };

    // Disconnect function to stop the audio stream
    const disconnect = () => {
        if (localAudioRef.current && localAudioRef.current.srcObject) {
            let tracks = localAudioRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop()); // Stop each track
            localAudioRef.current.srcObject = null; // Clear audio element
        }
        setAudioTrack(null); // Clear audio track
        setIsConnected(false); // Update connection state
        setIsMuted(false); // Reset mute state
    };

    // Reconnect function to reinitialize the audio stream
    const reconnect = () => {
        if (!isConnected) {
            initializeStream(); // Reinitialize the stream
        }
    };

    return (
        <div>
            <h2>WebRTC Audio Test</h2>
            <audio ref={localAudioRef} autoPlay /> {/* Plays the microphone audio */}
            <div>
                <button onClick={toggleMute} disabled={!isConnected}>
                    {isMuted ? "Unmute" : "Mute"}
                </button>
                <button onClick={disconnect} disabled={!isConnected}>Disconnect</button>
                <button onClick={reconnect} disabled={isConnected}>Reconnect</button>
            </div>
        </div>
    );
}

export default WebRTC;
