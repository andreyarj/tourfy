import React from 'react';

import RatingHome from './RatingHome';

import RatingIcon from './../../../img/Ratings/User.jpg'

const RatingsHome = () => {
    return (
        <>
        <section id="Ratings" className='w-full h-auto bg-white'>

            <div className='scroll-pl-[20px] snap-mandatory snap-x overflow-x-scroll flex flex-row flex-nowrap items-center justify-start gap-[20px] w-full t:max-w-[650px] h-auto mx-auto px-[20px] py-[30px]'>

                <RatingHome Icon={RatingIcon} Name='Julia' Surname='Martins' Paragraf='O site é fantástico! Consegui organizar toda a minha viagem com facilidade, Me ajudaram a economizar tempo e dinheiro, Recomendo demais!'/>

                <RatingHome Icon={RatingIcon} Name='Julia' Surname='Martins' Paragraf='O site é fantástico! Consegui organizar toda a minha viagem com facilidade, Me ajudaram a economizar tempo e dinheiro, Recomendo demais!'/>

                <RatingHome Icon={RatingIcon} Name='Julia' Surname='Martins' Paragraf='O site é fantástico! Consegui organizar toda a minha viagem com facilidade, Me ajudaram a economizar tempo e dinheiro, Recomendo demais!'/>

                <RatingHome Icon={RatingIcon} Name='Julia' Surname='Martins' Paragraf='O site é fantástico! Consegui organizar toda a minha viagem com facilidade, Me ajudaram a economizar tempo e dinheiro, Recomendo demais!'/>

            </div>

        </section>
        </>
    );
}

export default RatingsHome;
