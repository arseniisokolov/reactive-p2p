import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TosterTypes } from 'core-library/angular/modals/data/toster/toster-types.enum';
import { TosterGlobalService } from 'core-library/angular/modals/data/toster/toster.global.service';
import { HistoryService } from '../../data/history.service';
import { HistoryListViewModel } from '../../view-models/history-list.view-model';

@Component({
  selector: 'history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./styles/history-list.component.scss']
})
export class HistoryListComponent implements OnInit {

  public Model: HistoryListViewModel;

  @Output()
  public onRepeat: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _historyService: HistoryService,
    private _tosterService: TosterGlobalService
  ) { }

  public ngOnInit() {
    this._historyService.getTransfers().subscribe(items => {
      this.Model = new HistoryListViewModel();
      this.Model.initialize(items);
    })
  }

  public deleteTransfer(id: string) {
    this._historyService.deleteTransfer(id).subscribe(() => {
      this.Model.hideItem(id);
      this._tosterService.showModal({ message: `Перевод удален.`, type: TosterTypes.Success })
    }, error => {
      this._tosterService.showModal({ message: error, type: TosterTypes.Error })
    })
  }

  public repeatTransfer(id: string) {
    this.onRepeat.emit(id);
  }

}
