import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo-mao-amiga.png"
import './header.css'

const Header = () => {

    const toggleMenu = () => {
        const menu = document.querySelector(".site-pages-mobile")
        menu.style.display = menu.style.display === "none" ? "block" : "none"
    };
    return (
        <header className="container-header">



            <div className="site-logo">

                <img src={Logo} alt="logo" />

            </div>

            <div className="site-pages" >

                <ul>
                    <li >

                        <NavLink to="/">
                            Página Inicial
                        </NavLink>

                    </li>

                    <li >

                        <NavLink to="/about">
                            Sobre Nós
                        </NavLink>

                    </li>
                    <li >

                        <NavLink to="/projects">
                            Projetos
                        </NavLink>

                    </li>
                    <li >

                        <NavLink to="/gallery">
                            Galeria
                        </NavLink>

                    </li>
                    <li >

                        <NavLink to="/events">
                            Eventos
                        </NavLink>

                    </li>
                    <li >

                        <NavLink to="/contacts">
                            Contato
                        </NavLink>

                    </li>

                </ul>

            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>


            </div>

            <div className="site-pages-mobile" onClick={toggleMenu}>

                <ul>
                    <li >

                        <NavLink to="/">
                            Página Inicial
                        </NavLink>

                    </li>

                    <li >

                        <NavLink to="/about">
                            Sobre Nós
                        </NavLink>

                    </li>
                    <li >

                        <NavLink to="/projects">
                            Projetos
                        </NavLink>

                    </li>
                    <li >

                        <NavLink to="/gallery">
                            Galeria
                        </NavLink>

                    </li>
                    <li >

                        <NavLink to="/events">
                            Eventos
                        </NavLink>

                    </li>
                    <li >

                        <NavLink to="/contacts">
                            Contato
                        </NavLink>

                    </li>

                </ul>

            </div>




        </header>

    )
}

export default Header;