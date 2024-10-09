import React from 'react';

function ChatWindow({ selectedChannel }) {
  return (
    <main className="chat-window">
      <h2 className="chat-title">{selectedChannel}</h2> {/* Channel title */}
      <div className="messages">
        <p><strong>User1:</strong> Hello!</p>
        <p><strong>User2:</strong> Hi there!</p>
      </div>
      <input type="text" placeholder="Type a message..." />
    </main>
  );
}

export default ChatWindow;
