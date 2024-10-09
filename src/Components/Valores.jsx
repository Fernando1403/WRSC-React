import imgRhino from '../Images/Fotos/WhiteRhino.png'

function Valores() {
    return ( 
        <>
            <div className="white-rhino">
                <h1>Nossos Valores</h1>
                <div className="conteudo-white-rhino">
                    <div className="esquerda">
                        <h3 className="h3-rhino">WR Solutions & Consulting - Robustez, Resistência e Confiabilidade</h3>
                        <ul>
                            <li>Consultoria Especializada em Soluções de ERPS (Enterprise Resources Planning Systems) <strong>top of mind.</strong></li>
                            <li>Abrangência de todo o universo tecnológico Microsoft Dynamics 365</li>
                            <li>Equipe experiente, altamente qualificada e com abordagem centrada no sucesso dos Clientes.</li>
                        </ul>
                    </div>
                    <div className="direita">
                        <h3 className="h3-rhino">Nosso nome</h3>
                        <p>Nosso nome WR Solutions & Consulting tem como inspiração o poder e a força do Rinoceronte Branco. <strong>O W representa White e o R representa Rhino.</strong></p>
                        <p>O White Rhino é conhecido por sua estrutura de robustez, resistência e confiabilidade; características que refletem nossos Valores e a Qualidade dos nossos serviços com as Plataformas Microsoft F&O | Business Central e muito mais.</p>
                        <p>Entregamos sempre projetos robustos e confiáveis. Nossa assessoria especializada maximiza a eficiência operacional e o sucesso de cada Empreendimento.</p>
                        <p><strong>WR S&C - juntos com você, onde você estiver!</strong></p>
                    </div>
                </div>
                <img src={imgRhino} alt=""/>
            </div>
        </>
     );
}

export default Valores;