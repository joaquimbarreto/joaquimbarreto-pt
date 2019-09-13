import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Joaquim Barreto';
  showEconomist = false;
  showPhotographer = false;
  showEngineer = false;

  toggleEconomist() {
    this.showEconomist = !this.showEconomist;
    this.showPhotographer = false;
    this.showEngineer = false;
  }
  togglePhotographer() {
    this.showPhotographer = !this.showPhotographer;
    this.showEconomist = false;
    this.showEngineer = false;
  }
  toggleEngineer() {
    this.showEngineer = !this.showEngineer;
    this.showPhotographer = false;
    this.showEconomist = false;
  }
}
