import React from 'react';

import TextAboutHome from './TextAboutHome';

const AboutHome = () => {
    return (
        <>
        <section id="About" className='w-full h-auto bg-white dark:bg-slate-dark'>

            <div className='flex flex-col flex-nowrap items-center justify-center gap-[15px] w-full t:max-w-[650px] h-auto mx-auto px-[20px] py-[30px]'>

                <h1 className='w-full font-Syne font-[900] text-sky hover:text-sky-dark text-[1rem] g:text-[1.2rem] t:text-[1.4rem] l:text-[1.6rem] text-left transition .3s'>Tourfy</h1>

                <TextAboutHome Class='left' Text={<>Imagine um grupo de amigos apaixonados por explorar o mundo, Que entre aventuras pelo deserto do Saara, Trilhas nas montanhas do Himalaia e cafés em charmosos vilarejos europeus, Perceberam algo, Viajar é muito mais do que conhecer novos lugares, É sobre conectar pessoas, culturas e histórias, Foi assim, Durante uma noite estrelada ao redor de uma fogueira em um canto remoto do planeta, Que nasceu a ideia da <span className='text-sky hover:text-sky-dark font-[900] transition .3s'>Tourfy</span>.</>}/>

                <TextAboutHome Class='right' Text={<>Queríamos compartilhar essa magia com o mundo, Ajudando outros viajantes a criar momentos tão únicos quanto o Na <span className='text-sky hover:text-sky-dark font-[900] transition .3s'>Tourfy</span>, Transformar viagens internacionais em experiências inesquecíveis é o nosso propósito, Somos especialistas em traçar jornadas únicas, Personalizadas para cada aventureiro, Seja você um explorador urbano em busca das ruas vibrantes de Paris ou um amante da natureza ansioso para desbravar os fiordes noruegueses.</>}/>

                <TextAboutHome Class='left' Text={<>Cuidamos de cada detalhe com paixão e precisão do roteiro exclusivo às dicas locais que só quem conhece profundamente o destino pode oferecer, Mais do que viagens, criamos histórias para serem contadas e memórias para durar uma vida inteira, Com a <span className='text-sky hover:text-sky-dark font-[900] transition .3s'>Tourfy</span>, o mundo é seu playground, E cada viagem é uma obra-prima feita sob medida para você.</>}/>


            </div>

        </section>
        </>
    );
}

export default AboutHome;
