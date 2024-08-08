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

  openedCards : any[] = [];

  constructor() {
    this.initializeCards();
  }

  ngOnInit() {
  }

  initializeCards() {
    this.levelCards = [
      new memoryCard('1', 'https://ionicframework.com/docs/img/demos/card-media.png'),
      new memoryCard('2', 'https://ionicframework.com/docs/img/demos/card-media.png'),
      new memoryCard('1', 'https://ionicframework.com/docs/img/demos/card-media.png'),
      new memoryCard('2', 'https://ionicframework.com/docs/img/demos/card-media.png'),
    ]
  }

  public flipCard(event : Event) {
    const clickedCard = event.target as HTMLElement;
    const classList = clickedCard.classList;
    
    const isFlipped = classList.contains('flipped');
    const isPaired = classList.contains('paired');

    if (isPaired) {
      return;
    }

    const newSrc = isFlipped
    ? 'https://ionicframework.com/docs/img/demos/card-media.png'
    : `https://picsum.photos/id/${clickedCard.className[0]}/350/304`;
  
    clickedCard.setAttribute('src', newSrc);
    classList.toggle('flipped');
    this.checkCards(event);
  }

  checkCards(event : Event) {
    const clickedCard = event.target as HTMLElement;

    this.openedCards.push(clickedCard);

    console.log(this.openedCards);

    const classList = clickedCard.classList;
    const isFlipped = classList.contains('flipped');

    if (isFlipped) {
      if (this.openedCards.length > 1 ) {
        if (this.openedCards[0].className === clickedCard.className) {
          console.log('You found a pair!');
          this.openedCards[1].classList.add('paired');
          this.openedCards[0].classList.add('paired');
          this.openedCards = [];
        }
      }
    } else {
      return ;
    }
  }


}