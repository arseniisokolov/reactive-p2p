import { Component, Input } from '@angular/core';
import { CardFormViewModel } from "../../../../view-models/card-form.view-model";

@Component({
  selector: 'card-form-alias-section',
  templateUrl: './card-form-alias-section.component.html',
  styleUrls: ['../../styles/card-form.component.scss']
})
export class CardFormAliasSectionComponent {

  @Input()
  public model: CardFormViewModel;

}
