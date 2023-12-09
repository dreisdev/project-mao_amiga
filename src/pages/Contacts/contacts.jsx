import "./contacts.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "react-router-dom";

const Contacts = () => {
    return (

        <div className="container-contacts">

            <section className="banner-project">

                <div className="text-project">

                    <h1 className="text-project-content">Contato</h1>

                </div>

            </section>

            <main className="box-contacts">

                <div className="left-box-contacts">

                    <h1 className="contacts-title">Entre em contato conosco</h1>

                    <p className="contacts-text">
                        Ficou interessado em algum projeto, entre em contato conosco e saiba como pode ajudar.

                    </p>

                    <div className="contacts-icons">

                        <NavLink to="https://www.facebook.com/maoamiga.ywam/" target="_blank">
                            <FontAwesomeIcon className="facebook-page-contacts" icon={faFacebook} />
                        </NavLink>

                        <NavLink to="https://www.instagram.com/maoamiga_aquiraz/" target="_blank">
                            <FontAwesomeIcon className="instagram-page-contacts" icon={faInstagram} />
                        </NavLink>

                    </div>

                    <aside className="contacts-info">

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


                    </aside>



                </div>

                <div className="right-box-contacts">

                    <form className="contacts-form">

                        <input className="input-name" type="text" placeholder="Nome" />

                        <input className="input-email" type="email" placeholder="Email" />

                        <textarea className="message" name="Envie sua mensagem!" placeholder="Envie sua mensagem!"></textarea>

                        <button className="button-contact">Fale Conosco</button>



                    </form>

                </div>

            </main>

        </div>

    )
}

export default Contacts;