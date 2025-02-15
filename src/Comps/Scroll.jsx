import React from 'react';

const Scroll = ({Title, IdSection , Content }) => {
    return (
        <section id={IdSection} className='flex flex-col flex-nowrap items-center justify-center gap-[10px] w-full h-auto bg-white dark:bg-slate-dark'>

            <h1 className='w-full h-auto px-[20px] t:px-[40px] font-Syne font-[900] text-sky text-[1rem] t:text-[1.4rem]'>{Title}</h1>

            <div className='overflow-x-scroll flex flex-row flex-nowrap items-center justify-start gap-[20px] w-full h-auto pl-[20px] t:pl-[40px] px-[20px] pb-[35px]'>
                {Content}
            </div>

        </section>
    );
}

export default Scroll;