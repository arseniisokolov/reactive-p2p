import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { TosterTypes } from '../../../../core/angular/modals/data/toster/toster-types.enum';
import { TosterGlobalService } from '../../../../core/angular/modals/data/toster/toster.global.service';
import { HistoryService } from '../../data/history.service';
import { HistoryListItemViewModel } from '../../view-models/history-list-item.view-model';
import { HistoryListFilterFormViewModel } from '../../view-models/history-list-filter-form.view-model';

@Component({
  selector: 'history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./styles/history-list.component.scss']
})
export class HistoryListComponent implements OnInit {

  @Output()
  public onRepeat: EventEmitter<string> = new EventEmitter<string>();

  public Items$: Observable<HistoryListItemViewModel[]>;
  public FilterModel: HistoryListFilterFormViewModel;

  constructor(
    private _historyService: HistoryService,
    private _tosterService: TosterGlobalService
  ) { }

  public ngOnInit() {
    this.Items$ = this._historyService.getTransfers();
  }

  public deleteTransfer(id: string) {
    this._historyService.deleteTransfer(id).subscribe(() => {
      this._tosterService.showModal({ message: `Перевод удален.`, type: TosterTypes.Success });
      this.Items$ = this._historyService.getTransfers();
    }, error => {
      this._tosterService.showModal({ message: error, type: TosterTypes.Error })
    });
  }

  public repeatTransfer(id: string) {
    this.onRepeat.emit(id);
  }

}
