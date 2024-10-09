import imgSobre from '../Images/Fotos/ob_about.jpg'

function Sobre() {
    return ( 
        <>
            <section className="sobre" id="sobre">
                <div className="sobre-photo">
                    <img src={imgSobre} alt=""/>
                </div>
                <div className="sobre-text">
                    <h4>Sobre nós</h4>
                    <h3>Eleve sua experiência digital, sem traumas</h3>
                    <p>Com recursos atuando há mais de 15 anos no mercado, a WRS Consulting veio consolidar o expertise das melhores metodologias adaptadas ao mercado brasileiro, oferecendo soluções eficientes e personalizadas para nossos clientes. Trabalhamos incansavelmente para impulsionar o sucesso e o crescimento dos negócios por meio de estratégias inovadoras e resultados mensuráveis.</p>
                    <p>Seja qual for o desafio, estamos prontos para ajudar a alcançar o sucesso desejado.</p>
                    <a href="./pages/Sobre.html" className="btn">Descubra Mais</a>
                </div>
            </section>
        </>
     );
}

export default Sobre;