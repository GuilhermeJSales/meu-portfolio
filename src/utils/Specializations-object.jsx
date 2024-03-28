import javascript from "../Assets/javascript.svg"
import certificadoJS from "../Assets/javascript.png"

import react from "../Assets/react.svg"
import certificadoReact from "../Assets/reactjs.png"

import typescript from "../Assets/typescript.svg";
import certificadoTypescript from "../Assets/typescript.png";
import reactTsx from "../Assets/react-tsx.png";
import reactRocket from "../Assets/react-rocket.png";

import html from "../Assets/html.svg"
import certificadoHtml from "../Assets/webdesign.png"



import css from "../Assets/css.svg"
import certificadoCSS1 from "../Assets/css1.png"
import certificadoCSS2 from "../Assets/css2.png"
import certificadoCSS3 from "../Assets/css3.png"


import wordpress from "../Assets/wordpress.svg"
import certificadoWordpress from "../Assets/wordpress.png"


import photoshop from "../Assets/photoshop.svg"
import naoPossuo from "../Assets/naopossuo.png"


import xd from "../Assets/xd.svg"
import certificadoXd from "../Assets/xd.png"



import redux from "../Assets/redux.svg";
import certificadoRedux from "../Assets/redux.png";







export const specializations =
[
{
    "id": 1,
    "name":"Javascript",
    "logo": javascript,
    "saibaMais": "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/About_JavaScript",
    "certificado": [certificadoJS],
    "several": false,
    "description": "JavaScript® (às vezes abreviado para JS) é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js,  Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional).",
    "duration": "0",
  },
{
    "id": 2,
    "name":"ReactJS",
    "logo": react,
    "saibaMais": "https://pt-br.reactjs.org/",
    "certificado":[reactRocket, reactTsx, certificadoReact],
    "several": true,
    "description":"O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.",
    "duration": "150",
  },
  {
    "id": 3,
    "name":"TypeScript",
    "logo": typescript,
    "saibaMais": "https://www.typescriptlang.org/",
    "certificado":[reactRocket,reactTsx, certificadoTypescript],
    "several": true,
    "description":"TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.",
    "duration": "300",
  },
  {
    "id": 4,
    "name":"HTML5",
    "logo": html,
    "saibaMais": "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    "certificado":[certificadoHtml],
    "several": false,
    "description":"HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML. ",
    "duration": "450",
  },
  {
    "id": 5,
    "name":"CSS3",
    "logo": css,
    "saibaMais": "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    "certificado":[certificadoCSS1, certificadoCSS2, certificadoCSS3],
    "several": true,
    "description":"CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.",
    "duration": "600",
  },
  {
    "id": 6,
    "name":"Redux",
    "logo": redux,
    "saibaMais": "https://redux.js.org/",
    "certificado":[certificadoRedux],
    "several": false,
    "description":"Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo. É mais comumente usado com bibliotecas como React ou Angular para criar interfaces de usuário. Semelhante pela arquitetura Flux do Facebook, foi criado por Dan Abramov e Andrew Clark.",
    "duration": "750",
  },{
    "id": 7,
    "name":"WordPress",
    "logo": wordpress,
    "saibaMais": "https://br.wordpress.org/",
    "certificado": [certificadoWordpress],
    "several": false,
    "description":"WordPress é um sistema livre e aberto de gestão de conteúdo para internet, baseado em PHP com banco de dados MySQL, executado em um servidor interpretador, voltado principalmente para a criação de páginas eletrônicas e blogs online.",
    "duration": "900",
  },
  {
    "id": 8,
    "name":"Photoshop",
    "logo": photoshop,
    "saibaMais": "https://www.adobe.com/br/products/photoshop.html",
    "certificado":[naoPossuo],
    "several": false,
    "description":"Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster desenvolvido pela Adobe Systems. É considerado o líder no mercado dos editores de imagem profissionais, assim como o programa de facto para edição profissional de imagens digitais e trabalhos de pré-impressão.",
    "duration": "1050",
  },
  {
    "id": 9,
    "name":"Adobe Xd",
    "logo": xd,
    "saibaMais": "https://www.adobe.com/br/products/xd.html",
    "certificado":[certificadoXd],
    "several": false,
    "description":"Adobe XD é uma ferramenta de design de experiência do usuário baseada em vetores para aplicativos da web e aplicativos móveis, desenvolvida e publicada pela Adobe Inc.",
    "duration": "1200",
  }

]