import React from 'react';
import TelegramChat from './TelegramChat';

function MainContent() {
  return (
      <div className="w-92 h-full flex-col my-10 flex items-center text-center gap-y-1">
        <p className="text-xl mx-4 md:mx-0">Seamlessly Integrate Telegram Notes into Your Notion Workspace</p>
        <p className='text-gray-500 mx-4 md:mx-0'>Use your telegram client to write quick notes to your Second Brain</p>
        <br/>
        <TelegramChat />
      </div>
  );
}

export default MainContent;
