const SendMessage = async (phoneNumber, message) => {
    const idInstance = "{{idInstance}}"; // Replace with your actual ID instance
    const apiTokenInstance = "{{apiTokenInstance}}"; // Replace with your actual API token instance
  
    const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
  
    const chatId = `${phoneNumber}@c.us`;
    const body = {
      chatId: chatId,
      message: message
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
  
      if (response.ok) {
        console.log('Message sent successfully');
      } else {
        console.log('Failed to send message');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
export default SendMessage  