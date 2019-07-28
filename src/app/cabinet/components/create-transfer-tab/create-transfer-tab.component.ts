import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryService } from '../../../history/data/history.service';
import { first, finalize } from 'rxjs/operators';
import { ICardTransfer } from '../../../app-data/card-transfer.interface';
import { pipe } from 'rxjs';

@Component({
  selector: 'create-transfer-tab',
  templateUrl: './create-transfer-tab.component.html',
  styleUrls: ['./styles/create-transfer-tab.component.scss']
})
export class CreateTransferTabComponent implements OnInit {

  public PresetTransfer: ICardTransfer;
  public Loading: boolean;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _historyService: HistoryService
  ) { }

  public ngOnInit() {
    this.Loading = true;
    this._activatedRoute.queryParams.pipe(first())
      .subscribe(params => {
        if (!params.id) {
          this.Loading = false;
          return;
        }
        this._historyService.getTransferById(params.id)
          .pipe(finalize(() => this.Loading = false))
          .subscribe(
            transfer => this.PresetTransfer = transfer
          )
      })
  }

  public directToHistory() {
    this._router.navigate(['cabinet/history']);
  }

}
