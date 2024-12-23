import React from 'react';

const CityHome = ({Img, Class}) => {
    return (
        <>
        <div className={` bg-[url('${Img}')] bg-cover bg-center rounded-[20px] shadow-xl hover:shadow-2xl transition .3s ${Class}`}>

        </div>
        </>
    );
}

export default CityHome;
