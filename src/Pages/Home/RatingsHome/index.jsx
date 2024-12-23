import React from 'react';

import RatingHome from './RatingHome';

import RatingIcon from './../../../img/Ratings/User.jpg';
import RatingIcon2 from './../../../img/Ratings/User2.jpg';
import RatingIcon3 from './../../../img/Ratings/User3.jpg';
import RatingIcon4 from './../../../img/Ratings/User4.jpg';

const RatingsHome = () => {
    return (
        <>
        <section id="Ratings" className='w-full h-auto bg-white'>

            <div className='scroll-pl-[20px] snap-mandatory snap-x overflow-x-scroll flex flex-row flex-nowrap items-center justify-start gap-[20px] w-full t:max-w-[650px] h-auto mx-auto px-[20px] py-[30px]'>

                <RatingHome Icon={RatingIcon} Name='Julia' Surname='Martins' Paragraf='O site é fantástico! Consegui organizar toda a minha viagem com facilidade, Me ajudaram a economizar tempo e dinheiro, Recomendo demais!'/>

                <RatingHome Icon={RatingIcon2} Name='Camila' Surname='Souza' Paragraf='As sugestões de destinos foram perfeitas! Encontrei lugares que nunca teria pensado em visitar, Vocês transformaram minha viagem em uma experiência inesquecível!'/>

                <RatingHome Icon={RatingIcon3} Name='Ricardo' Surname='Oliveira' Paragraf='Simplesmente incrível! As promoções de passagens e hotéis são imperdíveis, E o suporte ao cliente foi muito atencioso, Já virei fã!'/>

                <RatingHome Icon={RatingIcon4} Name='Felipe' Surname='Santana' Paragraf='Muito obrigado por todo o conteúdo de qualidade, Planejei uma viagem dos sonhos usando o site e tudo saiu perfeito, Com certeza voltarei aqui para as próximas aventuras!'/>

            </div>

        </section>
        </>
    );
}

export default RatingsHome;
