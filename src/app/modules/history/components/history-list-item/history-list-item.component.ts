import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Helpers } from '../../../../core/core/classes/helpers';
import { HistoryListItemViewModel } from '../../view-models/history-list-item.view-model';

@Component({
  selector: 'history-list-item',
  templateUrl: './history-list-item.component.html',
  styleUrls: ['../history-list/styles/history-list.component.scss']
})
export class HistoryListItemComponent {

  @Input()
  public model: HistoryListItemViewModel;

  @Output()
  public onRepeat: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter<string>();

  public toRepeatTransfer(event: Event) {
    Helpers.stopPropagation(event);
    this.onRepeat.emit(this.model.Id);
  }

  public toDeleteTransfer(event: Event) {
    Helpers.stopPropagation(event);
    this.onDelete.emit(this.model.Id);
  }

}
