import React from 'react';

import HeaderHome from './HeaderHome';
import WelcomeHome from './WelcomeHome';
import AboutHome from './AboutHome';
import CitysHome from './CitysHome';
import FaqsHome from './FaqsHome';
import RatingsHome from './RatingsHome';

const Home = () => {
    return (
        <>
        <HeaderHome />
        <WelcomeHome />
        <CitysHome />
        <AboutHome />
        <FaqsHome />
        <RatingsHome />
        </>
    );
}

export default Home;