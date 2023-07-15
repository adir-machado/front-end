import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expertise-block',
  templateUrl: './expertise-block.component.html',
  styleUrls: ['./expertise-block.component.css']
})
export class ExpertiseBlockComponent {
  @Input('imgPath') path = '';
  @Input('expertiseTitle') title = '';
}
