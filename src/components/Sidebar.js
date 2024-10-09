import React from 'react';

function Sidebar({ setSelectedChannel }) {
  return (
    <aside className="sidebar">
      <h2>Channels</h2>
      <hr className="divider" />
      <ul>
        <li onClick={() => setSelectedChannel("General")}>General</li>
        <li onClick={() => setSelectedChannel("Voice Room 1")}>Voice Room 1</li>
        <li onClick={() => setSelectedChannel("Voice Room 2")}>Voice Room 2</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
