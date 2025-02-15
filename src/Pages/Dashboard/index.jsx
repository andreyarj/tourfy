import React from 'react';

import HeaderDashboard from './HeaderDashboard';
import Scroll from '../../Comps/Scroll';

import NAP from './../../img/Paises/Italia/Nápoles.jpg';
import MAD from './../../img/Paises/Espanha/Madrid.jpg';
import POR from './../../img/Paises/Portugal/Porto.jpg';
import BAR from './../../img/Paises/Espanha/Barcelona.jpg';
import MUN from './../../img/Paises/Alemanha/Munique.jpg';
import PAR from './../../img/Paises/França/Paris.jpg';
import INS from './../../img/Paises/Turquia/Istambul.jpg';
import RIO from './../../img/Paises/Brasil/RiodeJaneiro.jpg';
import LIS from './../../img/Paises/Portugal/Lisboa.jpg';
import CAI from './../../img/Paises/Egito/Cairo.jpg';
import LEI from './../../img/Paises/Alemanha/Leipzig.jpg';
import MIL from './../../img/Paises/Italia/Milão.jpg';

import WelcomePages from '../../Comps/WelcomePages';

import PackagePromotional from './../../Comps/PackagePromotional';
import Package from '../../Comps/Package';

const Dashboard = () => {
    return (
        <>
        <HeaderDashboard />
        <WelcomePages Title='Ola User, Seja bem vindo!' Description='Escolha seu destino e faça a melhor viajem de sua vida, Aproveite as ofertas e promoções.'/>
        <Scroll Title='Promoções' IdSection='Proms' Content={
            <>
                <PackagePromotional Imagem={NAP} Name='Nápoles' Description='Nápoles é uma cidade vibrante e autêntica, famosa por sua pizza, seu centro histórico e suas belas paisagens à beira-mar.' ValueAnt='1.000' Porcentagem='20' Value='800'/>
                <PackagePromotional Imagem={MAD} Name='Madrid' Description='A capital espanhola é rica em cultura e história, com atrações como o Museu do Prado, o Palácio Real e uma vida urbana animada.' ValueAnt='1.000' Porcentagem='15' Value='850'/>
                <PackagePromotional Imagem={POR} Name='Porto' Description='Porto é famosa pelo vinho do Porto, sua charmosa Ribeira e a icônica Ponte Dom Luís I, combinando cultura e preços acessíveis.' ValueAnt='800' Porcentagem='15' Value='680'/>
                <PackagePromotional Imagem={BAR} Name='Barcelona' Description='Barcelona é famosa por suas, praias deslumbrantes e vida noturna vibrante, combinando tradição e modernidade em uma cidade de classe mundial.' ValueAnt='1.600' Porcentagem='25' Value='1.200'/>
                <PackagePromotional Imagem={MUN} Name='Munique' Description='Munique é uma cidade sofisticada, famosa por sua arquitetura, cultura, cervejarias tradicionais e eventos luxuosos como a Oktoberfest.' ValueAnt='1.500' Porcentagem='20' Value='1.200'/>
                <PackagePromotional Imagem={PAR} Name='Paris' Description='Capital icônica da França, Paris é conhecida por sua elegância, moda, gastronomia requintada e pontos turísticos como a Torre Eiffel e o Louvre.' ValueAnt='1.500' Porcentagem='10' Value='1.350'/>
                <PackagePromotional Imagem={INS} Name='Instambul' Description='Istambul é uma cidade vibrante que une Europa e Ásia, oferecendo palácios, hotéis luxuosos e uma gastronomia requintada.' ValueAnt='1.200' Porcentagem='15' Value='1.020'/>         
            </>
        }/>

        <Scroll Title='Luxuosos' Content={
            <>
                <Package Imagem={PAR} Name='Paris' Description='Capital icônica da França, Paris é conhecida por sua elegância, moda, gastronomia requintada e pontos turísticos como a Torre Eiffel e o Louvre.' Value='1500'/>    
                <Package Imagem={BAR} Name='Barcelona' Description='Barcelona é famosa por suas, praias deslumbrantes e vida noturna vibrante, combinando tradição e modernidade em uma cidade de classe mundial.' Value='1.200'/>
                <Package Imagem={RIO} Name='Rio de Janeiro' Description='O Rio de Janeiro é conhecido por suas praias mundialmente famosas, como Copacabana e Ipanema, além do Cristo Redentor e a vibrante vida noturna.' Value='1.200'/>
                <Package Imagem={LIS} Name='Lisboa' Description='Lisboa, a capital de Portugal, é uma cidade vibrante com arquitetura histórica, gastronomia requintada e bairros sofisticados como Chiado e Príncipe Real.' Value='1.100'/>
                <Package Imagem={INS} Name='Istambul' Description='Istambul é uma cidade vibrante que une Europa e Ásia, oferecendo palácios, hotéis luxuosos e uma gastronomia requintada.' Value='1.200'/>
                <Package Imagem={CAI} Name='Cairo' Description='Cairo, a capital do Egito, é um centro de luxo e história, oferecendo hotéis sofisticados, restaurantes refinados e vistas privilegiadas das Pirâmides de Gizé.' Value='1.100'/>
                <Package Imagem={MUN} Name='Munique' Description='Munique é uma cidade sofisticada, famosa por sua arquitetura, cultura, cervejarias tradicionais e eventos luxuosos como a Oktoberfest.' Value='1.500'/>
                <Package Imagem={LEI} Name='Leipzig' Description='Leipzig é uma cidade universitária e culturalmente rica, com uma vida alternativa vibrante e custo de vida acessível.' Value='1.400'/>
                <Package Imagem={MIL} Name='Milão' Description='Milão é a capital da moda e do luxo na Itália, conhecida por suas boutiques exclusivas, gastronomia refinada e arquitetura imponente.' Value='1.300'/>
            </>
        }/>
        </>
    );
}

export default Dashboard;
