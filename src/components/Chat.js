import React, { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([]);
  const [newChatPhoneNumber, setNewChatPhoneNumber] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        content: message,
        sender: 'You',
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages(prevMessages => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
    setMessages(chat.messages);
  };

  const handleAddChat = (phoneNumber) => {
    const phoneNumberRegex = /^\d+$/;
  
    if (phoneNumberRegex.test(phoneNumber)) {
      // Valid phone number
      const chatExists = chats.some(chat => chat.phoneNumber === phoneNumber);
      
      if (!chatExists) {
        const newChat = {
          phoneNumber: phoneNumber,
          messages: [],
        };
    
        setChats((prevChats) => [...prevChats, newChat]);
        setNewChatPhoneNumber('');
      } else {
        console.log('Chat with this phone number already exists');
      }
    } else {
      console.log('Invalid phone number');
    }
  };
  
  return (
    <div className="chat-container">
      <div className="chat-list">
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`chat-item ${selectedChat === chat ? 'active' : ''}`}
            onClick={() => handleSelectChat(chat)}
          >
            {chat.phoneNumber}
          </div>
        ))}
        <div className="add-chat">
          <input
            type="text"
            placeholder="Enter phone number"
            value={newChatPhoneNumber}
            onChange={(e) => setNewChatPhoneNumber(e.target.value)}
          />
          <button onClick={() => handleAddChat(newChatPhoneNumber)}>Add Chat</button>
        </div>
      </div>
      <div className="chat-content">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <span className="message-sender">{msg.sender}</span>
              <span className="message-content">{msg.content}</span>
              <span className="message-timestamp">{msg.timestamp}</span>
            </div>
          ))}
        </div>
        {selectedChat && (
          <div className="message-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
