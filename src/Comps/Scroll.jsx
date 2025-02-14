import React from 'react';

const Scroll = ({Title, Content}) => {
    return (
        <div className='flex flex-col flex-nowrap items-start justify-start gap-[10px] w-full t:max-w-[650px] h-auto mx-auto'>
            
            <h1 className='h-auto ml-[20px] font-Syne font-[900] text-sky text-left text-[1rem] g:text-[1.2rem] t:text-[1.4rem] l:text-[1.6rem]'>{Title}</h1>

            <div className='overflow-x-scroll flex flex-row flex-nowrap items-center justify-start gap-[20px] w-full h-auto pb-[30px] pl-[20px]'>
                {Content}
            </div>

        </div>
    );
}

export default Scroll;