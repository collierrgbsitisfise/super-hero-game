import { Injectable } from '@angular/core';

@Injectable()
export class FightLoopService {

  constructor() { }

  getRandomCategorie (): string {
    return CATEGORIES[Math.floor(Math.random() * 3) + 0]
  }

  getWinner (categorie: string, user: any, enemy:any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (Math.floor(Math.random() * 100) + user[categorie] <  Math.floor(Math.random() * 100) + enemy[categorie]) {
        setTimeout(() => resolve(true), 5000);
      }
      
      setTimeout(() => resolve(false), 5000);
      
    })
  }
}

const CATEGORIES = [
  "adroitness",
  "force",
  "intelect"
];