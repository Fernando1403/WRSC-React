import logo from '../Images/01. Logo/azul/png/WRSC-logo-principal-azul.png'

function Header() {
    return ( 
        <>
            <header className="header-page">
                <a href="/">
                    <img src={logo} alt=""/>
                </a>  
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="">Dynamics</a></li>
                        <li><a href="/sobre">Sobre Nós</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </>
     );
}

export default Header;