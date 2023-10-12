import './header.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/font-awesome.css';
import Foot_Logo from '../../assets/logo-mao-amiga.png';


const header = () => {
    return (



        <div className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="site-branding d-flex align-items-center">
                            <a className="d-block" href="index.html" rel="home"> <img className="d-block" src={Foot_Logo}
                                alt="logo" /></a>
                        </div>
                        <nav className="site-navigation d-flex justify-content-end align-items-center">
                            <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                                <li className="current-menu-item"><a href="index.html">Página Inicial</a></li>
                                <li><a href="about.html">Sobre Nós</a></li>
                                <li><a href="causes.html">Projetos</a></li>
                                <li><a href="portfolio.html">Galeria</a></li>
                                <li><a href="news.html">Eventos</a></li>
                                <li><a href="contact.html">Contato</a></li>
                            </ul>
                        </nav>
                        <div className="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default header