import React from 'react';

import Logo from './../img/Logo.png';

import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HeaderPages = () => {
    return (
        <header className='flex flex-row flex-nowrap items-center justify-between z-10 fixed top-0 left-0 w-full h-[100px] px-[20px] t:px-[40px] bg-white dark:bg-slate-dark shadow-xl hover:shadow-2xl transition .3s'>
            
            <img src={Logo} alt="Icon Tourfy" className='w-[40px]'/>

            <Link to='/dashboard/profile' className='flex flex-row flex-nowrap items-center justify-center rounded-[10px] h-[40px] w-[40px] bg-white dark:bg-slate shadow-xl hover:shadow-2xl transition .3s'><FaUser className='text-sky'/></Link>

        </header>
    );
}

export default HeaderPages;