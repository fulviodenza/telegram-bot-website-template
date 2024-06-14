import React from 'react';
import { Link } from 'react-router-dom';
import TelegramIcon from '../assets/icons/telegram-icon-black.svg';

function Header() {
  return (
    <div className="flex w-full shadow px-8 py-8">
      <div className="flex w-full">
        <a href="#" className="text-3xl flex font-bold">
          Notion Echo Bot
        </a>
          <div className="flex flex-col center-items gap-y-4 sm:flex-row sm:gap-y-2 items-center md:gap-8 sm:gap-2 ml-auto">
            <Link to="/" className="md:px-4 sm:px-2">Home</Link>
            <Link to="/about" className="md:px-4 sm:px-2">About</Link>
            <a href="https://t.me/notion_echo_bot" target='_blank'>
              <button 
                id="redirectToTelegram" 
                className="text-blue-900 flex px-4 py-2 text-sm shadow font-medium bg-blue-100 rounded-md mr-2"
              >
                <span className="hidden md:block">Go to the bot</span>
                <span className="block md:hidden">
                    <img src={ TelegramIcon } alt='TelegramIcon'></img>
                </span>
              </button>
            </a>
          </div>
      </div>
    </div>
  );
}

export default Header;
