import "./projects.css";

import SchoolProject from "../../assets/cause-2.jpg";

import { dataActivities } from "../../Data/dataGeral";

import { Swiper, SwiperSlide } from "swiper/react";

const Projects = () => {
    return (

        <div className="container-projects">

            <section className="banner-project">

                <div className="text-project">

                    <h1 className="text-project-content">Projetos</h1>

                </div>

            </section>

            <section className="main-projects">

                <div className="box-projects-active">

                    <div className="title-projects"> <h1> Projetos em Destaque </h1> </div>

                    <div className="box-projects-content">


                        <div className="content-events-2">

                            <img className="image-projects" src={SchoolProject} alt="schoolproject" />

                            <div className="box-content-events">
                                <h2 className="title-events">Reforço Escolar.</h2>

                                <span className="date-events">25 de agosto de 2018</span>

                                <span > | </span>

                                <span className="local-events">Salão de Baile de Nova York</span>

                                <div className="donate-events">

                                    <p className="donate-text">Uma das nossas principais ferramentas de transformação social é o reforço escolar.

                                        Acreditamos que cada criança tem um potencial incrível, e que com ajuda, orientação e incentivo eles podem alcançar seus sonhos.</p>

                                    <button className="donate-btn">Conheça mais o projeto!</button>





                                </div>



                            </div>



                        </div>

                        <div className="content-events-2">

                            <img className="image-projects" src={SchoolProject} alt="schoolproject" />

                            <div className="box-content-events">
                                <h2 className="title-events">Reforço Escolar.</h2>

                                <span className="date-events">25 de agosto de 2018</span>

                                <span > | </span>

                                <span className="local-events">Salão de Baile de Nova York</span>

                                <div className="donate-events">

                                    <p className="donate-text">Uma das nossas principais ferramentas de transformação social é o reforço escolar.

                                        Acreditamos que cada criança tem um potencial incrível, e que com ajuda, orientação e incentivo eles podem alcançar seus sonhos.</p>

                                    <button className="donate-btn">Conheça mais o projeto!</button>





                                </div>



                            </div>



                        </div>



                    </div>



                </div>

            </section>

            <div className="title-our-projects"> <h1> Nossos Projetos </h1> </div>

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


        </div>

    )
}

export default Projects;