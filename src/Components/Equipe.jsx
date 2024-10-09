import imgEquipe from '../Images/Fotos/Equipe.png'

function Equipe() {
    return ( 
        <>
            <div class="equipe">
                <h2 class="equipe-h2">EQUIPE</h2>
                <div class="conteudo-white-rhino">
                    <div class="esquerda">
                        <h2>EQUIPE DE EXCELÊNCIA PARA ENTREGA DE PROJETOS DE SISTEMAS:</h2>
                        <p>A <strong style={{color: "#3333ff"}}>WRSC</strong> conta com um time de excelência, com plena atuação nos variados Projetos Entregues e em Andamento.</p>
                        <p>Nossos profissionais compõem um time vencedor, certificados e de alta performance formado por especialistas mas, com habilidades que se complementam. </p>
                        <p>Compartilham de uma única visão pró-resultados e têm os mesmos objetivos nos compromissos integrados sob responsabilidade da <strong style={{color: "#3333ff"}}>WRSC</strong>.</p>
                        <p>Juntos, são profissionais de alta performance, que colaboram e se desafiam, para produzir um trabalho final muito acima do comum trazendo um dos mais importantes diferenciais competitivos em nossos projetos.</p>
                    </div>
                    <div class="direita">
                        <img src={imgEquipe} alt=""/>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Equipe;