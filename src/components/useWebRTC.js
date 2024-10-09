// useWebRTC.js
import { useState, useRef } from 'react';

export default function useWebRTC() {
    const [isConnected, setIsConnected] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [error, setError] = useState(null);
    const audioRef = useRef(null);
    const audioTrackRef = useRef(null);

    // Function to initialize the audio stream
    const initializeStream = () => {
        navigator.mediaDevices.getUserMedia({
            audio: {
                sampleRate: 48000, // Increase sample rate for better quality
                channelCount: 1,
                echoCancellation: true,
                noiseSuppression: true, // Enable built-in noise suppression
                autoGainControl: true,
                noiseSuppressionLevel: 'high', // Set higher noise suppression level if supported
                highPassFilter: true // Enable high-pass filter to filter out low-frequency noise
            }
        })
        .then(stream => {
            audioRef.current.srcObject = stream;
            const track = stream.getAudioTracks()[0];
            audioTrackRef.current = track;
            setIsConnected(true);
            setError(null); // Clear any previous error
        })
        .catch(err => {
            console.error('Error accessing microphone:', err);
            setError('Microphone access denied or unavailable.');
            setIsConnected(false);
        });
    };

    // Toggle mute/unmute
    const toggleMute = () => {
        if (audioTrackRef.current) {
            audioTrackRef.current.enabled = !audioTrackRef.current.enabled;
            setIsMuted(!audioTrackRef.current.enabled);
        }
    };

    // Disconnect and clean up the stream
    const disconnect = () => {
        if (audioRef.current && audioRef.current.srcObject) {
            const tracks = audioRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            audioRef.current.srcObject = null;
        }
        audioTrackRef.current = null;
        setIsConnected(false);
        setIsMuted(false);
    };

    // Reconnect to the audio stream if disconnected
    const reconnect = () => {
        if (!isConnected) {
            initializeStream();
        }
    };

    return {
        audioRef,
        isConnected,
        isMuted,
        error,
        initializeStream,
        toggleMute,
        disconnect,
        reconnect,
    };
}
