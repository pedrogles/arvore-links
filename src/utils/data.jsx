import { MdPhone, MdEmail } from "react-icons/md";

import logo_image from "../assets/logo/isologo.png";
import user_image from "../assets/user/photo.png";
import rcc_image from "../assets/projects/images/rcc.png";
import rv_image from "../assets/projects/images/rv.png";
import tre_image from "../assets/projects/images/tre-pb.png";
import pdf from "../assets/projects/documents/portfolio-renato-cesar.pdf"

export const navbar = {
  logo: {
    src: logo_image,
    alt: "Letras P e G juntas fomando um Logotipo 'Pedro Gabriel'"
  }
};
export const user = {
  name: "Pedro Gabriel Lima",
  description: "Front-End Developer and Web Design",
  image: {
    src: user_image,
    alt: "Foto do rosto de Pedro."
  }
};
export const links = [
  { id: 1, icon: <MdPhone/>, href: "mailto:pedrogabriellima@gmail.com" },
  { id: 2, icon: <MdEmail/>, href: "tel:+5583996082302" }
];
export const buttons = [
  { id: 1, name: "Whatsapp", href: "https://api.whatsapp.com/send?phone=5583996082302" },
  { id: 2, name: "Portfólio", href: "" },
  { id: 3, name: "LinkedIn", href: "https://www.linkedin.com/in/pedrogles/" },
  { id: 4, name: "Github", href: "https://github.com/pedrogles" }
];
export const projects = [
  { id: 1, name: "Bendita Beleza", type: "Landing Page", image: rv_image, alt: "Imagem com fundo de cor salmão escuro, rosto feminino de perfil junto as letras R e V formando um logotipo, logo abaixo o nome Bendita Beleza e em seguida Cabeleireira.", href: "https://benditabeleza.vercel.app/"},
  { id: 2, name: "Tribunal Regional Eleitoral", type: "Informativo", image: tre_image, alt: "Imagem com fundo de cor branca, escrito ao meio 'Informativo TRE-PB' com o logotipo a cima do 'TRE-PB', o logotipo contém um circulo azul com estrelas dentro encima de um retangulo dividido entre as cores amarela e verde se arremetendo a bandeira do brasil.", href: "https://www.tre-pb.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tre-pb.jus.br/jurisprudencia/informativo-tre-pb/arquivos/2022/tre-pb-informativo-numero-5-do-ano-8/@@download/file/TRE-PB-informativo-numero-5-do-ano-8.pdf"},
  { id: 3, name: "Renato César Carneiro", type: "Portfólio", image: rcc_image, alt: "Imagem com fundo verde, com logotipo centralizado ao meio com as letras R, C e C dando jus ao nome do escritor e professor Renato César Carneiro.", href: pdf}
]