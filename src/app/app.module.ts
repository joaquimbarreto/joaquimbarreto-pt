import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EconomistComponent } from './components/economist/economist.component';
import { PhotographerComponent } from './components/photographer/photographer.component';
import { EngineerComponent } from './components/engineer/engineer.component';

@NgModule({
  declarations: [
    AppComponent,
    EconomistComponent,
    PhotographerComponent,
    EngineerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
