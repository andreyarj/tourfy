import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <>
        <section id='categories' className='flex flex-row flex-wrap items-start justify-start gap-[20px] w-full h-auto px-[20px] t:px-[40px] py-[20px] bg-white dark:bg-slate-dark'>

            <Link to='/dashboard/gastronomy' className='w-auto h-auto px-[30px] py-[12.5px] bg-white dark:bg-slate rounded-[100px] font-Syne font-[900] text-sky hover:text-sky-dark text-[1rem] t:text-[1.4rem] shadow-md hover:shadow-xl transition .3s'>Gastronomia</Link>
            
            <Link to='/dashboard/history' className='w-auto h-auto px-[30px] py-[12.5px] bg-white dark:bg-slate rounded-[100px] font-Syne font-[900] text-sky hover:text-sky-dark text-[1rem] t:text-[1.4rem] shadow-md hover:shadow-xl transition .3s'>Historia</Link>
            
            <Link to='/dashboard/family' className='w-auto h-auto px-[30px] py-[12.5px] bg-white dark:bg-slate rounded-[100px] font-Syne font-[900] text-sky hover:text-sky-dark text-[1rem] t:text-[1.4rem] shadow-md hover:shadow-xl transition .3s'>Família</Link>

        </section>
        </>
    );
}

export default Categories;