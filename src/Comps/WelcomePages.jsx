import React from 'react';

const WelcomePages = ({Title, Description }) => {
    return (
        <section id='Welcome' className='w-full h-auto px-[20px] t:px-[40px] py-[20px] bg-white dark:bg-slate-dark'>

            <h1 className='w-full h-auto font-Syne font-[900] text-[1rem] t:text-[1.4rem] text-sky text-left' >{Title}</h1>

            <p className='w-full h-auto font-Syne font-[700] text-[.8rem] t:text-[1rem] text-slate-dark dark:text-white text-left' >{Description}</p>

        </section>
    );
}

export default WelcomePages;