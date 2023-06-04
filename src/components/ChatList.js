import React from 'react';

const ChatList = ({ chatList, selectedChat, handleSelectChat, newChatNumber, setNewChatNumber, handleAddChat }) => (
  <div className="chat-list">
    {chatList.map((chat) => (
      <div
        key={chat.number}
        className={`chat-item ${selectedChat === chat ? 'active' : ''}`}
        onClick={() => handleSelectChat(chat)}
      >
        {chat.number}
      </div>
    ))}
    <div className="add-chat">
      <input
        type="text"
        placeholder="Введите номер телефона"
        value={newChatNumber}
        onChange={(e) => setNewChatNumber(e.target.value)}
      />
      <button onClick={handleAddChat}>+</button>
    </div>
  </div>
);

export default ChatList;
