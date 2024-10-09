import imgComercial from '../Images/Fotos/Comercial.png'

function Comercial() {
    return ( 
        <>
            <div class="comercial">
                <h2 class="comercial-h2">COMERCIAL</h2>
                <div class="conteudo-white-rhino">
                    <div class="esquerda">
                        <img src={imgComercial} alt=""/>
                    </div>
                    <div class="direita">
                        <h2>ÁREA COMERCIAL E NOVOS NEGÓCIOS:</h2>
                        <p>A Estrutura Comercial da WRSC está sempre ao seu dispor. Atuamos com Novos Projetos e Apoio na Comunicação para <strong>SATISFAÇÃO MÁXIMA DO CLIENTE</strong> desde o primeiro contato.</p>
                        <p>Habilitados em tecnologias emergentes Microsoft e no rápido entendimento das necessidades de cada Empreendimento e seus fluxos de processos.</p>
                        <p>Capacidade analítica para compreender imediatamente as necessidades dos Sistemas Dynamics 365, propondo soluções otimizadas e <strong>custo X benefícios</strong> com foco no SLA de alto nível.</p>
                        <p>Dimensionamento e Proposta com Soluções Sistêmicas e Consultoria de Resultados Tangíveis. Analise efetiva e equilibrada com maximização do <strong>CAPEX</strong> e geração dos lucros com o mínimo <strong>OPEX</strong> em cada Cliente.</p>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Comercial;