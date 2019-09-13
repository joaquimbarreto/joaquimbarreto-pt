import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-economist',
  templateUrl: './economist.component.html',
  styleUrls: ['./economist.component.css']
})
export class EconomistComponent  {
  @Input() show: false;


}
