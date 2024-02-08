import "./gallery.css";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import api from "../../api/fetchApi";

const Gallery = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardMobile, setCardMobile] = useState(4);
  const [spaceCard, setSpaceCard] = useState(10);
  const [eventsData, setEventsData] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await api.get("/gallery");

      setEventsData(response.data);
    } catch (error) {
      console.log(error);
      console.error(
        "Erro ao fazer a solicitação:",
        error.response.data.mensagem
      );
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
        setCardMobile(3);
        setSpaceCard(100);
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

      <section className="cards-container-gallery">
        <Swiper
          className="swiper-cards"
          slidesPerView={cardMobile}
          spaceBetween={spaceCard}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {eventsData.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="cards-projects">
                <div className="title">
                  <h3>{item.titleEvent}</h3>
                </div>

                <div className="content">
                  <p>{item.contentEvent}</p>
                </div>

                <figure>
                  {item.imagens.map((imagem) => (
                    <img
                      className="figure-cards-gallery"
                      key={imagem._id}
                      src={imagem.url}
                      alt={eventsData.titleEvent}
                    />
                  ))}
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Gallery;
