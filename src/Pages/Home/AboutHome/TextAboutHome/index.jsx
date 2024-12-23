import React from 'react';

const TextAboutHome = ({Text, Class}) => {
    return (
        <>
        <p className={`w-full h-auto font-Syne font-[700] text-slate-dark text-${Class} text-[.8rem] g:text-[.9rem] t:text-[1rem]`}>{Text}</p>
        </>
    );
}

export default TextAboutHome;
