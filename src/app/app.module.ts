import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FightLoopService } from './services/fight-loop.service';
import { GetCardsService } from './services/get-cards.service';

import { AlertModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { SelectCardComponent } from './select-card/select-card.component';
import { FightComponent } from './fight/fight.component';
import { appRoutes } from '../routes';
import { SelectedCardComponent } from './select-card/selected-card/selected-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectCardComponent,
    FightComponent,
    SelectedCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FightLoopService,
    GetCardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
