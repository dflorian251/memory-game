import { Component, OnInit } from '@angular/core';
import { memoryCard } from 'src/shared/models/memoryCard';
import { MemoryCardComponent } from '../memory-card/memory-card.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  levelCards : memoryCard[] = [];

  constructor() {
    // this.createCards();
    this.initializeCards();
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

  initializeCards() {
    this.levelCards = [
      new memoryCard('1 non-flipped', 'https://ionicframework.com/docs/img/demos/card-media.png'),
      new memoryCard('2', 'https://ionicframework.com/docs/img/demos/card-media.png'),
      new memoryCard('1', 'https://ionicframework.com/docs/img/demos/card-media.png'),
      new memoryCard('2', 'https://ionicframework.com/docs/img/demos/card-media.png'),
    ]
  }

  public flipCard(event : Event) {
    const clickedCard = event.target as HTMLElement;
    const classList = clickedCard.classList;
    
    const isFlipped = classList.contains('flipped');
  
    const newSrc = isFlipped
    ? 'https://ionicframework.com/docs/img/demos/card-media.png'
    : `https://picsum.photos/id/${clickedCard.className[0]}/350/304`;
  
    clickedCard.setAttribute('src', newSrc);
    classList.toggle('flipped');
  }
}