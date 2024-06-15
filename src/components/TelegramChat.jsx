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

    const formatMessage = (text) => {
        return text.split(' ').map((word, index) => (
            word.startsWith('/') ? 
                <span key={index} className="text-blue-100">{word} </span> : 
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
