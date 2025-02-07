import React from 'react';
import { Link } from 'react-router-dom';
import TelegramIcon from '../assets/icons/telegram-icon-blue.svg';
import NotionEchoLogo from '../assets/notion-echo-logo.png'
function Header() {
  return (
    <div className="flex w-full shadow px-8 py-8">
      <div className="flex w-full gap-x-2">
        <img src={NotionEchoLogo} alt='notion-echo logo' className="flex h-12 w-10"></img>
        <a href="#" className="text-3xl flex font-bold">
          Notion Echo Bot
        </a>
        <div className="flex flex-col center-items gap-y-4 sm:flex-row sm:gap-y-2 items-center md:gap-8 sm:gap-2 ml-auto">
          <div className='flex px-4 py-2 text-sm shadow font-medium rounded-md mr-2'><Link to="/" className="md:px-4 sm:px-2">Home</Link></div>
          <div className='flex px-4 py-2 text-sm shadow font-medium rounded-md mr-2'><Link to="/about" className="md:px-4 sm:px-2">About</Link></div>
          <a href="https://t.me/notion_echo_bot" target='_blank'>
            <button
              id="redirectToTelegram"
              className="text-blue-900 flex px-4 py-2 text-sm shadow font-medium rounded-md mr-2"
            >
              <span className="hidden md:block text-blue-100">Go to the bot</span>
              <span className="block md:hidden">
                <img src={TelegramIcon} alt='TelegramIcon'></img>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
