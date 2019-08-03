import { Component, Input } from '@angular/core';
import { CardFormViewModel } from "../../../view-models/card-form.view-model";

@Component({
  selector: 'card-form-sender',
  templateUrl: './card-form-sender.component.html',
  styleUrls: ['../styles/card-form.component.scss']
})
export class CardFormSenderComponent {

  @Input()
  public model: CardFormViewModel;

}
