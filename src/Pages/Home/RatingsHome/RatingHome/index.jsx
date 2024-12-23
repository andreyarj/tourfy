import React from 'react';

const RatingHome = ({Icon, Name, Surname, Paragraf}) => {
    return (
        <>
        <div className='snap-start flex flex-col flex-nowrap items-center justify-start gap-[5px] min-w-[280px] g:min-w-[320px] t:min-w-[350px] h-[170px] g:min-h-[180px] t:min-h-[200px] p-[10px] bg-white dark:bg-slate shadow-xl hover:shadow-2xl rounded-[10px] transition .3s'>

            <div className='flex flex-row flex-nowrap items-center justify-center gap-[10px] w-full h-auto'>

                <img src={Icon} alt="Icon Rating" className='w-[45px] t:min-w-[50px] rounded-[100px]'/>

                <div className='flex flex-col flex-nowrap items-center justify-center w-full h-auto'>

                    <h1 className='w-full h-auto font-Syne font-[900] text-sky text-left text-[1rem] g:text-[1.2rem] t:text-[1.4rem] l:text-[1.6rem]'>{Name}</h1>

                    <h2 className='w-full h-auto font-Syne font-[700] text-slate-dark dark:text-white text-left text-[.8rem] g:text-[.9rem] t:text-[1rem]'>{Surname}</h2>

                </div>

            </div>

            <p className='w-full h-full font-Syne font-[700] text-slate-dark dark:text-white text-justify text-[.8rem] g:text-[.9rem] t:text-[1rem]'>{Paragraf}</p>

        </div>
        </>
    );
}

export default RatingHome;
