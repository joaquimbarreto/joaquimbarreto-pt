import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.css']
})
export class PhotographerComponent {
  @Input() show: false;
}
