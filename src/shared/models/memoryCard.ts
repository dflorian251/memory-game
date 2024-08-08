export class memoryCard {
  cardClass : string = '';
  cardSrc : string = '';
  flipped : boolean = false;

  constructor(cardClass : string, cardSrc : string, flipped : boolean = false) {
    this.cardClass = cardClass;
    this.cardSrc = cardSrc;
    this.flipped = flipped;
  }
}