import React from 'react';

import HeaderFamily from './HeaderFamily';
import WelcomePages from '../../Comps/WelcomePages';
import Scroll from '../../Comps/Scroll';
import Package from '../../Comps/Package';
import Categories from '../../Comps/Categories';

import VAN from './../../img/Paises/Canada/Vancouver.jpg';
import TOR from './../../img/Paises/Canada/Toronto.jpg';
import QUE from './../../img/Paises/Canada/QuebecCity.jpg';

import SYD from './../../img/Paises/Australia/Sydney.jpg';
import BRI from './../../img/Paises/Australia/Brisbane.jpg';
import HOB from './../../img/Paises/Australia/Hobart.jpg';

import ORL from './../../img/Paises/Eua/Orlando.jpg';
import SAN from './../../img/Paises/Eua/San Diego.jpg';
import WHA from './../../img/Paises/Eua/Washington.jpg';

import AMS from './../../img/Paises/Holanda/Amsterdam.jpg';
import ROT from './../../img/Paises/Holanda/Roterda.jpg';
import HAI from './../../img/Paises/Holanda/Haia.jpg';

const Family = () => {
    return (
        <>
        <HeaderFamily />
        <WelcomePages Title='Ola User, Seja bem vindo!' Description='As Melhores cidades para curtir e se divertir com a família.'/>
        <Scroll Title='Familiar Canada' IdSection='familycanada' Content={
            <>
                <Package Imagem={VAN} Name='Vancouver' Description='Vancouver é uma cidade moderna e sofisticada, cercada por montanhas e mar, com atividades premium para toda a família.' Value='3.200'/>    
                <Package Imagem={TOR} Name='Toronto' Description='Toronto é uma cidade multicultural com atrações para todas as idades, incluindo parques temáticos e museus interativos.' Value='1.700'/>
                <Package Imagem={QUE} Name='Quebec City' Description='Quebec City é uma cidade histórica charmosa e acessível, ideal para famílias que querem explorar a cultura francesa no Canadá.' Value='800'/>
            </>
        }/>

        <Scroll Title='Familiar Austrália' IdSection='familyaustraly' Content={
            <>
                <Package Imagem={SYD} Name='Sydney' Description='Sydney oferece praias deslumbrantes, hotéis 5 estrelas e atrações icônicas como a Ópera e a Ponte Harbour.' Value='1.800'/>    
                <Package Imagem={BRI} Name='Brisbane' Description='Brisbane tem clima quente, atrações familiares acessíveis e é porta de entrada para a famosa Gold Coast.' Value='1.200'/>
                <Package Imagem={HOB} Name='Hobart' Description='Hobart, a capital da Tasmânia, é uma cidade charmosa, cercada por montanhas e mar, com muitas atrações acessíveis para famílias.' Value='700'/>
            </>
        }/><Scroll Title='Familiar Eua' IdSection='familyeua' Content={
            <>
                <Package Imagem={ORL} Name='Orlando' Description='Orlando é o destino dos sonhos para famílias, com parques temáticos incríveis e resorts de luxo.' Value='1.900'/>    
                <Package Imagem={SAN} Name='San Diego' Description='San Diego oferece belas praias, zoológico mundialmente famoso e clima perfeito para uma viagem relaxante em família.' Value='1.100'/>
                <Package Imagem={WHA} Name='Washington' Description='Washington, D.C. é um destino familiar acessível, com museus gratuitos, monumentos históricos e belos parques.' Value='700'/>
            </>
        }/><Scroll Title='Familiar Holanda' IdSection='familyholanda' Content={
            <>
                <Package Imagem={AMS} Name='Amsterdã' Description='Amsterdã oferece uma experiência sofisticada para famílias, com canais charmosos, museus icônicos e hotéis luxuosos.' Value='1.700'/>    
                <Package Imagem={ROT} Name='Roterdã' Description='Roterdã é uma cidade moderna, com arquitetura inovadora, atrações interativas para crianças e preços acessíveis.' Value='1.300'/>
                <Package Imagem={HAI} Name='Haia' Description='Haia é uma cidade charmosa, segura e com muitas atrações gratuitas para famílias, além de estar perto da praia.' Value='700'/>
            </>
        }/>

        <Categories />

        </>
    );
}

export default Family;