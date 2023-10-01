import { Component } from '@angular/core';

@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.css','./about-view-mobile.component.css']
})
export class AboutViewComponent {
  expertises = [
    { title: "Advocacia para Policiais Civis", path: "../../../assets/images/Group 31.png", desc: "O escritório do advogado Adir Machado Bandeira tem um compromisso sólido, dedicado e com vasta e reconhecida experiência na defesa dos direitos dos policiais civis. Reconhecendo a importância vital desses profissionais para a segurança e a ordem pública, o escritório oferece serviços advocatícios especializados para garantir que seus direitos sejam protegidos e que recebam a representação jurídica que merecem." },
    { title: "Defesa de Prefeituras e Câmaras", path: "../../../assets/images/Group 30-1.png", desc: "No cenário complexo e dinâmico do direito administrativo, as Prefeituras e Câmaras Municipais enfrentam uma série de desafios legais que demandam orientação especializada e estratégias eficazes para garantir o pleno cumprimento da legislação e a proteção dos interesses públicos. Nesse contexto, o Escritório Adir Machado Advogados se destaca como uma referência em fornecer serviços jurídicos abrangentes e de alta qualidade para esse segmento.\nCom anos de experiência e um corpo jurídico altamente qualificado, o Escritório Adir Machado Advogados oferece uma gama abrangente de serviços voltados para a defesa das Prefeituras e Câmaras, atendendo às demandas específicas que essas instituições enfrentam." },
    { title: "Defesa de Servidores Públicos", path: "../../../assets/images/Group 30.png", desc: "O escritório Adir Machado advogados associados oferece serviços advocatícios especializados na defesa dos servidores públicos. Com ampla experiência no Direito Administrativo e do Servidor Público, o escritório está comprometido em proteger os direitos e interesses desses profissionais." }
  ];
  lawyers = [
    { id: '0', name: "Dr. Adir Machado Bandeira", title: "Advogado", path: "../../../assets/images/img_9773.jpg" },
    { id: '1', name: "Dra. Aridênia Moura Santos", title: "Advogada", path: "../../../assets/images/img_9973.jpg" },
    { id: '2', name: "Dr. Fellipe Moura de Britto", title: "Advogado", path: "../../../assets/images/img_9813.jpg" },
  ];
}
