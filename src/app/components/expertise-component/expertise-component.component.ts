import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expertise-component',
  templateUrl: './expertise-component.component.html',
  styleUrls: ['./expertise-component.component.css']
})
export class ExpertiseComponentComponent {
  @Input('imgPath') path = '';
  @Input('expertiseTitle') title = '';
  @Input('expertiseDesc') description = '';
}
