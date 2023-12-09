import "./gallery.css";

import { useEffect, useState } from "react";

import { dataGallery } from "../../Data/dataGeral";


import { Swiper, SwiperSlide } from "swiper/react";




const Gallery = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [cardMobile, setCardMobile] = useState(4);
    const [spaceCard, setSpaceCard] = useState(10);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };



        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleSlideView = () => {

            if (windowWidth <= 500) {

                setCardMobile(1);
                setSpaceCard(200);

            } else if (windowWidth > 501 && windowWidth < 968) {
                setCardMobile(2);
                setSpaceCard(200);

            } else if (windowWidth > 1000 && windowWidth <= 1366) {
                setCardMobile(4);
                setSpaceCard(370)

            } else {
                setCardMobile(5);
                setSpaceCard(0);
            }



        };

        handleSlideView();

        return handleSlideView;
    }, [windowWidth]);



    return (

        <div className="container-gallery">

            <section className="banner-project">

                <div className="text-project">

                    <h1 className="text-project-content">Galeria de Fotos</h1>

                </div>

            </section>

            <section className="cards-container">



                <Swiper className="swiper-cards"
                    slidesPerView={cardMobile}
                    spaceBetween={spaceCard}
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