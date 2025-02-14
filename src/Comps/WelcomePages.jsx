import React from 'react';

const WelcomePages = ({Title, Description }) => {
    return (
        <div className='w-full t:max-w-[650px] h-auto mx-auto px-[20px] py-[30px]'>

            <h1 className='w-full h-auto font-Syne font-[900] text-sky text-left text-[1rem] g:text-[1.2rem] t:text-[1.4rem] l:text-[1.6rem]' >{Title}</h1>

            <p className='w-full h-auto font-Syne font-[700] text-slate-dark dark:text-white text-left text-[.7rem] m:text-[.8rem] t:text-[.9rem]'>{Description}</p>
            
        </div>
    );
}

export default WelcomePages;