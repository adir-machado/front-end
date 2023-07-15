import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {
  scrollToId(id:string){
    const idPos = document.getElementById(id)?.offsetTop;
    window.scrollTo({ top: idPos, behavior: 'smooth' })
  }
}
