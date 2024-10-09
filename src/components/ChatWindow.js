import React, { useRef, useEffect } from 'react';
import '../styles/Chatbox.css';

function ChatWindow({ selectedChannel }) {
    const currentUser = "User1"; // Replace with the actual logged-in user
    const scrollRef = useRef(null);
    // Sample messages for testing
    const messages = [
        { user: "Bambi", text: "Hello everyone!" },
        { user: "User1", text: "Hey! How's it going?" },
        { user: "User3", text: "Hi all! Just getting started here." },
        { user: "User4", text: "Good to see everyone here!" },
        { user: "User5", text: "I'm doing well, just finished a project at work." },
        { user: "User6", text: "That's awesome! What kind of project?" },
        { user: "User7", text: "It was a web app for managing tasks, similar to Trello." },
        { user: "User8", text: "That sounds interesting! Are you using React?" },
        { user: "User9", text: "Yes, React with a Node.js backend. It was challenging but fun." },
        { user: "User10", text: "I'm also learning React. Any tips for a beginner?" },
        { user: "User11", text: "Start with the basics and practice a lot. Build small projects!" },
        { user: "User12", text: "Agreed! Building small projects really helps you understand the fundamentals." },
        { user: "User13", text: "Thanks for the advice! I'll start with a to-do list app." },
        { user: "User14", text: "Great choice! A to-do list app covers many key concepts in React." },
        { user: "User15", text: "Anyone here interested in gaming?" },
        { user: "User16", text: "I am! What games do you play?" },
        { user: "User17", text: "Mostly RPGs. Just started playing Elden Ring." },
        { user: "User18", text: "Elden Ring is amazing! I'm on my second playthrough." },
        { user: "User19", text: "I've heard a lot about it. Is it difficult?" },
        { user: "User20", text: "Yes, but it’s rewarding. You learn with each attempt." },
        { user: "User21", text: "I love challenging games. Maybe I'll give it a try." },
        { user: "User22", text: "Definitely! The world-building and story are incredible." },
        { user: "User23", text: "I’ve been playing a lot of multiplayer games lately. Anyone interested in teaming up?" },
        { user: "User24", text: "Count me in! I usually play during weekends." },
        { user: "User25", text: "We should set up a game night!" },
        { user: "User26", text: "That sounds fun! What games should we play?" },
        { user: "User27", text: "How about something cooperative, like Overcooked?" },
        { user: "User28", text: "Yes! Overcooked is chaotic and hilarious." },
        { user: "User29", text: "Perfect choice! I'm looking forward to it." },
        { user: "User30", text: "When should we schedule it?" },
        { user: "User31", text: "How about Saturday at 8 PM?" },
        { user: "User32", text: "Works for me!" },
        { user: "User33", text: "Same here! Let’s make it happen." },
        { user: "User34", text: "Awesome, can't wait!" },
        { user: "User35", text: "See you all on Saturday then!" },
        { user: "User36", text: "It’s a plan! Going to practice my cooking skills, haha." },
        { user: "User37", text: "Don't burn the kitchen down! 😂" },
        { user: "User38", text: "Haha, we’ll need all the help we can get." },
        { user: "User39", text: "This is going to be epic!" },
        { user: "User40", text: "Agreed! Let’s have a great time." }
    ];


    // Define a set of colors for usernames
    // Extended color palette for more users
    const colors = [
        "#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF33A8", "#33FFF8",
        "#FFBD33", "#FFC1CC", "#33D4FF", "#FF5733", "#D433FF", "#33FFBD",
        "#FFD433", "#FF8C33", "#33FF8C", "#8C33FF", "#FF3384", "#33FFA5",
        "#84FF33", "#3384FF", "#FF338C", "#A5FF33", "#FF5733", "#3357FF",
        "#FF33D4", "#33FFA5", "#FF3384", "#A5FF57", "#57FFA5", "#FFA533",
        "#FF33F0", "#33FFF8", "#D4FF33", "#33A5FF", "#F033FF", "#33FFD4",
        "#5733FF", "#F333FF", "#FFBD57", "#57FFBD", "#FFD433", "#FF3384",
    ];


    // Function to assign a color to a user based on their username
    const getUsernameColor = (username) => {
        let hash = 0;
        for (let i = 0; i < username.length; i++) {
            hash = username.charCodeAt(i) + ((hash << 5) - hash);
        }
        // Map hash to one of the colors
        const colorIndex = Math.abs(hash) % colors.length;
        return colors[colorIndex];
    };

    // Effect to scroll to the bottom on new messages
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <main className="chat-window">
            <h2 className="chat-title">{selectedChannel}</h2>
            <div className="scroll-wrapper" ref={scrollRef}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.user === currentUser ? "outgoing" : "incoming"}`}
                    >
                        <p className="message-user" style={{ color: getUsernameColor(msg.user) }}>
                            {msg.user}:
                        </p>
                        <p className="message-text">{msg.text}</p>
                    </div>
                ))}
            </div>
            <div className="message-input-box">
                <input type="text" placeholder="Type a message..." className="message-input" />
            </div>
        </main>
    );
}


export default ChatWindow;
