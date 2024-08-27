import React, { useState, useEffect, useRef } from 'react';
import './ChatApp.css'; // Add your Bootstrap styling here

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messageListRef = useRef(null);

  useEffect(() => {
    if (messageListRef.current) {
      // Scroll to the bottom of the message list when new messages are added
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!isChatOpen) {
      // Clear all messages when chat is closed
      setMessages([]);
    }
  }, [isChatOpen]);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newUserMessage = { text: inputText, type: 'user' };
    setMessages([...messages, newUserMessage]);
    setInputText('');

    simulateBotResponse(inputText);
  };

  const simulateBotResponse = (userMessage) => {
    const userQuestions = [
      { question: "hello", response: "Hi there!" },
      { question: "how are you?", response: "I'm just a bot, but I'm here to help!" },
      { question: "tell me a joke", response: "Why don't scientists trust atoms? Because they make up everything!" },
      // Add more user questions and responses here
      { question: "default", response: "I'm not sure how to respond to that." },
    ];

    const matchedQuestion = userQuestions.find(
      (q) => userMessage.toLowerCase().includes(q.question)
    );

    const botResponse = matchedQuestion ? matchedQuestion.response : "I'm not sure how to respond to that.";

    const newBotMessage = { text: botResponse, type: 'bot' };
    setMessages([...messages, newBotMessage]);
  };

  return (
    <div className={`chat-container ${isChatOpen ? 'open' : 'closed'}`}>
      <div className="chat-header" onClick={toggleChat}>
        ChatBot
      </div>
      <div className="message-list" ref={messageListRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.type === 'bot' ? 'bot-message' : 'user-message'}`}
          >
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>
      {isChatOpen && (
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default ChatApp;
