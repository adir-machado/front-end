import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {
  @Input('articleTitle') title = '';
  @Input('authorName') name = ''; 
}
