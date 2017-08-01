import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Hero } from '../hero';

@Injectable()
export class GetCardsService {

  constructor(private _http: Http) { }

  getAllHeroes (): Hero[] {
    return HEROES;
  }

  getHeroById (id: any): Hero {
    return HEROES.filter(hero => hero.id == id)[0];
  }
  
  getEnemyHero (): Hero {
    return HEROES[Math.floor(Math.random() * 8) + 0];
  }

}

const  HEROES = [
        {
            "id": 1,
            "name": "ember Hui",
            "adroitness": "25",
            "force": "50",
            "intelect": "30",
            "imgUrl": "https://upload.wikimedia.org/wikipedia/en/6/69/Ember.js_Logo_and_Mascot.png"
        },
        {
            "id": 2,
            "name": "pika 4u",
            "adroitness": "60",
            "force": "40",
            "intelect": "55",
            "imgUrl": "https://vignette2.wikia.nocookie.net/pokemon/images/e/e1/025Pikachu_OS_anime_4.png/revision/latest?cb=20150101100259"
        },
        {
            "id": 3,
            "name": "trollo",
            "adroitness": "25",
            "force": "35",
            "intelect": "85",
            "imgUrl": "http://www.pngall.com/wp-content/uploads/2016/05/Trollface-PNG.png"
        },
        {
            "id": 4,
            "name": "Homer Bober",
            "adroitness": "40",
            "force": "75",
            "intelect": "5",
            "imgUrl": "https://s-media-cache-ak0.pinimg.com/originals/4a/61/34/4a61341e0ab9749ad6d5e9d72fd5fcf3.png"
        },
        {
            "id": 5,
            "name": "SimsPig",
            "adroitness": "25",
            "force": "65",
            "intelect": "20",
            "imgUrl": "http://orig01.deviantart.net/4161/f/2017/055/1/3/plopper_aka_spiderpig___the_simpsons_by_domejohnny-db07tr8.png"
        },
        {
            "id": 6,
            "name": "golan4ik",
            "adroitness": "42",
            "force": "50",
            "intelect": "85",
            "imgUrl": "http://planetgo.ru/i/golang_icon.png"
        },
        {
            "id": 7,
            "name": "Karkartmen",
            "adroitness": "25",
            "force": "85",
            "intelect": "25",
            "imgUrl": "https://vignette3.wikia.nocookie.net/southpark/images/1/13/Cop-cartman.png/revision/latest?cb=20161021021150"
        },
        {
            "id": 8,
            "name": "Rik Morti blablba",
            "adroitness": "50",
            "force": "70",
            "intelect": "85",
            "imgUrl": "https://avatanplus.com/files/resources/mid/57bb35c947f0a156b34a1a4f.png"
        }
    ];
