import React from 'react';

const PackagePromotional = ({ Imagem , Name , Description , ValueAnt, Porcentagem , Value }) => {
    return (
        <div className='flex flex-col flex-nowrap items-center justify-center gap-[10px] min-w-[280px] m:min-w-[300px] t:min-w-[350px] w-full h-auto p-[10px] bg-white dark:bg-slate shadow-xl hover:shadow-2xl rounded-[10px] transition .3s'>

            <div className={`w-full h-[100px] rounded-[10px] bg-[url('${Imagem}')] bg-cover bg-center`}></div>
            
            <h1 className='w-full h-auto text-left text-sky text-[1rem] g:text-[1.2rem] t:text-[1.4rem] l:text-[1.6rem] font-Syne font-[900]'>{Name}</h1>

            <p className='w-full h-[85px] m:h-[95px] text-justify font-Syne font-[700] text-[.7rem] m:text-[.8rem] t:text-[.9rem] text-slate-dark dark:text-white'>{Description}</p>

            <p className='w-full h-auto font-Syne font-[700] text-slate-dark dark:text-white text-left text-[.7rem] m:text-[.8rem] t:text-[.9rem]'>Para <span className='text-sky font-[900]'>{Name}</span> por <span className='text-sky font-[900]'>€{ValueAnt}</span> com <span className='text-red font-[900]'>{Porcentagem}%</span> de desconto por <span className='text-sky font-[900]'>€{Value}</span></p>

            <button type="submit" className='w-full h-auto font-Syne py-[15px] font-[900] bg-sky hover:bg-sky-dark transition .3s text-white rounded-[10px]'>Viajar</button>

        </div>
    );
}

export default PackagePromotional;