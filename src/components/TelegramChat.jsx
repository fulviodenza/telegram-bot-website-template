import React, { useState } from 'react';
import leftArrowIcon from '../assets/icons/left-arrow-icon-black.svg';
import telegramWallpaper from '../assets/telegram-chat-wallpaper.jpg';
import notionEchoLogo from '../assets/icons/notion-echo-logo.png';
import userIcon from '../assets/icons/user-black.png';

const firstRegisterMessage = "click on the following URL, and authorize the page you want this bot to have access to\n";
const secondRegisterMessage = "www.registrationurl.com/oauth2\n";
const thirdRegisterMessage = "when you have done with registration, select a default page using command `/defaultpage page` with the name of the page you have authorized before\n";
const helpMessage = `Hi there 👋 I'm your personal bridge to Notion, designed to make noting down your thoughts, tasks, and ideas as easy as sending a message to a friend. Let's get your productivity supercharged without ever leaving Telegram
Here is how to get started:

- /help - Displays this help message;
- /register - Register your Notion notebook in the bot;
- /note text - Write the text of the note or upload a pdf, jpg, jpeg or png (if it's an image, please ensure to send it without compression or it will upload a blurred image on notion) on Notion;
- /defaultpage page_name - Sets the default Notion page for your notes. Ensure this is an authorized page during registration;
- /getdefaultpage - Get default page for your user;
- /deauthorize - I will forget you;
	
Need a bit more guidance? Type /help anytime to see what I can do for you or look at the Github repository: https://github.com/fulviodenza/notion-echo
	
Remember, your privacy is paramount. I don't keep any of your data. Everything goes straight into your Notion, and nowhere else.`;

const commands = {'note': 'note saved', 'defaultpage': 'page default page set as default', 'getdefaultpage': 'defaultpage', 'register': firstRegisterMessage+secondRegisterMessage+thirdRegisterMessage, 'help': helpMessage};

const TelegramChat = () => {
    const [messages, setMessages] = useState([
        { text: '/note hello notion-echo!', sender: 'self' },
        { text: 'note saved', sender: 'other' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            for (const [key, value] of Object.entries(commands)) {
                if ( newMessage.includes(key) ) {
                    setMessages([...messages, {text: newMessage, sender: 'self'}, { text: value, sender: 'other' }]);
                    setNewMessage('');    
                    return;
                }
            }
            setMessages([...messages, { text: newMessage, sender: 'self' }]);
            setNewMessage('');    
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    const formatMessage = (text) => {
        return text.split(' ').map((word, index) => (
            word.startsWith('/') ? 
                <span key={index} className="text-blue-500 font-medium">{word} </span> : 
                <span key={index}>{word} </span>
        ));
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
                    <div className="flex items-center text-white">
                        <img src={leftArrowIcon} alt="back" className="w-5 h-5 mr-3 filter invert" />
                        <img src={notionEchoLogo} alt="notion-echo" className="w-8 h-8 rounded-full mr-3 bg-white p-1" />
                        <div>
                            <p className='font-semibold text-sm'>notion-echo</p>
                            <p className='text-xs text-blue-100'>bot</p>
                        </div>
                    </div>
                </div>

                {/* Chat Messages */}
                <div 
                    className="h-80 p-4 overflow-y-auto bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${telegramWallpaper})` }}
                >
                    <div className="absolute inset-0 bg-white bg-opacity-90"></div>
                    <div className="relative z-10 space-y-3">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex ${message.sender === 'self' ? 'justify-end' : 'justify-start'}`}>
                                {message.sender === 'other' && (
                                    <img src={notionEchoLogo} alt="notion-echo-logo" className="w-6 h-6 rounded-full mr-2 self-end" />
                                )}
                                <div className={`max-w-xs px-4 py-2 rounded-2xl shadow-sm ${
                                    message.sender === 'self' 
                                        ? 'bg-light-green-100 text-gray-800 rounded-br-sm' 
                                        : 'bg-white text-gray-800 rounded-bl-sm border'
                                }`}>
                                    <span className="text-sm">{formatMessage(message.text)}</span>
                                </div>
                                {message.sender === 'self' && (
                                    <img src={userIcon} alt="user" className="w-6 h-6 rounded-full ml-2 self-end" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Message Input */}
                <div className="p-4 bg-gray-50 border-t">
                    <div className="flex items-center space-x-3">
                        <input
                            type="text"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                            placeholder="Write a message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            onClick={handleSendMessage}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Try Commands Hint */}
            <div className="mt-4 text-center">
                <p className="text-sm text-gray-600 mb-2">Try these commands:</p>
                <div className="flex flex-wrap justify-center gap-2">
                    {['/help', '/note', '/register'].map((cmd) => (
                        <button
                            key={cmd}
                            onClick={() => setNewMessage(cmd)}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs hover:bg-blue-200 transition-colors"
                        >
                            {cmd}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TelegramChat;
