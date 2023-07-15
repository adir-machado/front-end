import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-component',
  templateUrl: './team-component.component.html',
  styleUrls: ['./team-component.component.css']
})
export class TeamComponentComponent {
  @Input('imgPath') path = '';
  @Input('lawyerName') name = '';
  @Input('lawyerTitle') title = '';
}
