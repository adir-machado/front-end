import { Component } from '@angular/core';

@Component({
  selector: 'app-land-view',
  templateUrl: './land-view.component.html',
  styleUrls: ['./land-view.component.css']
})
export class LandViewComponent {
  expertises = [
    { title: "Direito Civil", path: "../../../assets/images/Rectangle 3.png" },
    { title: "Direito Imobiliário", path: "../../../assets/images/Rectangle 5.png" },
    { title: "Direito Notarial", path: "../../../assets/images/Rectangle 7.png" },
    { title: "Direito Público", path: "../../../assets/images/Rectangle 9.png" },
  ];
  lawyers = [
    { name: "Dr. Adir Machado Bandeira", title: "Advogado", path: "../../../assets/images/IMG_1772.png" },
    { name: "Dra. Aridênia Moura Santos", title: "Advogada", path: "../../../assets/images/img-colab-Aridenia.jpg" },
    { name: "Dr. Fellipe Moura de Britto", title: "Advogado", path: "../../../assets/images/IMG_1835.png" },
    { name: "Dr. Rafael Santos Lima", title: "Advogado", path: "../../../assets/images/IMG_1848.png" },
  ];
  articles = [
    { title: "O necessário overruling sobre o artigo 55 da Lei 9.099/95", author: "Adir Machado Bandeira", link: "https://www.conjur.com.br/2023-mai-16/adir-machado-overruling-artigo-55-lei-9099952" },
    { title: "A advocacia e o processo de impeachment", author: "Adir Machado Bandeira", link: "https://www.conjur.com.br/2021-jul-10/adir-bandeira-advocacia-processo-impeachment" },
  ];
}
