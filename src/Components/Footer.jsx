import logo from '../Images/01. Logo/azul/png/WRSC-logo-principal-azul.png'
import linkedin from '../Images/Fotos/linkedin.png'
import whatsapp from '../Images/Fotos/whatsapp.png'

function Footer() {
    return (
        <>
            <footer class="footer" id="contato">
                <div class="footer-content">
                    <div class="footer-logo">
                        <img src={logo} alt="WRS Consulting Logo"/>
                        <h3>Microsoft Partner</h3>
                    </div>
                    <div class="footer-contact">
                        <h3>Contato</h3>
                        <p><strong>Telefone:</strong> (11) 98801-3288</p>
                        <p><strong>Email:</strong> contato@wrsc.com.br</p>
                    </div>
                    <div class="footer-social">
                        <h3>Redes Sociais</h3>
                        <a href="https://www.linkedin.com/company/wr-br/mycompany/" target="_blank">
                            <img src={linkedin} class="social-icon"/> LinkedIn
                        </a>
                        <a href="https://web.whatsapp.com/send?phone=5511988013288" target="_blank">
                            <img src={whatsapp} alt="Wpp" class="social-icon"/> Whatsapp
                        </a>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 WRS Consulting. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;