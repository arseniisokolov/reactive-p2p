import { Component, Input } from '@angular/core';
import { CardFormViewModel } from "../../../../view-models/card-form.view-model";

@Component({
  selector: 'card-form-expanded-section',
  templateUrl: './card-form-expanded-section.component.html',
  styleUrls: ['../../styles/card-form.component.scss']
})
export class CardFormExpandedSectionComponent {

  @Input()
  public model: CardFormViewModel;

}
