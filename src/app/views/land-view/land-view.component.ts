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
    { name: "Dra. Aridênia Moura Santos", title: "Advogada", path: "../../../assets/images/IMG_1828.png" },
    { name: "Dr. Fellipe Moura de Britto", title: "Advogado", path: "../../../assets/images/IMG_1835.png" },
    { name: "Dr. Rafael Santos Lima", title: "Advogado", path: "../../../assets/images/IMG_1848.png" },
  ];

}
