const MessageInput = ({ messageText, setMessageText, handleSendMessage, messageInputRef }) => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleSendMessage();
      }
  };
  
    return (
      <div className="message-input">
        <input
          type="text"
          placeholder="Введите сообщение"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={messageInputRef}
          autoFocus
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
    );
};
export default MessageInput