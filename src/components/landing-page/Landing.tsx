//make tempate tsx file

import React from 'react';
import Body from './body/Body';
import Header from './header/Header';

const Landing: React.FC<{}> = () => {
    return <div>
        <Header />
        <Body />
    </div>;
};

export default Landing;