import React from 'react';

const PackagePromotional = ({ Imagem , Name , Description , ValueAnt, Porcentagem , Value }) => {
    return (
        <div className='flex flex-col flex-nowrap items-center justify-center gap-[10px] h-auto min-w-[280px] t:min-w-[360px] p-[10px] bg-white dark:bg-slate rounded-[10px] shadow-lg hover:shadow-xl transition .3s'>

            <div className={`w-full h-[100px] rounded-[10px] bg-[url('${Imagem}')] bg-cover bg-center`}></div>

            <h1 className='w-full h-[30px] font-Syne font-[900] text-sky text-[1rem] t:text-[1.2rem]'>{Name}</h1>

            <p className='w-full h-[100px] t:h-[125px] font-Syne font-[700] text-slate-dark dark:text-white text-[.8rem] t:text-[1rem]'>{Description}</p>

            <p className='w-full h-[55px] t:h-[55px] font-Syne font-[700] text-slate-dark dark:text-white text-[.8rem] t:text-[1rem]'>Para <span className='text-sky font-[900]'>{Name}</span> por <span className='text-sky font-[900]'>€{ValueAnt}</span> com <span className='text-red font-[900]'>{Porcentagem}%</span> de desconto por <span className='text-sky font-[900]'>€{Value}</span></p>

            <button type="submit" className='w-full h-[55px] font-Syne font-[900] bg-sky hover:bg-sky-dark transition .3s text-[1rem] text-white rounded-[10px]'>Viajar</button>

        </div>
    );
}

export default PackagePromotional;