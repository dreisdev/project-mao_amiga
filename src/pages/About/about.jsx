import "./about.css";

import HistoryImage from "../../assets/image_history_about.jpg";

import { NavLink } from "react-router-dom";

const About = () => {


    return (
        <div className="container-about">

            <section className="banner-about">

                <div className="text-about">

                    <h1 className="text-about-content">Sobre Nós</h1>

                </div>

            </section>



            <section className="history-container-about">

                <div className="content-history-about">

                    <div className="row-history-a-about">

                        <h2 className="title-history-about">Nossa História</h2>

                        <p className="text-content-about"> O Mão Amiga teve seu início no ano de 2000 visando atender uma problemática que é ainda um dos gargalos da nossa nação a educação.  Vendo a necessidade foi feito um diagnóstico junto à comunidade, buscando entender a real necessidade daquelas famílias, com esses dados vimos que por muitos pais não serem alfabetizados o desejo expressado era de apoio para as atividades escolares dos seus filhos. Assim foi iniciado o atendimento focando o reforço escolar e o apoio aos pais e a escola, buscando solucionar essa problemática.
                            De lá pra cá fomos vendo a necessidade de montar um programa para nossos atendidos e hoje além do reforço escolar de português e matemática,  oferecemos oficinas nas áreas de: informática, artesanato, inglês, futebol e muaythai. Hoje nossos atendidos fazem o reforço escolar e mais duas oficinas de acordo com seu interesse e habilidades, o que é complementado com atividades extras com saídas focando atividades culturais e de lazer.
                            Nosso atendimento se dá em contraturno escolar e com isso atendemos 60 crianças e adolescentes do 1° ao 6° ano no bairro Chácara da Prainha na cidade de Aquiraz.</p>

                        <button className="button-history-about"> <NavLink className="button-style-about" to="/contacts"> Entre em Contato </NavLink> </button>

                    </div>

                    <div className="row-history-b-about">

                        <img className="history-bg-about" src={HistoryImage} alt="HistoryImage" />

                    </div>

                </div>

            </section>

            <section className="container-help-us">

                <div className="help-us">

                    <div className="text-help-us">
                        <h2>
                            Faça parte do nosso projeto.
                        </h2>
                    </div>

                    <div><button className="button-help-us"> <NavLink className="button-style-help-us" to="/contacts"> Doe Agora </NavLink> </button></div>


                </div>

            </section>




        </div>
    )
}

export default About;