import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { GetCardsService } from '../services/get-cards.service';
import { FightLoopService } from '../services/fight-loop.service';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  myHero: Hero;
  enemyHero: Hero;
  categorie: string;
  isFight: boolean = false;
  isDisabledButton: boolean = false;
  isFightOver: boolean = false;
  isYouWinner: boolean;
  
  constructor(private _getCards: GetCardsService, private route: ActivatedRoute, private _fightLoop: FightLoopService) { }

  ngOnInit() {
    this.categorie = this._fightLoop.getRandomCategorie();
    
    this.myHero = this._getCards.getHeroById(
      +this.route.snapshot.params['id']
    );

    this.enemyHero = this._getCards.getEnemyHero();
  }

  fight () {
    this.isFight = true;
    this.isDisabledButton = true;
    this._fightLoop.getWinner(this.categorie, this.myHero, this.enemyHero)
      .then(res => {
        this.isFight = false;
        this.isYouWinner = res;
        this.isFightOver = true;
      })
      .catch(err => {
        this.isFight = false;
        this.isYouWinner = false;
        this.isFightOver = true;
      })
  }

}
