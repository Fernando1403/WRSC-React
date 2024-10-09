import img1 from '../Images/Fotos/img1.jpg'
import img2 from '../Images/Fotos/img2.jpg'
import img3 from '../Images/Fotos/img3.jpg'

function Dynamics() {
    return ( 
        <>
            <section className="dynamics" id="dynamics">
                <h2>Dynamics</h2>
                <div className="dynamics-list">
                    {/* <!-- 1o. card --> */}
                    <div className="dynamics-item">
                            <img src={img1} alt=""/>
                            <h3>Planejamento</h3>
                            <div className="dynamics-p">
                                <p>Aprimorando a organização das tarefas a serem realizadas, estabelecendo prioridades e acompanhando o progresso até sua conclusão.</p>
                            </div>           
                    </div>
                    {/* <!-- FIM 1o. card --> */}
                    {/* <!-- 2o. card --> */}
                    <div className="dynamics-item">
                            <img src={img2} alt=""/>
                            <h3>Criação e Desenvolvimento</h3>
                            <div className="dynamics-p">
                                <p>Adotando as melhores práticas e ferramentas de controle que se adequam ao seu ambiente e produto, garantindo assim a eficiência e qualidade do trabalho realizado.</p>
                            </div>                 
                    </div>
                    {/* <!-- FIM 2o. card --> */}
                    {/* <!-- 3o. card --> */}
                    <div className="dynamics-item">
                            <img src={img3} alt=""/>
                            <h3>Operação e Sustentação</h3>
                            <div className="dynamics-p">
                                <p>Gerenciando eficientemente as fases, o controle e disponibilidade dos recursos, desde o planejamento até a operação, se refletem nos resultados finais do processo. O sucesso nas implementações é alcançado, independentemente dos desafios enfrentados ao longo do caminho.</p>
                            </div>
                    </div>
                    {/* <!-- FIM 3o. card --> */}
                </div>
            </section>
        </>
     );
}

export default Dynamics;