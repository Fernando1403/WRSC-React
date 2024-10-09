import Hero from '../Components/Hero'
import Dynamics from '../Components/Dynamics';
import Sobre from '../Components/Sobre';
import Cases from '../Components/Cases';
import Solucao from '../Components/Solucao';
import Valores from '../Components/Valores';
import Equipe from '../Components/Equipe';
import Comercial from '../Components/Comercial';

function Home() {
    return ( 
        <>
            <Hero/>
            <Dynamics/>
            <Sobre/>
            <Cases/>
            <Solucao/>
            <Valores/>
            <Equipe/>
            <Comercial/>
        </>
     );
}

export default Home;