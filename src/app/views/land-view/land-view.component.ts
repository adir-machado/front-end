import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-land-view',
  templateUrl: './land-view.component.html',
  styleUrls: ['./land-view.component.css', './land-view-mobile.component.css']
})
export class LandViewComponent {

  @Output() openModal = new EventEmitter<boolean>();
  @Output() lawyerInfo = new EventEmitter<string>();

  expertises = [
    { title: "Direito Civil", path: "../../../assets/images/Rectangle 3.png" },
    { title: "Direito Tributário", path: "../../../assets/images/Rectangle 5.png" },
    { title: "Direito Registral, Notarial e Imobiliário", path: "../../../assets/images/Rectangle 7.png" },
    { title: "Direito Público", path: "../../../assets/images/Rectangle 20.png" },
    { title: "Direito Empresarial", path: "../../../assets/images/Rectangle 9-1.png"},
    { title: "Direito do Consumidor", path: "../../../assets/images/Rectangle 9-2.png"},
  ];
  lawyers = [
    { id: '0', name: "Dr. Adir Machado Bandeira", title: "Advogado", path: "../../../assets/images/img_9773.jpg" },
    { id: '1', name: "Dra. Aridênia Moura Santos", title: "Advogada", path: "../../../assets/images/img_9973.jpg" },
    { id: '2', name: "Dr. Fellipe Moura de Britto", title: "Advogado", path: "../../../assets/images/img_9813.jpg" },
  ];
  articles = [
    { title: "O necessário overruling sobre o artigo 55 da Lei 9.099/95", author: "Adir Machado Bandeira", link: "https://www.conjur.com.br/2023-mai-16/adir-machado-overruling-artigo-55-lei-9099952", path: "../../../assets/images/CJ_logo.png" },
    { title: "A (in)efetividade dos arts. 23 e 24, § 1º do Estatuto da Advocacia - Honorários advocatícios sucumbenciais no limbo", author: "Adir Machado Bandeira", link: "https://jus.com.br/artigos/104140/a-in-efetividade-dos-arts-23-e-24-1-do-estatuto-da-advocacia-honorarios-advocaticios-sucumbenciais-no-limbo", path: "../../../assets/images/Group 23.svg" },
  ];


}
