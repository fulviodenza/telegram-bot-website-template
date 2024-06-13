import React from 'react';

function Header() {
  return (
    <div className="flex w-full shadow px-8 py-8">
      <div className="flex w-full">
        <a href="#" className="text-3xl flex font-bold">
          Notion Echo Bot
        </a>
        <div className="flex items-center gap-8 ml-auto">
          <p>Repository</p>
          <p>About</p>
          <button id="redirectToTelegram" className="text-blue-900 flex px-4 py-2 text-sm shadow font-medium bg-blue-100 rounded-md">
            <span className="hidden md:block">Go to the bot</span>
            <span className="block md:hidden">
                <div className='bg-telegram-icon-black'>
                    
                </div>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
