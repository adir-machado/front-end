import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-component-modal',
  templateUrl: './team-component-modal.component.html',
  styleUrls: ['./team-component-modal.component.css']
})
export class TeamComponentModalComponent {
  @Input('imgPath') path = '';
  @Input('lawyerName') name = '';
  @Input('lawyerTitle') title = '';
}
