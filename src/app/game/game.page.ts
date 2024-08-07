import { Component, OnInit } from '@angular/core';
import { memoryCard } from 'src/shared/models/memoryCard';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  levelCards : memoryCard[] = [];

  constructor() {
    this.createCards();
  }

  ngOnInit() {
  }


  createCards() {
    this.levelCards = [
      new memoryCard('card1', 'https://picsum.photos/id/1/350/304'),
      new memoryCard('card1', 'https://picsum.photos/id/1/350/308'),
      new memoryCard('card2', 'https://picsum.photos/id/3/350/308'),
      new memoryCard('card2', 'https://picsum.photos/id/3/350/308'),
    ]
  }
}
