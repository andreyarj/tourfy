import React from 'react';

import Logo from './../../../img/Logo.png'

import { RiDashboardFill } from "react-icons/ri";

const HeaderHome = () => {
    return (
        <>
        <header className='z-10 fixed top-0 left-0 w-full h-[100px] bg-white dark:bg-slate-dark shadow-xl hover:shadow-2xl transition .3s'>
            
            <div className='flex flex-row flex-nowrap items-center justify-between w-full t:max-w-[650px] h-full px-[20px] mx-auto'>

                <img src={Logo} alt="Logo" className='w-[40px]'/>

                <div className='hidden t:flex flex-row flex-nowrap items-center justify-center gap-[15px]'>
                
                    <a href="##" className='font-Syne font-[700] text-slate-dark dark:text-white text-[1rem] px-[10px] py[3px] border-b-[3px] border-sky hover:border-sky-dark transition .3s'>Ofertas</a>
                
                    <a href="##" className='font-Syne font-[700] text-slate-dark dark:text-white text-[1rem] px-[10px] py[3px] border-b-[3px] border-sky hover:border-sky-dark transition .3s'>Sobre</a>
                
                    <a href="##" className='font-Syne font-[700] text-slate-dark dark:text-white text-[1rem] px-[10px] py[3px] border-b-[3px] border-sky hover:border-sky-dark transition .3s'>Contatos</a>
                
                    <a href="##" className='flex flex-row flex-nowrap items-center justify-center w-[120px] h-[40px] bg-sky hover:bg-sky-dark font-Syne font-[700] text-white text-[1rem] shadow-xl hover:shadow-2xl rounded-[20px] transition .3s'>Viajar</a>

                </div>

                <button type="submit" className='t:hidden flex flex-row flex-nowrap items-center justify-center w-[50px] h-[50px] bg-white dark:bg-slate shadow-xl hover:shadow-2xl rounded-[10px] transition .3s'><RiDashboardFill className='text-sky hover:text-sky-dark text-[1.2rem] transition .3s'/></button>

            </div>

        </header>
        </>
    );
}

export default HeaderHome;
