import React from 'react';

import HeaderHistory from './HeaderHistory';
import WelcomePages from '../../Comps/WelcomePages';
import Scroll from '../../Comps/Scroll';
import Package from '../../Comps/Package';
import Categories from '../../Comps/Categories';

import TOQ from './../../img/Paises/Japao/Toquio.jpg';
import OSA from './../../img/Paises/Japao/Osaka.jpg';
import FUK from './../../img/Paises/Japao/Fukuoka.jpg';

import SAN from './../../img/Paises/Grecia/Santorini.jpg';
import TES from './../../img/Paises/Grecia/Tessalonica.jpg';
import PAT from './../../img/Paises/Grecia/Patras.jpg';

import BUD from './../../img/Paises/Hungria/Budapeste.jpg';
import DEB from './../../img/Paises/Hungria/Debrecen.jpg';
import MIS from './../../img/Paises/Hungria/Miskolc.jpg';

import MUN from './../../img/Paises/Alemanha/Munique.jpg';
import COL from './../../img/Paises/Alemanha/Colônia.jpg';
import LEI from './../../img/Paises/Alemanha/Leipzig.jpg';

const History = () => {
    return (
        <>
        <HeaderHistory />
        <WelcomePages Title='Ola User, Seja bem vindo!' Description='As Melhores cidades para visitar culturas e historias do passado.'/>
        
        <Scroll Title='Familiar Japão' IdSection='historyjapan' Content={
            <>
                <Package Imagem={TOQ} Name='Toquio' Description='Tóquio, a capital do Japão, é um destino futurista e sofisticado, com hotéis 5 estrelas, restaurantes Michelin e experiências exclusivas.' Value='1.500'/>    
                <Package Imagem={OSA} Name='Osaka' Description='Osaka é uma cidade vibrante e acessível, famosa por sua gastronomia, vida noturna e cultura animada.' Value='900'/>
                <Package Imagem={FUK} Name='Fukuoka' Description='Fukuoka é uma cidade portuária com um custo de vida baixo, conhecida por sua cultura vibrante e comida de rua acessível.' Value='700'/>
            </>
        }/>

        <Scroll Title='Familiar Greciana' IdSection='historygrecy' Content={
            <>
                <Package Imagem={SAN} Name='Santorini' Description='Santorini é um dos destinos mais luxuosos da Grécia, com hotéis sofisticados, praias deslumbrantes e vistas espetaculares do pôr do sol.' Value='1.000'/>    
                <Package Imagem={TES} Name='Tessalônica' Description='Tessalônica é uma cidade vibrante, cheia de história, praias acessíveis e uma cena gastronômica rica e diversificada.' Value='700'/>
                <Package Imagem={PAT} Name='Patras' Description='Patras é uma cidade portuária histórica, com um custo de vida baixo, festivais animados e uma atmosfera descontraída.' Value='500'/>
            </>
        }/>

        <Scroll Title='Familiar Hungriana' IdSection='gastronomyhungriana' Content={
            <>
                <Package Imagem={BUD} Name='Budapeste' Description='Budapeste, a capital da Hungria, é um destino sofisticado com hotéis luxuosos, banhos termais elegantes e restaurantes refinados.' Value='1.000'/>
                <Package Imagem={DEB} Name='Debrecen' Description='Debrecen é uma cidade universitária e cultural, com atrações históricas e custo de vida acessível.' Value='700'/>
                <Package Imagem={MIS} Name='Miskolc' Description='Miskolc é uma cidade com custo de vida baixo, rica em belezas naturais e atrações históricas.' Value='700'/>
            </>
        }/>

        <Scroll Title='Familiar Alemã' IdSection='gastronomyalemanha' Content={
            <>
                <Package Imagem={MUN} Name='Munique' Description='Munique é uma cidade sofisticada, famosa por sua arquitetura, cultura, cervejarias tradicionais e eventos luxuosos como a Oktoberfest.' Value='1.600'/>
                <Package Imagem={COL} Name='Colônia' Description='Colônia é uma cidade histórica e animada, famosa por sua catedral gótica, suas cervejas Kölsch e um custo de vida moderado.' Value='800'/>
                <Package Imagem={LEI} Name='Leipzig' Description='Leipzig é uma cidade universitária e culturalmente rica, com uma vida alternativa vibrante e custo de vida acessível.' Value='700'/>
            </>
        }/>

        <Categories />

        </>
    );
}

export default History;