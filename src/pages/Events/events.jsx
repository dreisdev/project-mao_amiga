import "./events.css"

// import { dataEvents } from "../../Data/dataGeral";
import { useState } from "react";
import Modal from "../../components/Modal/modal";

import DataEvent_1 from "../../assets/DataEvents/Event-1.jpg";
import DataEvent_2 from "../../assets/DataEvents/Event-2.jpg";
import DataEvent_3 from "../../assets/DataEvents/Event-3.jpg";

import DataIcon from "../../assets/DataEvents/donate-icon.png";
import ImageEvents from "../../assets/event-1.jpg";

const Events = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="container-events">

            <section className="banner-project">

                <div className="text-project">

                    <h1 className="text-project-content">Eventos</h1>

                </div>

            </section>

            <section className="box-page-events">

                <div className="left-box-event">

                    <div className="content-left-box">
                        <img className="normal-size" src={DataEvent_1} alt="Tteste" />

                        <div className="box-date-title">

                            <div className="date-title">
                                <span>12 de Março, 2023</span>
                                <h2>Arrecadação de brinquedos para festa das crianças.</h2>

                            </div>

                            <img className="donate-page-events" src={DataIcon} alt="" />

                        </div>

                        <article className="text-article">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris tempus vestib ulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamc.
                            </p>
                        </article>

                        <button className="read-more">Ver mais</button>

                    </div>

                    <div className="content-left-box">
                        <img className="normal-size" src={DataEvent_2} alt="Tteste" />

                        <div className="box-date-title">

                            <div className="date-title">
                                <span>12 de Março, 2023</span>
                                <h2>Arrecadação de brinquedos para festa das crianças.</h2>

                            </div>

                            <img className="donate-page-events" src={DataIcon} alt="" />

                        </div>

                        <article className="text-article">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris tempus vestib ulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamc.
                            </p>
                        </article>

                        <button className="read-more">Ver mais</button>

                    </div>

                    <div className="content-left-box">
                        <img className="normal-size" src={DataEvent_3} alt="Tteste" />

                        <div className="box-date-title">

                            <div className="date-title">
                                <span>12 de Março, 2023</span>
                                <h2>Arrecadação de brinquedos para festa das crianças.</h2>

                            </div>

                            <img className="donate-page-events" src={DataIcon} alt="" />

                        </div>

                        <article className="text-article">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris tempus vestib ulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamc.
                            </p>
                        </article>

                        <button className="read-more">Ver mais</button>

                    </div>


                </div>

                <div className="right-box-event">

                    <div className="content-right-box">

                        <h1>Últimos Eventos</h1>



                        <div className="last-events">
                            <img className="small-size" src={DataEvent_1} alt="" />

                            <div className="last-events-content">

                                <span>
                                    Passeio ao parque da cidade
                                </span>

                                <h3>
                                    20 de Abril, 2023
                                </h3>
                            </div>
                        </div>

                        <div className="last-events">
                            <img className="small-size" src={DataEvent_1} alt="" />

                            <div className="last-events-content">

                                <span>
                                    Passeio ao parque da cidade
                                </span>

                                <h3>
                                    20 de Abril, 2023
                                </h3>
                            </div>
                        </div>

                        <div className="last-events">
                            <img className="small-size" src={DataEvent_1} alt="" />

                            <div className="last-events-content">

                                <span>
                                    Passeio ao parque da cidade
                                </span>

                                <h3>
                                    20 de Abril, 2023
                                </h3>
                            </div>
                        </div>



                        <div className="content-next-events">

                            <h1>Próximos Eventos</h1>


                            <div className="content-page-events">

                                <img className="image-page-events" src={ImageEvents} alt="image-events" />

                                <div className="box-content-events">
                                    <h2 className="title-events">Arrecadação de fundos para crianças</h2>

                                    <span className="date-events">25 de agosto de 2018</span>

                                    <span > | </span>

                                    <span className="local-events">Salão de Baile de Nova York</span>

                                    <div className="about-page-events">

                                        <a href="#" onClick={openModal}>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</p>


                                        </a>

                                        <Modal isOpen={isModalOpen} onClose={closeModal} />
                                    </div>

                                </div>


                            </div>


                        </div>
                    </div>

                </div>



            </section>



        </div>
    )
}

export default Events;