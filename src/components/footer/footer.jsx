import './footer.css';
import '../../css/style.css';
import '../../css/bootstrap.css';
import '../../css/font-awesome.css';

import Foot_Logo from '../../assets/logo-mao-amiga.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../utils/fontAwesomeIcons'
import { faEnvelope, faHeart, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';





const footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <footer className="site-footer">
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="foot-about">
                                <h2><a className="foot-logo" href="#"> <img className="logo-foot" src={Foot_Logo} alt /> </a></h2>
                                {/* <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris temp us vestib ulum
                                            mauris.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib
                                            ulum mauris.Lorem ipsum dolo.</p> */}
                                <ul className="d-flex flex-wrap align-items-center">
                                    <li><a href="https://www.instagram.com/maoamiga_aquiraz/"><FontAwesomeIcon icon={faInstagram} className="fa fa-pinterest-p" /></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faFacebook} className="fa fa-facebook" /></a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                            <h2>Links</h2>
                            <ul>
                                <li><a href="#">Política de Privacidade</a></li>
                                <li><a href="#">Venha ser um voluntário</a></li>
                                <li><a href="#">Doação</a></li>
                                <li><a href="#">Testemunhos</a></li>
                                <li><a href="#">Causas</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Eventos</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                            <div className="foot-latest-news">
                                <h2>Últimos Eventos</h2>
                                <ul>
                                    <li>
                                        <h3><a href="#">A new cause to help</a></h3>
                                        <div className="posted-date">MArch 12, 2018</div>
                                    </li>
                                    <li>
                                        <h3><a href="#">We love to help people</a></h3>
                                        <div className="posted-date">MArch 12, 2018</div>
                                    </li>
                                    <li>
                                        <h3><a href="#">The new ideas for helping</a></h3>
                                        <div className="posted-date">MArch 12, 2018</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                            <div className="foot-contact">
                                <h2>Contato</h2>
                                <ul>
                                    <li> <FontAwesomeIcon icon={faPhone} className="fa fa-phone" /> <span>+55 85 98816-1197</span></li>
                                    <li> <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope" /> <span>maoamiga@email.com</span>
                                    </li>
                                    <li> <FontAwesomeIcon icon={faMapMarked} className="fa fa-map-marker" /><span>Chacara da prainha 61700-000 Aquiraz, CE</span></li>
                                </ul>
                            </div>
                            <div className="subscribe-form">
                                <form className="d-flex flex-wrap align-items-center">
                                    <input type="email" placeholder="Your email" />
                                    <input type="submit" value="send" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="m-0">
                                Copyright &copy;{currentYear} All rights reserved | This website was made with <FontAwesomeIcon icon={faHeart} className="fa fa-heart-o" aria-hidden="true" /> by <a
                                    href="https://github.com/dreisdev" target="_blank" rel='noreferrer'>Diego Reis</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>



    )
}

export default footer