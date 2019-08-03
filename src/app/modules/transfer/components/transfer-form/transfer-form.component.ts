import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';
import { TosterGlobalService } from 'core-library/angular/modals/data/toster/toster.global.service';
import { TosterTypes } from 'core-library/angular/modals/data/toster/toster-types.enum';
import { TransferService } from '../../data/transfer.service';
import { TransferFormViewModel } from '../../view-models/transfer-form.view-model';
import { ICardTransfer } from '../../../../core/card-transfer.interface';

@Component({
  selector: 'transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./styles/transfer-form.master.scss']
})
export class TransferFormComponent {

  @Input()
  public model: TransferFormViewModel;

  @Output()
  public onSubmit: EventEmitter<void> = new EventEmitter<void>();

  constructor(
  ) { }

  public submitForm() {
    this.onSubmit.emit();
  }

}
