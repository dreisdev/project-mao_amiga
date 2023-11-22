import { dataGallery } from "../../Data/dataGeral";
import "./gallery.css";

import { Swiper, SwiperSlide } from "swiper/react";




const Gallery = () => {



    return (

        <div className="container-gallery">

            <section className="banner-project">

                <div className="text-project">

                    <h1 className="text-project-content">Galeria de Fotos</h1>

                </div>

            </section>

            <section className="cards-container">



                <Swiper className="swiper-cards"
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}

                >

                    {dataGallery.map((item) => (

                        <SwiperSlide key={item.id}>

                            <div className="cards-projects">
                                <figure>
                                    <img className="figure-cards-gallery" src={item.image} alt="img-1" />

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

export default Gallery;