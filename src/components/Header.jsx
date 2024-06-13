import React from 'react';

function Header() {
  return (
    <div className="main-div flex w-full shadow px-8 py-8">
      <div className="flex justify-between w-full">
        <a href="#" className="text-3xl flex font-bold">
          Notion Echo Bot
        </a>
        <div className="flex justify-between gap-4">
            <span>Repository</span>
            <span>About</span>
        </div>
        <button id="redirectToTelegram" className="text-blue-900 flex px-4 py-2 text-sm shadow font-medium bg-blue-100 rounded-md">
          Go to the bot
        </button>
      </div>
    </div>
  );
}

export default Header;
