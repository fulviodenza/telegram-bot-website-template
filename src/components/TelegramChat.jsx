import React, { useState } from 'react';
import leftArrowIcon from '../assets/icons/left-arrow-icon-black.svg';
import telegramWallpaper from '../assets/telegram-chat-wallpaper.jpg';

const TelegramChat = () => {
    const [messages, setMessages] = useState([
        { text: '/note hello notion-echo!', sender: 'self' },
        { text: 'note saved', sender: 'other' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: 'self' }]);
            setNewMessage('');
        }
    };

    return (
        <div className="h-full flex items-center justify-center">
            <div className="w-full max-w-md h-full flex flex-col bg-telegram-chat-wallpaper shadow-[rgba(0,0,0,0.2)_3px_3px_3px_3px] rounded-lg">
                <div className="bg-gray-100 w-full h-14 flex flex-col justify-start p-2 rounded-t-xl">
                    <div className="flex items-center">
                        <img src={leftArrowIcon} alt="back" className="w-6 h-6 object-contain" />
                        <div className="ml-3">
                            <p className='font-bold text-xs'>notion-echo</p>
                            <p className='text-xs text-gray-500'>bot</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 p-4 overflow-y-auto bg-cover bg-center" style={{ backgroundImage: `url(${telegramWallpaper})` }}>
                    {messages.map((message, index) => (
                        <div key={index} className={`mb-4 flex ${message.sender === 'self' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-2 rounded-lg ${message.sender === 'self' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}>
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4 bg-gray-100 flex rounded-b-xl">
                    <input
                        type="text"
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button
                        className="ml-4 p-2 bg-blue-500 text-white rounded-lg"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TelegramChat;
