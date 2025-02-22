import React from 'react';

import AL from './../img/Paises/Icons/Alemanha.png';
import AU from './../img/Paises/Icons/Australia.png';
import BR from './../img/Paises/Icons/Brasil.png';
import CA from './../img/Paises/Icons/Canada.png';
import EG from './../img/Paises/Icons/Egito.png';
import ES from './../img/Paises/Icons/Espanha.png';
import EU from './../img/Paises/Icons/Eua.png';
import FR from './../img/Paises/Icons/Franca.png';
import GR from './../img/Paises/Icons/Grecia.png';
import HO from './../img/Paises/Icons/Holanda.png';
import HU from './../img/Paises/Icons/Hungria.png';
import IT from './../img/Paises/Icons/Italia.png';
import JP from './../img/Paises/Icons/Japao.png';
import PT from './../img/Paises/Icons/Portugal.png';
import TU from './../img/Paises/Icons/Turquia.png';

import Countrie from './Countrie';

const Countries = () => {
    return (
        <section id='Countries' className='flex flex-col flex-nowrap items-center justify-center gap-[20px] w-full h-auto py-[20px] px-[20px] t:px-[40px] bg-white dark:bg-slate-dark'>

            <h1 className='w-full h-auto font-Syne font-[900] text-sky text-center text-[1rem] t:text-[1.4rem]'>Paises para Viajar</h1>

            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] w-full h-auto'>

                <Countrie Icon={AL}/>
                <Countrie Icon={AU}/>
                <Countrie Icon={BR}/>
                <Countrie Icon={CA}/>
                <Countrie Icon={EG}/>
                <Countrie Icon={ES}/>
                <Countrie Icon={EU}/>
                <Countrie Icon={FR}/>
                <Countrie Icon={GR}/>
                <Countrie Icon={HO}/>
                <Countrie Icon={HU}/>
                <Countrie Icon={IT}/>
                <Countrie Icon={JP}/>
                <Countrie Icon={PT}/>
                <Countrie Icon={TU}/>

            </div>

        </section>
    );
}

export default Countries;