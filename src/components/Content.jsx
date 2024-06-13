import React from 'react';
import TelegramChat from './TelegramChat';

function MainContent() {
  return (
      <div className="w-92 h-92 flex-col mt-10 flex items-center text-center">
        <span className="text-xl">
          Seamlessly Integrate Telegram Notes into Your Notion Workspace
        </span>
        <TelegramChat />
      </div>
  );
}

export default MainContent;
