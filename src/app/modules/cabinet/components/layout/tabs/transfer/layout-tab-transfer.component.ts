import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first, finalize } from 'rxjs/operators';

import { HistoryService } from '../../../../../history/data/history.service';
import { ICardTransfer } from '../../../../../../data/card-transfer.interface';

@Component({
  templateUrl: './layout-tab-transfer.component.html',
  styleUrls: ['./styles/layout-tab-transfer.component.scss']
})
export class LayoutTabTransferComponent implements OnInit {

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
          );
      });
  }

  public directToHistory() {
    this._router.navigate(['cabinet/timeline']);
  }

}
