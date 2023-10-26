import "./home.css"
import { Swiper, SwiperSlide } from "swiper/react"

import Banner_1 from "../../assets/banner-1.jpg"
import Banner_2 from "../../assets/banner-2.jpg"
import Banner_3 from "../../assets/banner-3.jpg"

import img_1 from "../../assets/ref-escolar.png"
import img_2 from "../../assets/artes.png"
import img_3 from "../../assets/violao.png"
import img_4 from "../../assets/futebol.png"
import img_5 from "../../assets/computadores.png"
import img_6 from "../../assets/carpintaria.png"
import img_7 from "../../assets/eng.png"
import img_8 from "../../assets/biblia.png"

import History from "../../assets/history-bg-home.jpg"
import { NavLink } from "react-router-dom"


const Home = () => {

    const dataImages = [
        { id: '1', image: Banner_1 },
        { id: '2', image: Banner_2 },
        { id: '3', image: Banner_3 }


    ]

    const dataActivities = [
        {
            id: '1', image: img_1, title: "Reforço Escolar",
            content: "Uma das nossas principais ferramentas de transformação social é o reforço escolar. Acreditamos que cada criança tem um potencial incrível, e que com ajuda, orientação e incentivo eles podem alcançar seus sonhos."
        },
        {
            id: '2', image: img_2, title: "Artes",
            content: "Artes clássicas”, a pintura, a escultura, a música, a literatura, a dança e a arquitetura, se destacam pelo apelo emocional e valor estético que provocam a quem as observa."
        },
        {
            id: '3', image: img_3, title: "Violão",
            content: "Sabia que temos aulas de violão aqui no mão amiga? Os nossos alunos tem a oportunidade de semanalmente aprenderem a tocar violão. Além disso, os menores têm oficina de musicalização. "
        },
        {
            id: '4', image: img_4, title: "Futebol",
            content: "Todas as quartas temos futebol aqui no Mão amiga. O esporte é uma porta para oportunidades maiores na vida. Além de uma estratégia para manter a saúde em dia."
        },
        {
            id: '5', image: img_5, title: "Informática",
            content: "Uma das nossas alegrias é poder ensinar as crianças a palavra de Deus, mas também ensina-las a desenvolverem algo para seu futuro. Hoje temos uma sala de informática em nosso projeto que atende aproximadamente 20 adolescentes."
        },
        {
            id: '6', image: img_6, title: "Marcenaria",
            content: "Aulas de Marcenaria"
        },
        {
            id: '7', image: img_7, title: "Inglês",
            content: "Aulas de inglês"
        },
        {
            id: '8', image: img_8, title: "Discipulado",
            content: "Ensina a criança o caminho em que deve andar... Essa frase define nosso trabalho. Além do ensino tradicional, semanalmente estudamos a bíblia e aprendemos como podemos viver a palavra de Deus de uma forma prática."
        },

    ]
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
                                <button>Botão aqui</button>
                                <button>Botão aqui</button>
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

            <section className="teste-a">

            </section>

            <section className="teste-b">

            </section>

        </div>
    )
}

export default Home;