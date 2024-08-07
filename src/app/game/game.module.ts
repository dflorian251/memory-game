import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GamePageRoutingModule } from './game-routing.module';

import { GamePage } from './game.page';
import { HomePage } from '../home/home.page';
import { MemoryCardComponent } from '../memory-card/memory-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GamePageRoutingModule,
    NgFor,
  ],
  declarations: [
    GamePage,
    HomePage,
    MemoryCardComponent,
  ]
})
export class GamePageModule {}
