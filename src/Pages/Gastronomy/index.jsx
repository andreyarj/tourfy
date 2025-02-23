import React from 'react';

import HeaderGastronomy from './HeaderGastronomy';
import WelcomePages from './../../Comps/WelcomePages';
import Scroll from '../../Comps/Scroll';
import Package from '../../Comps/Package';
import Categories from './../../Comps/Categories';

import PAR from './../../img/Paises/França/Paris.jpg';
import LYO from './../../img/Paises/França/Lyon.jpg';
import MAR from './../../img/Paises/França/Marselha.jpg';

import MIL from './../../img/Paises/Italia/Milão.jpg';
import PAL from './../../img/Paises/Italia/Palermo.jpg';
import NAP from './../../img/Paises/Italia/Nápoles.jpg';

import MAD from './../../img/Paises/Espanha/Madrid.jpg';
import BAR from './../../img/Paises/Espanha/Barcelona.jpg';
import SEV from './../../img/Paises/Espanha/Sevilha.jpg';

import BUD from './../../img/Paises/Hungria/Budapeste.jpg';
import DEB from './../../img/Paises/Hungria/Debrecen.jpg';
import MIS from './../../img/Paises/Hungria/Miskolc.jpg';

const Gastronomy = () => {
    return (
        <>
        <HeaderGastronomy />
        <WelcomePages Title='Ola User, Seja bem vindo!' Description='As Melhores cidades para viajar e experimentar seus vinhos e gastronomias.'/>
        <Scroll Title='Gastronomia França' IdSection='gastronomyfrance' Content={
            <>
                <Package Imagem={PAR} Name='Paris' Description='Capital icônica da França, Paris é conhecida por sua elegância, moda, gastronomia requintada e pontos turísticos como a Torre Eiffel e o Louvre.' Value='1500'/>    
                <Package Imagem={LYO} Name='Lyon' Description='Cidade histórica e gastronômica, Lyon é famosa por sua culinária, ruas charmosas e influência romana.' Value='900'/>
                <Package Imagem={MAR} Name='Marselha' Description='Cidade portuária com forte influência multicultural, Marselha tem um lado charmoso, mas também enfrenta problemas sociais.' Value='600'/>
            </>
        }/>

        <Scroll Title='Gastronomia Italiana' IdSection='gastronomyitaliane' Content={
            <>
                <Package Imagem={MIL} Name='Milão' Description='Milão é a capital da moda e do luxo na Itália, conhecida por suas boutiques exclusivas, gastronomia refinada e arquitetura imponente.' Value='1.300'/>
                <Package Imagem={NAP} Name='Nápoles' Description='Nápoles é uma cidade vibrante e autêntica, famosa por sua pizza, seu centro histórico e suas belas paisagens à beira-mar.' Value='1.000'/>
                <Package Imagem={PAL} Name='Palermo' Description='Palermo, na Sicília, é uma cidade histórica com belas praias, mercados de rua e uma culinária rica, mas enfrenta desafios econômicos.' Value='800'/>
            </>
        }/>

        <Scroll Title='Gastronomia Espanhola' IdSection='gastronomyespanha' Content={
            <>
                <Package Imagem={BAR} Name='Barcelona' Description='Barcelona é famosa por suas, praias deslumbrantes e vida noturna vibrante, combinando tradição e modernidade em uma cidade de classe mundial.' Value='1.200'/>
                <Package Imagem={MAD} Name='Madrid' Description='A capital espanhola é rica em cultura e história, com atrações como o Museu do Prado, o Palácio Real e uma vida urbana animada.' Value='1.000'/>
                <Package Imagem={SEV} Name='Sevilha' Description='Sevilha é uma cidade histórica cheia de charme, com belas praças, flamenco e a impressionante arquitetura da Alhambra.' Value='700'/>
            </>
        }/>

        <Scroll Title='Gastronomia Hungriana' IdSection='gastronomyHungriana' Content={
            <>
                <Package Imagem={BUD} Name='Budapeste' Description='Budapeste, a capital da Hungria, é um destino sofisticado com hotéis luxuosos, banhos termais elegantes e restaurantes refinados.' Value='1.000'/>
                <Package Imagem={DEB} Name='Debrecen' Description='Debrecen é uma cidade universitária e cultural, com atrações históricas e custo de vida acessível.' Value='700'/>
                <Package Imagem={MIS} Name='Miskolc' Description='Miskolc é uma cidade com custo de vida baixo, rica em belezas naturais e atrações históricas.' Value='700'/>
            </>
        }/>

        <Categories />

        </>
    );
}

export default Gastronomy;