import './footer.css'
import Logo from '../../assets/Logo-mao-amiga.png'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <>
            <div className="container-footer">

                <footer className="site-footer">

                    <div className="foot-about">



                        <div>

                            <img src={Logo} alt="Logo" />

                        </div>

                        <div>

                            <NavLink to="https://www.facebook.com/maoamiga.ywam/" target="_blank">
                                <FontAwesomeIcon className="facebook" icon={faFacebook} />
                            </NavLink>

                            <NavLink to="https://www.instagram.com/maoamiga_aquiraz/" target="_blank">
                                <FontAwesomeIcon className="instagram" icon={faInstagram} />
                            </NavLink>

                        </div>



                    </div>

                    <div className="foot-links">

                        <h2>Links</h2>

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

                    <div className="foot-latest-events">

                        <h2>Últimos Eventos</h2>

                        <div className="latest-events">
                            <span>Dias das Crianças</span>
                            <h3>Outubro, 2023</h3>
                        </div>

                        <div className="latest-events">
                            <span>Passeio Parque da Cidade</span>
                            <h3>Setembro, 2023</h3>
                        </div>

                        <div className="latest-events">
                            <span>Gincana</span>
                            <h3>Agosto, 2023</h3>
                        </div>



                    </div>

                    <div className="foot-contact">

                        <h2>Contato</h2>

                        <div className="icon">

                            <span>
                                <FontAwesomeIcon className="phone" icon={faPhone} />
                                +55 85 8888-8888
                            </span>

                        </div>

                        <div className="icon">

                            <span>
                                <FontAwesomeIcon className="envelope" icon={faEnvelope} />
                                maoamiga@email.com
                            </span>

                        </div>



                        <div className="icon">

                            <FontAwesomeIcon className="location" icon={faMapLocation} />

                            <span className="break">

                                Chacara da prainha, <br /> Aquiraz, CE, Brazil

                            </span>

                        </div>

                        <input className="input-text" type="text" placeholder="Digite seu e-mail" />
                        <input className="input-btn" type="button" value="Enviar" />

                    </div>



                </footer>

            </div>

            <footer className="site-footer-bar">

                Copyright ©{currentYear} All rights reserved | This template is made with
                <FontAwesomeIcon icon={faHeart} /> by <NavLink to="https://github.com/dreisdev" target="blank" >Diego Reis</NavLink>

            </footer>

        </>
    )
}

export default Footer;