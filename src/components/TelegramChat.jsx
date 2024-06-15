import React, { useState } from 'react';
import leftArrowIcon from '../assets/icons/left-arrow-icon-black.svg';
import telegramWallpaper from '../assets/telegram-chat-wallpaper.jpg';
import notionEchoLogo from '../assets/icons/notion-echo-logo.png';
import userIcon from '../assets/icons/user-black.png';

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

    const formatMessage = (text) => {
        return text.split(' ').map((word, index) => (
            word.startsWith('/') ? 
                <span key={index} className="text-blue-500">{word} </span> : 
                <span key={index}>{word} </span>
        ));
    }

    return (
        <div className="h-96 flex items-center justify-center">
            <div className="w-full max-w-md h-full flex flex-col shadow-[rgba(0,0,0,0.2)_3px_3px_3px_3px] rounded-t-xl rounded-b-xl">
                <div className="w-full h-14 flex flex-col justify-start p-2 rounded-t-xl">
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
                            <img src={notionEchoLogo} alt="notion-echo-logo" className={`rounded-full flex mr-2 h-6 w-6 self-end ${message.sender === 'self' ? 'hidden' : ''}`}/>
                            <div className={`p-2 rounded-3xl ${message.sender === 'self' ? 'bg-light-green-100' : 'bg-gray-100'}`}>
                                <span className="mx-4">{formatMessage(message.text)}</span>
                            </div>
                            <div className='bg-white-100 rounded-full ml-2 self-end'><img src={userIcon} alt="user-icon" className={`rounded-full flex h-6 w-6 self-end ${message.sender === 'self' ? '' : 'hidden'}`}/></div>
                        </div>
                    ))}
                </div>
                <div className="flex rounded-b-xl bg-white-100">
                    <input
                        type="text"
                        className="flex-1 p-2 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onClick={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button
                        className="ml-4 p-2 bg-white-100 text-white rounded-lg"
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
