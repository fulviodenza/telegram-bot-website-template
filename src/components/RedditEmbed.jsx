import React, { useEffect } from 'react';

const RedditEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.reddit.com/widgets.js';
    script.async = true;
    script.charSet = 'UTF-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='overflow-hidden'>
      <blockquote
        className="reddit-embed-bq"
        style={{ height: '316px' }}
        data-embed-height="316"
        dangerouslySetInnerHTML={{
          __html: `
            <a href="https://www.reddit.com/r/Notion/comments/1bvoaso/introducing_notion_echo_bot_seamlessly_integrate/">
              Introducing Notion Echo Bot: Seamlessly Integrate Telegram Notes into Your Notion Workspace!
            </a>
            <br>
            by <a href="https://www.reddit.com/user/sempronio18/">u/sempronio18</a>
            in <a href="https://www.reddit.com/r/Notion/">Notion</a>
          `,
        }}
      ></blockquote>
    </div>
  );
};

export default RedditEmbed;
