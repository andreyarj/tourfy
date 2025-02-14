import React from 'react';

import Logo from './../../img/Logo.png';

import { FaUser } from "react-icons/fa";

const HeaderDashboard = () => {
    return (
        <header className='z-10 fixed top-0 left-0 w-full h-[100px] bg-white dark:bg-slate-dark shadow-xl hover:shadow-2xl transition .3s'>
            
            <div className='flex flex-row flex-nowrap items-center justify-between w-full t:max-w-[650px] h-full px-[20px] mx-auto'>

                <img src={Logo} alt="Logo" className='w-[40px]'/>

                <button type="submit" className='flex flex-row flex-nowrap items-center justify-center w-[50px] h-[50px] bg-white dark:bg-slate shadow-xl hover:shadow-2xl rounded-[10px] transition .3s'><FaUser className='text-sky hover:text-sky-dark text-[1.2rem] transition .3s'/></button>

            </div>

        </header>
    );
}

export default HeaderDashboard;