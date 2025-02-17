import React from 'react';

import HeaderDashboard from './HeaderDashboard';
import Scroll from '../../Comps/Scroll';

import MAD from './../../img/Paises/Espanha/Madrid.jpg';
import BAR from './../../img/Paises/Espanha/Barcelona.jpg';
import SEV from './../../img/Paises/Espanha/Sevilha.jpg';

import MUN from './../../img/Paises/Alemanha/Munique.jpg';
import LEI from './../../img/Paises/Alemanha/Leipzig.jpg';
import COL from './../../img/Paises/Alemanha/Colônia.jpg';

import PAR from './../../img/Paises/França/Paris.jpg';
import LYO from './../../img/Paises/França/Lyon.jpg';
import MAR from './../../img/Paises/França/Marselha.jpg';

import INS from './../../img/Paises/Turquia/Istambul.jpg';
import ESM from './../../img/Paises/Turquia/Esmirna.jpg';
import DIY from './../../img/Paises/Turquia/Diyarbakır.jpg';

import RIO from './../../img/Paises/Brasil/RiodeJaneiro.jpg';
import SAL from './../../img/Paises/Brasil/Salvador.jpg';
import REC from './../../img/Paises/Brasil/Recife.jpg';

import LIS from './../../img/Paises/Portugal/Lisboa.jpg';
import POR from './../../img/Paises/Portugal/Porto.jpg';
import SET from './../../img/Paises/Portugal/Setubal.jpg';

import CAI from './../../img/Paises/Egito/Cairo.jpg';
import LUX from './../../img/Paises/Egito/Luxor.jpg';
import ALE from './../../img/Paises/Egito/Alexandria.jpg';

import MIL from './../../img/Paises/Italia/Milão.jpg';
import PAL from './../../img/Paises/Italia/Palermo.jpg';
import NAP from './../../img/Paises/Italia/Nápoles.jpg';

import WelcomePages from '../../Comps/WelcomePages';

import PackagePromotional from './../../Comps/PackagePromotional';
import Package from '../../Comps/Package';
import Categories from '../../Comps/Categories';
import Countries from '../../Comps/Countries';

const Dashboard = () => {
    return (
        <>
        <HeaderDashboard />
        <WelcomePages Title='Ola User, Seja bem vindo!' Description='Escolha seu destino e faça a melhor viajem de sua vida, Aproveite as ofertas e promoções.'/>
        <Scroll Title='Promoções' IdSection='proms' Content={
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

        <Scroll Title='Luxuosos' IdSection='luxurious' Content={
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

        <Scroll Title='Requintados' IdSection='exquisite' Content={
            <>
                <Package Imagem={LYO} Name='Lyon' Description='Cidade histórica e gastronômica, Lyon é famosa por sua culinária, ruas charmosas e influência romana.' Value='900'/>
                <Package Imagem={MAD} Name='Madrid' Description='A capital espanhola é rica em cultura e história, com atrações como o Museu do Prado, o Palácio Real e uma vida urbana animada.' Value='1.000'/>
                <Package Imagem={POR} Name='Porto' Description='Porto é famosa pelo vinho do Porto, sua charmosa Ribeira e a icônica Ponte Dom Luís I, combinando cultura e preços acessíveis.' Value='800'/>
                <Package Imagem={ESM} Name='Esmirna' Description='Esmirna é uma cidade costeira moderna e histórica, com mercados vibrantes, belas paisagens e excelente custo-benefício.' Value='750'/>
                <Package Imagem={NAP} Name='Nápoles' Description='Nápoles é uma cidade vibrante e autêntica, famosa por sua pizza, seu centro histórico e suas belas paisagens à beira-mar.' Value='1.000'/>
                <Package Imagem={PAL} Name='Palermo' Description='Palermo, na Sicília, é uma cidade histórica com belas praias, mercados de rua e uma culinária rica, mas enfrenta desafios econômicos.' Value='800'/>
                <Package Imagem={ALE} Name='Alexandria' Description='Alexandria é uma cidade costeira com uma rica herança greco-romana, belas praias e uma atmosfera acessível para turistas.' Value='800'/>
                <Package Imagem={LUX} Name='Luxor' Description='Luxor é um dos maiores museus a céu aberto do mundo, com templos e tumbas antigas, sendo um destino acessível para viajantes econômicos.' Value='800'/>
            </>
        }/>

        <Scroll Title='Econômicos' IdSection='economic' Content={
            <>
                <Package Imagem={MAR} Name='Marselha' Description='Cidade portuária com forte influência multicultural, Marselha tem um lado charmoso, mas também enfrenta problemas sociais.' Value='600'/>
                <Package Imagem={SEV} Name='Sevilha' Description='Sevilha é uma cidade histórica cheia de charme, com belas praças, flamenco e a impressionante arquitetura da Alhambra.' Value='700'/>
                <Package Imagem={SAL} Name='Salvador' Description='Salvador é uma cidade vibrante, com uma rica herança afro-brasileira, praias encantadoras e uma vida cultural marcante.' Value='600'/>
                <Package Imagem={REC} Name='Recife' Description='Recife é uma cidade histórica com praias bonitas, mas também enfrenta desafios sociais, oferecendo uma boa opção econômica para os viajantes.' Value='600'/>
                <Package Imagem={SET} Name='Setubal' Description='Setúbal é uma cidade portuária próxima a Lisboa, conhecida por suas praias, mercados de peixe e custo de vida acessível.' Value='500'/>
                <Package Imagem={DIY} Name='Diyarbakır' Description='Diyarbakır é uma cidade histórica no sudeste da Turquia, com fortalezas antigas e uma forte influência cultural curda.' Value='300'/>
                <Package Imagem={COL} Name='Colônia' Description='Colônia é uma cidade histórica e animada, famosa por sua catedral gótica, suas cervejas Kölsch e um custo de vida moderado.' Value='700'/>
            </>
        }/>

        <Categories />

        <Countries />

        </>
    );
}

export default Dashboard;
