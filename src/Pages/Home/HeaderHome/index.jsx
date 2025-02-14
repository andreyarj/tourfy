import React from 'react';

import Logo from './../../../img/Logo.png'

import { RiDashboardFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const HeaderHome = () => {
    return (
        <>
        <header className='z-10 fixed top-0 left-0 w-full h-[100px] bg-white dark:bg-slate-dark shadow-xl hover:shadow-2xl transition .3s'>
            
            <div className='flex flex-row flex-nowrap items-center justify-between w-full t:max-w-[650px] h-full px-[20px] mx-auto'>

                <img src={Logo} alt="Logo" className='w-[40px]'/>

                <div className='hidden g:flex flex-row flex-nowrap items-center justify-center gap-[15px]'>
                
                    <Link className='hidden t:flex flex-row flex-nowrap items-center justify-center px-[10px] py-[2.5px] font-Syne font-[700] text-sky hover:text-sky-dark transition .3s'>Contato</Link>
                    
                    <Link className='hidden t:flex flex-row flex-nowrap items-center justify-center px-[10px] py-[2.5px] font-Syne font-[700] text-sky hover:text-sky-dark transition .3s'>Ofertas</Link>

                    <Link className='hidden t:flex flex-row flex-nowrap items-center justify-center px-[10px] py-[2.5px] font-Syne font-[700] text-sky hover:text-sky-dark transition .3s'>Viajar</Link>

                    <Link className='flex flex-row flex-nowrap items-center justify-center w-[120px] h-[40px] bg-sky hover:bg-sky-dark font-Syne font-[700] text-white shadow-xl hover:shadow-2xl transition .3s rounded-[200px]'>LogIn</Link>
                    
                </div>

                <button type="submit" className='g:hidden flex flex-row flex-nowrap items-center justify-center w-[50px] h-[50px] bg-white dark:bg-slate shadow-xl hover:shadow-2xl rounded-[10px] transition .3s'><RiDashboardFill className='text-sky hover:text-sky-dark text-[1.2rem] transition .3s'/></button>

            </div>

        </header>
        </>
    );
}

export default HeaderHome;
