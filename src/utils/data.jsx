import { MdPhone, MdEmail } from "react-icons/md";

import rcc_image from "../assets/projects/images/rcc.png";
import rv_image from "../assets/projects/images/rv.svg";
import tre_image from "../assets/projects/images/tre-pb.png";
import pdf from "../assets/projects/documents/portfolio-renato-cesar.pdf";

export const links = [
  { id: 1, icon: <MdPhone/>, href: "mailto:pedrogabriellima@gmail.com" },
  { id: 2, icon: <MdEmail/>, href: "tel:+5583996082302" }
];

export const buttons = [
  { id: 1, name: "Whatsapp", href: "https://api.whatsapp.com/send?phone=5583996082302" },
  { id: 2, name: "Portfólio", href: "https://portfolio-pedrogles.vercel.app" },
  { id: 3, name: "LinkedIn", href: "https://www.linkedin.com/in/pedrogles" },
  { id: 4, name: "Github", href: "https://github.com/pedrogles" }
];

export const projects = [
  { 
    id: 1, 
    name: "Bendita Beleza | RV", 
    type: "Landing Page", 
    image: rv_image, alt: "Imagem com cor de fundo bege contendo as letras R e V ao centro, com a letra 'R' incorporando um rosto feminino de traços suaves e cabelos ondulados. Abaixo das letras, destaca-se o texto 'Bendita Beleza' e após a palavra 'Cabeleireira'.", 
    href: "https://benditabeleza.vercel.app/"
  },
  { 
    id: 2, 
    name: "Tribunal Regional Eleitoral", 
    type: "Informativo", 
    image: tre_image, 
    alt: "Imagem com cor de fundo branca, contendo o texto 'Informativo TRE-PB' ao centro e logotipo posicionada acima do texto 'TRE-PB'. O logotipo é composto por 3 itens geométricos, um círculo azul com estrelas brancas em seu interior, um pentágono de cor amarela e um triângulo de cor verde, fazendo referência a bandeira do brasil.", 
    href: "https://www.tre-pb.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tre-pb.jus.br/jurisprudencia/informativo-tre-pb/arquivos/2022/tre-pb-informativo-numero-5-do-ano-8/@@download/file/TRE-PB-informativo-numero-5-do-ano-8.pdf"
  },
  { 
    id: 3, 
    name: "Renato César Carneiro", 
    type: "Portfólio", 
    image: rcc_image, 
    alt: "Imagem com cor de fundo verde escuro contendo as letras R, C e C centralizadas dentro de um quadrado semifechado, referência a Renato César Carneiro.", 
    href: pdf
  }
  
];