
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import React from 'react';

export default function MainDiv() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <Header />
            <Content />
            <Footer />
        </div>
    )
};