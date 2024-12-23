import React from 'react';

import FaqHome from './FaqHome';

const FaqsHome = () => {
    return (
        <>
        <section id="Faqs" className='w-full h-auto bg-white dark:bg-slate-dark'>

            <div className='flex flex-col flex-nowrap items-center justify-center gap-[20px] w-full t:max-w-[650px] h-auto mx-auto px-[20px] py-[30px]'>

                <FaqHome Title='O que faço se meu voo for cancelado?' Paragraf='Entre em contato com a companhia aérea para remarcar ou pedir reembolso, Ter um seguro viagem também ajuda nessas situações.'/>

                <FaqHome Title='Viajem com crianças devo me preocupar?' Paragraf='Não, Criamos uma seção especial com sugestões de destinos familiares, Atividades para crianças e dicas práticas para tornar a viagem confortável para toda a família.'/>

                <FaqHome Title='É seguro viajar sozinho?' Paragraf='Sim, Com planejamento adequado e atenção às medidas de segurança, Viajar sozinho pode ser uma experiência incrível, Confira nossas dicas específicas para viajantes.'/>

                <FaqHome Title='Promoções de passagens aéreas aqui?' Paragraf='Sim, Atualizamos frequentemente nossas promoções e descontos exclusivos em passagens aéreas, Tanto nacionais quanto internacionais.'/>

            </div>

        </section>
        </>
    );
}

export default FaqsHome;
