import React from 'react';
import TelegramChat from './TelegramChat';

function MainContent() {
  return (
    <div className="min-h-screen  from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Seamlessly Integrate 
            <span className="text-blue-600 block md:inline md:ml-3">Telegram Notes</span>
            <span className="block">into Your Notion Workspace</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Use your telegram client to write quick notes to your Second Brain. 
            Bridge the gap between instant messaging and organized productivity.
          </p>
          <div className="mt-6">
          </div>
        </header>
        
        <section className="flex justify-center mb-16" aria-label="Interactive demo">
          <div className="w-full max-w-md">
            <TelegramChat />
          </div>
        </section>
        
        <section className="mt-16" aria-label="Key features">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Notion Echo Bot?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Send notes instantly from Telegram directly to your Notion workspace</p>
            </article>
            
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your data goes straight to Notion. We don't store anything.</p>
            </article>
            
            <article className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Open Source</h3>
              <p className="text-gray-600">Fully transparent code that you can inspect, modify, and contribute to</p>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainContent;
