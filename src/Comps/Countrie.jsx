import React from 'react';

const Countrie = ({Icon}) => {
    return (
        <>
        <button type="submit" className='p-[15px] bg-white dark:bg-slate rounded-[100px] shadow-md hover:shadow-lg transition .3s'><img src={Icon} alt="Icon" className='w-[35px]'/></button>
        </>
    );
}

export default Countrie;