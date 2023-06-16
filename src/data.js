// import images
import LogoImg from '../src/assets/img/header/logo.svg';
import HeroImg from '../src/assets/img/hero/image.svg';
import OverviewProductImg from '../src/assets/img/overview/product.svg';
import FacebookImg from '../src/assets/img/overview/brands/facebook.svg';
import GoogleImg from '../src/assets/img/overview/brands/google.svg';
import CocaColaImg from '../src/assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from '../src/assets/img/overview/brands/linkedin.svg';
import SamsungImg from '../src/assets/img/overview/brands/samsung.svg';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import CardIconImg1 from '../src/assets/img/product/cards/icon1.svg';
import CardIconImg2 from '../src/assets/img/product/cards/icon2.svg';
import CardIconImg3 from '../src/assets/img/product/cards/icon3.svg';
import PricingIcon1 from '../src/assets/img/pricing/icon1.svg';
import PricingIcon2 from '../src/assets/img/pricing/icon2.svg';
import PricingIcon3 from '../src/assets/img/pricing/icon3.svg';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Solicitar uma demonstração',
};

export const nav = [
  { name: 'Recursos', href: '/' },
  { name: 'Sobre nós', href: '/' },
  { name: 'Preços', href: '/' },
  { name: 'Feedback', href: '/' },
];

export const hero = {
  title: 'Acompanhe suas Despesas e Economize Dinheiro',
  subtitle: 'Ajudamos você a organizar sua renda e despesas',
  btnText: 'Teste grátis',
  compText: '— Web, iOS e Android',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Sempre Online',
    title: 'Suporte em Tempo Real com Armazenamento em Nuvem',
    subtitle:
      'Mantenha-se conectado o tempo todo com nosso suporte em tempo real baseado em nuvem.',
    btnLink: 'Saiba mais',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Economize nos Custos',
    title: 'Economize para Você e sua Família',
    subtitle:
      'Gerencie suas finanças de forma eficiente e economize dinheiro para você e sua família.',
    btnLink: 'Saiba mais',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Use a Qualquer Momento',
    title: 'Use quando Precisar',
    subtitle:
      'Acesse suas informações financeiras a qualquer momento e em qualquer lugar.',
    btnLink: 'Saiba mais',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'Os Produtos com os Quais Trabalhamos',
  subtitle:
    'Conheça os produtos que oferecemos para ajudar no gerenciamento financeiro.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Plataforma Cruzada',
      subtitle: 'Compatível com diversas plataformas',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Servidor em Nuvem',
      subtitle: 'Armazenamento seguro e acessível',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'JavaScript Puro',
      subtitle: 'Desenvolvido com tecnologia JavaScript',
      delay: 600,
    },
  ],
};


export const pricing = {
  title: 'Escolha seu plano flexível.',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Plano Inicial',
      services: [
        { name: 'Armazenamento ilimitado de dados' },
        { name: 'Exportar para pdf, xls, csv' },
        { name: 'Suporte de servidor em nuvem' },
      ],
      price: 'R$ 9,99',
      userAmount: 'até 3 usuários + R$ 1,99 por usuário',
      btnText: 'Assinar',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Plano Prata',
      services: [
        { name: 'Armazenamento ilimitado de dados' },
        { name: 'Exportar para pdf, xls, csv' },
        { name: 'Suporte de servidor em nuvem' },
      ],
      price: 'R$ 19,99',
      userAmount: 'até 3 usuários + R$ 1,99 por usuário',
      btnText: 'Assinar',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Plano Diamante',
      services: [
        { name: 'Armazenamento ilimitado de dados' },
        { name: 'Exportar para pdf, xls, csv' },
        { name: 'Suporte de servidor em nuvem' },
      ],
      price: 'R$ 29,99',
      userAmount: 'até 3 usuários + R$ 1,99 por usuário',
      btnText: 'Assinar',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'Temos milhões de admiradores fiéis',
  clients: [
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg1,
      name: 'Cameron Williamson',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg2,
      name: 'Shirley Hand',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg3,
      name: 'Dr. Olivia Hansen',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg4,
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg5,
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: 'Mais de 20 milhões de downloads em 32 países diferentes',
  subtitle: 'Experimente a demonstração gratuita por 7 dias com todos os recursos.',
  btnText: 'Experimentar',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Início', href: '/' },
    { name: 'Sobre nós', href: '/' },
    { name: 'Carreiras', href: '/' },
    { name: 'Preços', href: '/' },
    { name: 'Recursos', href: '/' },
    { name: 'Blog', href: '/' },
  ],
  legal: [
    { name: 'Termos de uso', href: '/' },
    { name: 'Termos e condições', href: '/' },
    { name: 'Política de privacidade', href: '/' },
    { name: 'Política de cookies', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Mais de 25.000 pessoas se inscreveram',
  },
  form: {
    placeholder: 'Digite seu e-mail',
    btnText: 'Assinar',
    smallText: 'Seu e-mail está seguro conosco',
  },
};

export const copyright = {
  link1: {
    name: 'Privacidade e Termos',
    href: '/',
  },
  link2: {
    name: 'Entre em contato',
    href: '/',
  },
  copyText: 'Direitos autorais @ 2022 xpence',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};
