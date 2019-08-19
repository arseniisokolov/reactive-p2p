import { Component, OnInit, Input } from '@angular/core';
import { CardFormViewModel } from "../../../view-models/card-form.view-model";

@Component({
  selector: 'card-form-contragent',
  templateUrl: './card-form-contragent.component.html',
  styleUrls: ['../styles/card-form.component.scss']
})
export class CardFormContragentComponent {

  @Input()
  public model: CardFormViewModel;

}
