import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss'],
})
export class MemoryCardComponent  implements OnInit {
  @Input() cardClass : string = '';
  @Input() cardSrc : string = '';
  
  constructor() { }

  ngOnInit() {}
}
