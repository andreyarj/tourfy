import React from 'react';

import Everest from './../../../img/Everest.jpg';
import { Link } from 'react-router-dom';

const WelcomeHome = () => {
    return (
        <>
        <section id="Welcome" className='w-full h-auto bg-white dark:bg-slate-dark'>

            <div className={`flex flex-col flex-nowrap items-start justify-center gap-[15px] w-full t:max-w-[650px] h-auto mx-auto px-[20px] py-[30px] bg-[url('${Everest}')] bg-cover bg-center`}>

                <h1 className='w-full h-auto font-Syne font-[900] text-white dark:text-slate-dark text-left text-[1rem] g:text-[1.2rem] t:text-[1.4rem] l:text-[1.6rem]'>Viva, Divirta, Viaje e se Liberte</h1>

                <p className='w-full h-auto font-Syne font-[700] text-white dark:text-slate-dark text-left text-[.8rem] g:text-[.9rem] t:text-[1rem]'>Somos mais do que uma empresa de viagens, somos Criadores de momentos inesquecíveis, Com excelência e paixão.</p>

                <Link to='/dashboard' className='flex flex-row flex-nowrap items-center justify-center w-[120px] h-[40px] bg-white/10 dark:bg-slate/20 dark:hover:bg-slate/30 hover:bg-white/30 font-Syne font-[900] text-white dark:text-slate-dark backdrop-blur-[3px] hover:backdrop-blur-[5px] shadow-xl hover:shadow-2xl rounded-[10px] transition .3s'>Viajar</Link>

            </div>

        </section>
        </>
    );
}

export default WelcomeHome;