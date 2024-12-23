import React from 'react';

const FaqHome = ({Title, Paragraf}) => {
    return (
        <>
        <div className='flex flex-col flex-nowrap items-center justify-center gap-[5px] w-full p-[10px] bg-white dark:bg-slate shadow-xl hover:shadow-2xl rounded-[10px] transition .3s'>

            <h1 className='w-full h-auto font-Syne font-[900] text-slate-dark dark:text-white text-[1rem] g:text-[1.2rem] t:text-[1.4rem] l:text-[1.6rem]'>{Title}</h1>

            <div className='w-[70%] h-[4px] bg-sky rounded-lg'></div>

            <p className='w-full h-auto font-Syne font-[700] text-justify text-slate-dark dark:text-white text-[.8rem] g:text-[.9rem] t:text-[1rem]'>{Paragraf}</p>

        </div>
        </>
    );
}

export default FaqHome;
