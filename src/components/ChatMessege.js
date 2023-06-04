const ChatMessages = ({ selectedChat }) => {
  if (!selectedChat) {
    return <div className="empty-chat">Выберите чат</div>;
  }

  return (
    <div className="chat-messages">
      {selectedChat.messages.map((message, index) => (
        <div
          key={index}
          className={`message ${message.sender === 'me' ? 'sent' : 'received'}`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};
export default ChatMessages