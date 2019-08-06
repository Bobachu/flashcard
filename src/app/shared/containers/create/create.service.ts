import { Injectable } from '@angular/core';
import { CardSides } from '../create/create.model';

@Injectable()
export class CreateData {
  private cardSides: CardSides = new CardSides('placeholder', 'placeholder');

  constuctor() { }

  changeCard(front: string, back: string) {
    this.cardSides.cardFront = front;
    this.cardSides.cardBack = back;
  }
}

