import { Component } from '@angular/core';

@Component({
  selector: 'app-land-view',
  templateUrl: './land-view.component.html',
  styleUrls: ['./land-view.component.css']
})
export class LandViewComponent {
  expertises = [
    { title: "Assessoria Jurídica à Empresa", path: "../../../assets/images/Rectangle 3.png" },
    { title: "Cobranças e Execuções", path: "../../../assets/images/Rectangle 5.png" },
    { title: "Direito Administrativo", path: "../../../assets/images/Rectangle 7.png" },
    { title: "Direito Bancário", path: "../../../assets/images/Rectangle 9.png" },
    { title: "Direito Contratual", path: "../../../assets/images/Rectangle 11.png" },
    { title: "Direito de Família e Sucessões", path: "../../../assets/images/Rectangle 12.png" },
    { title: "Direito do Consumidor", path: "../../../assets/images/Rectangle 13.png" },
    { title: "Direito Previdenciário", path: "../../../assets/images/Rectangle 14.png" }
  ];
  
}
