import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';
import { TosterGlobalService } from 'core-library/angular/modals/data/toster/toster.global.service';
import { TosterTypes } from 'core-library/angular/modals/data/toster/toster-types.enum';
import { TransferService } from '../../data/transfer.service';
import { TransferFormViewModel } from '../../view-models/transfer-form.view-model';
import { ICardTransfer } from '../../../../data/card-transfer.interface';

@Component({
  selector: 'transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./styles/transfer-form.master.scss']
})
export class TransferFormComponent implements OnInit {

  @Input()
  public presetValue: ICardTransfer;

  @Output()
  public onSuccess: EventEmitter<void> = new EventEmitter<void>();

  public Model: TransferFormViewModel;

  constructor(
    private _transferService: TransferService,
    private _tosterService: TosterGlobalService
  ) { }

  public ngOnInit() {
    this.initialize();
  }

  public submitForm() {
    this._transferService.send(this.Model.toModel()).subscribe(() => {
      this._tosterService.showModal({ message: `Перевод на сумму ${this.Model.toModel().amount} отправлен.`, type: TosterTypes.Success })
      interval(1000).subscribe(() => this.onSuccess.emit());
    }, error => {
      this._tosterService.showModal({ message: error, type: TosterTypes.Error })
    });
  }

  private initialize() {
    this.Model = new TransferFormViewModel();
    this.Model.initialize(this.presetValue);
  }

}
