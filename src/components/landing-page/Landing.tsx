import React from 'react';
import Body from './body/Body';
import Header from './header/Header';
import Footer from './footer/Footer';

const Landing: React.FC<{}> = () => {
    return <div>
        <Header />
        <Body />
        <Footer />
    </div>;
};

export default Landing;