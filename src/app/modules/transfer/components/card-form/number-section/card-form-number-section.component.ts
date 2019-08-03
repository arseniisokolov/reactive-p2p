import { Component, Input } from '@angular/core';
import { CardFormViewModel } from "../../../view-models/card-form.view-model";

@Component({
  selector: 'card-form-number-section',
  templateUrl: './card-form-number-section.component.html',
  styleUrls: ['../styles/card-form.component.scss']
})
export class CardFormNumberSectionComponent {

  @Input()
  public model: CardFormViewModel;

}
