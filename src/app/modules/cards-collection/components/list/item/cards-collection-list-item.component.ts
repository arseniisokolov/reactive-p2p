import { Component, Input } from '@angular/core';
import { CardModel } from '../../../../../core/core/models/card/card.base.model';

@Component({
  selector: 'cards-collection-list-item',
  templateUrl: './cards-collection-list-item.component.html',
  styleUrls: ['./styles/cards-collection-list-item.component.scss']
})
export class CardsCollectionListItemComponent {

  @Input()
  public model: CardModel;

}
