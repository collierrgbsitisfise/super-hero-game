import { Component, OnInit } from '@angular/core';
import { GetCardsService } from '../services/get-cards.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.css']
})
export class SelectCardComponent implements OnInit {
  
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(private _getCards: GetCardsService) { }

  ngOnInit() {
    
    this.heroes = this._getCards.getAllHeroes();
    this.selectedHero = this.heroes[0];
  
  }

  
}
