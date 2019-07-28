import { Component, OnInit, Input } from '@angular/core';
import { CardFormViewModel } from '../../view-models/card-form.view-model';

@Component({
  selector: 'card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./styles/card-form.component.scss']
})
export class CardFormComponent implements OnInit {

  @Input()
  public model: CardFormViewModel;

  ngOnInit() {
  }

}
