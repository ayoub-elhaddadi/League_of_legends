import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChampionService } from './services/champion.service';
import { ChampionComponent } from './components/champion/champion.component';
import { AgGridModule } from 'ag-grid-angular';
import { ChampionData } from './api/champion.data';
import { ButtonRendererComponent } from './components/champion/button-renderer/button-renderer.component';


@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    ButtonRendererComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ChampionData, {delay:500}),
  ],
  providers: [ChampionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
