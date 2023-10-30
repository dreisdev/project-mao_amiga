import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { dataImages, dataActivities } from "../../Data/dataGeral";

import History from "../../assets/history-bg-home.jpg";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import Modal from "../../components/Modal/modal";

import ImageEvents from "../../assets/event-1.jpg";
import ImageEvents_2 from "../../assets/featured-causes.jpg";
import ProgressBar from "react-bootstrap/esm/ProgressBar";

const Home = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const raised = 9000;
    const goal = 15880;

    const now = (raised / goal) * 100;




    return (
        <div className="container-home">

            <div className="banner-home">
                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation


                >
                    {dataImages.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Slider"
                                className="slide-item"
                            />

                            <div className="text-overlay">
                                <span className="text-home">Faça uma doação</span>

                            </div>
                            <div className="text-overlay-2">
                                <span className="text-home-2"> Contribua com nossos projetos e faça uma criança feliz.</span>
                            </div>
                            <div className="buttons-overlay">
                                <button>Botão 1 </button>
                                <button>Botão 2 </button>
                            </div>





                        </SwiperSlide>


                    ))}


                </Swiper>


            </div>

            <section className="cards-container">

                <Swiper className="swiper-cards"
                    slidesPerView={5}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}

                >

                    {dataActivities.map((item) => (

                        <SwiperSlide key={item.id}>

                            <div className="cards-projects">
                                <figure>
                                    <img className="figure-cards" src={item.image} alt="img-1" />

                                </figure>

                                <div className="title">
                                    <h3>{item.title}</h3>
                                </div>

                                <div className="content">
                                    <p>{item.content}</p>
                                </div>

                            </div>

                        </SwiperSlide>

                    ))}



                </Swiper>

            </section>

            <section className="history-container">

                <div className="content-history">

                    <div className="row-history-a">

                        <h2 className="title-history">Nossa História</h2>

                        <p className="text-content"> O Mão Amiga teve seu início no ano de 2000 visando atender uma problemática que é ainda um dos gargalos da nossa nação a educação.  Vendo a necessidade foi feito um diagnóstico junto à comunidade, buscando entender a real necessidade daquelas famílias, com esses dados vimos que por muitos pais não serem alfabetizados o desejo expressado era de apoio para as atividades escolares dos seus filhos. Assim foi iniciado o atendimento focando o reforço escolar e o apoio aos pais e a escola, buscando solucionar essa problemática.
                            De lá pra cá fomos vendo a necessidade de montar um programa para nossos atendidos e hoje além do reforço escolar de português e matemática,  oferecemos oficinas nas áreas de: informática, artesanato, inglês, futebol e muaythai. Hoje nossos atendidos fazem o reforço escolar e mais duas oficinas de acordo com seu interesse e habilidades, o que é complementado com atividades extras com saídas focando atividades culturais e de lazer.
                            Nosso atendimento se dá em contraturno escolar e com isso atendemos 60 crianças e adolescentes do 1° ao 6° ano no bairro Chácara da Prainha na cidade de Aquiraz.</p>

                        <button className="button-history"> <NavLink className="button-style" to="/about"> Saiba Mais </NavLink> </button>

                    </div>

                    <div className="row-history-b">

                        <img className="history-bg" src={History} alt="History" />

                    </div>

                </div>

            </section>

            <section className="events-container">

                <div className="box-events">

                    <div className="title-next-events"> <h1> Próximos Eventos </h1> </div>

                    <div className="box-next-events">


                        <div className="content-events">

                            <img className="image-events" src={ImageEvents} alt="image-events" />

                            <div className="box-content-events">
                                <h2 className="title-events">Arrecadação de fundos para crianças</h2>

                                <span className="date-events">25 de agosto de 2018</span>

                                <span > | </span>

                                <span className="local-events">Salão de Baile de Nova York</span>

                                <div className="about-events">

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestib ulum mauris.</p>
                                    <a href="#" onClick={openModal}>
                                        Saiba Mais
                                    </a>

                                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                                </div>

                            </div>


                        </div>

                    </div>

                </div>

                <div className="box-events-active">

                    <div className="title-next-events"> <h1> Causas em Destaque </h1> </div>

                    <div className="box-next-events">


                        <div className="content-events-2">

                            <img className="image-events" src={ImageEvents_2} alt="image-events" />

                            <div className="box-content-events">
                                <h2 className="title-events">Arrecadação de fundos para crianças</h2>

                                <span className="date-events">25 de agosto de 2018</span>

                                <span > | </span>

                                <span className="local-events">Salão de Baile de Nova York</span>

                                <div className="donate-events">

                                    <p className="donate-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, laudantium!</p>

                                    <button className="donate-btn">Doe para o projeto</button>



                                    <ProgressBar now={now} label={`${now.toFixed(0)}%`} className="custom-progress" />

                                    <div className="financial-goals">

                                        <div className="raised">
                                            <span>Arrecadado: {raised} </span>
                                        </div>

                                        <div className="goal">
                                            <span>Meta: {goal} </span>
                                        </div>

                                    </div>

                                </div>



                            </div>



                        </div>



                    </div>



                </div>

            </section>

            <section className="teste-b">

            </section>

        </div>
    )
}

export default Home;