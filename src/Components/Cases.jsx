import imgCard1 from '../Images/Fotos/Agro.jpg'
import imgCard2 from '../Images/Fotos/Industria.jpg'
import imgCard3 from '../Images/Fotos/Saude.jpg'
import imgCard4 from '../Images/Fotos/SaudeEmpresarial.jpg'
import imgCard5 from '../Images/Fotos/Financeira.jpg'
import imgCard6 from '../Images/Fotos/Telecom.jpg'

function Cases() {
    return ( 
        <>
            <section className="cases" id="cases">
                <h2>Cases</h2>
                <div className="case-card-list">
                    {/* <!-- 1o. card --> */}
                    <div className="case-card-item">
                        <a href="">
                            <img src={imgCard1} alt=""/>
                        </a>
                        <h3>Agro</h3>           
                    </div>
                    {/* <!-- FIM 1o. card -->
                    <!-- 2o. card --> */}
                    <div className="case-card-item">
                        <a href="">
                            <img src={imgCard2} alt=""/>
                        </a>
                        <h3>Industria</h3>                 
                    </div>
                    {/* <!-- FIM 2o. card -->
                    <!-- 3o. card --> */}
                    <div className="case-card-item">
                        <a href="">
                            <img src={imgCard3} alt=""/>
                        </a>
                        <h3>Saúde</h3>
                    </div>
                    {/* <!-- FIM 3o. card -->
                    <!-- 4o. card --> */}
                    <div className="case-card-item">
                        <a href="">
                            <img src={imgCard4} alt=""/>
                        </a>
                        <h3>Saúde: Empresas</h3>           
                    </div>
                    {/* <!-- FIM 4o. card -->
                    <!-- 5o. card --> */}
                    <div className="case-card-item">
                        <a href="">
                            <img src={imgCard5} alt=""/>
                        </a>
                        <h3>Solução Financeira</h3>                 
                    </div>
                    {/* <!-- FIM 5o. card -->
                    <!-- 6o. card --> */}
                    <div className="case-card-item">
                        <a href="">
                            <img src={imgCard6} alt=""/>
                        </a>
                        <h3>Telecom</h3>
                    </div>
                    {/* <!-- FIM 6o. card --> */}
                </div>
            </section>
        </>
     );
}

export default Cases;