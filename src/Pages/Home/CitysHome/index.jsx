import React from 'react';

import CityHome from './CityHome';

import NovaYork from './../../../img/Citys/NovaYork.jpg';
import Tokyo from './../../../img/Citys/Tokyo.jpg';
import Roma from './../../../img/Citys/Roma.jpg';
import Paris from './../../../img/Citys/Paris.jpg';
import Barcelona from './../../../img/Citys/Barcelona.jpg';
import Cairo from './../../../img/Citys/Cairo.jpg';

const CitysHome = () => {
    return (
        <>
        <section id="Citys" className='w-full h-auto bg-white dark:bg-slate-dark'>

            <div className='grid grid-cols-4 grid-rows-3 gap-[10px] w-full g:max-w-[500px] h-[330px] px-[20px] py-[30px] mx-auto'>

                <CityHome Img={NovaYork} Class='col-start-1 col-end-3 t:col-end-2 row-start-1 row-end-2 t:row-end-3'/>

                <CityHome Img={Tokyo} Class='col-start-3 col-end-5 row-start-1 row-end-2'/>

                <CityHome Img={Roma} Class='col-start-1 col-end-2 t:col-end-3 row-start-2 t:row-start-3 row-end-4 '/>

                <CityHome Img={Paris} Class='col-start-2 col-end-4 t:col-end-3 row-start-2 t:row-start-1 row-end-3'/>

                <CityHome Img={Barcelona} Class='col-start-2 t:col-start-3 col-end-4 row-start-3 t:row-start-2 row-end-4'/>

                <CityHome Img={Cairo} Class='col-start-4 col-end-5 row-start-2 row-end-4'/>

            </div>

        </section>
        </>
    );
}

export default CitysHome;