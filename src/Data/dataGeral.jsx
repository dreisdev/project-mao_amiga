import Banner_1 from "../assets/banner-1.jpg"
import Banner_2 from "../assets/banner-2.jpg"
import Banner_3 from "../assets/banner-3.jpg"

import img_1 from "../assets/ref-escolar.png"
import img_2 from "../assets/artes.png"
import img_3 from "../assets/violao.png"
import img_4 from "../assets/futebol.png"
import img_5 from "../assets/computadores.png"
import img_6 from "../assets/carpintaria.png"
import img_7 from "../assets/eng.png"
import img_8 from "../assets/biblia.png"

import Event_1 from "../assets/Events/event-1.jpg"
import Event_2 from "../assets/Events/event-2.jpg"
import Event_3 from "../assets/Events/event-3.jpg"
import Event_4 from "../assets/Events/event-4.jpg"
import Event_5 from "../assets/Events/event-5.jpg"
import Event_6 from "../assets/Events/event-6.jpg"
import Event_7 from "../assets/Events/event-7.jpg"
import Event_8 from "../assets/Events/event-8.jpg"
import Event_9 from "../assets/Events/event-9.jpg"
import Event_10 from "../assets/Events/event-9.jpg"




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

const dataGallery = [
    {
        id: '1', image: Event_1, title: "Passeio Parque",
        content: "passeio ao parque da cidade"
    },
    {
        id: '2', image: Event_2, title: "Gincana",
        content: "passeio ao parque da cidade"
    },
    {
        id: '3', image: Event_3, title: "Brincadeira",
        content: "Dias da crianças "
    },
    {
        id: '4', image: Event_4, title: "Futebol",
        content: " Tarde de futebol"
    },
    {
        id: '5', image: Event_5, title: "Informática",
        content: "Desafio"
    },
    {
        id: '6', image: Event_6, title: "Marcenaria",
        content: "Oficina de artes"
    },
    {
        id: '7', image: Event_7, title: "Inglês",
        content: "Aulas de inglês"
    },
    {
        id: '8', image: Event_8, title: "Dia do Livro",
        content: "Tarde de leitura"
    },

    {
        id: '9', image: Event_9, title: "Passeio ao zoológico",
        content: "Tarde com os animais."
    },

    {
        id: '10', image: Event_10, title: "Brincadeiras",
        content: "Tarde de brincadeiras."
    },

]

export {
    dataImages,
    dataActivities,
    dataGallery

}