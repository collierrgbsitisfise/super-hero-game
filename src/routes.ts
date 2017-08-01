import { Routes } from '@angular/router';
import { SelectCardComponent } from './app/select-card/select-card.component';
import { FightComponent } from './app/fight/fight.component';

export const appRoutes: Routes = [
    { path: 'select-card', component: SelectCardComponent },
    { path: 'fight/:id', component: FightComponent},
    { path: '**', redirectTo: 'select-card', pathMatch: 'full' },    
]