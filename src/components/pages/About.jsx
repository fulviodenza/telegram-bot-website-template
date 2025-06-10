import React from 'react';
import RedditEmbed from '../RedditEmbed';

const About = () => {
  return (
    <main className="min-h-screen from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Notion Echo Bot
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Learn more about how this bot bridges Telegram and Notion to supercharge your productivity workflow.
          </p>
        </header>
        
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <article className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">1</span>
                </div>
                <p className="text-gray-600">Connect your Notion workspace through OAuth authorization</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">2</span>
                </div>
                <p className="text-gray-600">Set your default page where notes will be saved</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">3</span>
                </div>
                <p className="text-gray-600">Start sending notes directly from Telegram using simple commands</p>
              </div>
            </div>
          </article>
          
          <article className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Text and media file support</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Zero data retention policy</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Easy command-based interface</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Instant synchronization</span>
              </li>
            </ul>
          </article>
        </section>
        
        {/* Open Source Section */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">Open Source Collaboration</h2>
          <p className="text-center mb-6">
            Notion Echo Bot is an open-source project. We welcome developers to contribute and help us improve.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/fulviodenza/notion-echo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.291 3.438 9.801 8.207 11.387.601.111.793-.261.793-.577 0-.287-.011-1.045-.016-2.051-3.338.724-4.042-1.607-4.042-1.607-.546-1.387-1.333-1.759-1.333-1.759-1.087-.743.083-.728.083-.728 1.204.085 1.836 1.237 1.836 1.237 1.067 1.827 2.805 1.297 3.487.992.108-.772.418-1.297.761-1.597-2.665-.303-5.467-1.333-5.467-5.933 0-1.313.469-2.386 1.236-3.227-.124-.303-.537-1.52.117-3.164 0 0 1.008-.323 3.303 1.235a11.537 11.537 0 013.003-.404c1.018.004 2.042.138 3.003.404 2.295-1.558 3.303-1.235 3.303-1.235.654 1.644.241 2.861.118 3.164.767.841 1.236 1.914 1.236 3.227 0 4.605-2.805 5.63-5.467 5.933.429.371.815 1.102.815 2.221 0 1.607-.014 2.896-.016 3.287 0 .319.188.694.798.577C20.565 21.801 24 17.291 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Contribute on GitHub</span>
            </a>
            <a 
              href="https://t.me/+BOWbMpNPh6IzNTY0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="#0F0F0F"/>
              </svg>
              <span>Join our Telegram group</span>
            </a>
          </div>
        </section>
        
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community Discussion</h2>
          <div className="flex justify-center">
            <RedditEmbed />
          </div>
        </section>
        
        <section className="text-center">
          <div className="bg-white shadow-lg text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-900 mb-6">Join hundreds of users who are already boosting their productivity.</p>
            <a 
              href="https://t.me/notion_echo_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Using the Bot</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
