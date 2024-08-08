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

    if (isPaired || this.openedCards.length >= 2) {
      if (this.openedCards.length >= 2) {
        console.log('Too many opened cards.');
        clickedCard.setAttribute('src', 'https://ionicframework.com/docs/img/demos/card-media.png');
        classList.toggle('flipped');
        this.openedCards.pop();
      }
      
    } else {
      let newSrc: string;

      if (isFlipped) {
        newSrc = 'https://ionicframework.com/docs/img/demos/card-media.png';
        this.openedCards.pop();
      } else {
        newSrc = `https://picsum.photos/id/${clickedCard.className[0]}/350/304`;
        this.openedCards.push(clickedCard);
      }
      
      clickedCard.setAttribute('src', newSrc);
      classList.toggle('flipped');
      
      this.checkCards(event);
      console.log(`Cards opened: ${this.openedCards.length}`);
    }


  }

  checkCards(event : Event) {
    const clickedCard = event.target as HTMLElement;

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