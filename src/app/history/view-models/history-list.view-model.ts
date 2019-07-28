import { FormControl, Validators } from '@angular/forms';
import { Helpers } from 'core-library/core/helpers';
import { ICardTransfer } from '../../app-data/card-transfer.interface';
import { HistoryListItemViewModel } from './history-list-item.view-model';
import { HistoryListFilterFormViewModel } from './history-list-filter-form.view-model';


export class HistoryListViewModel {

    public Items: HistoryListItemViewModel[];
    public FilterModel: HistoryListFilterFormViewModel;

    public initialize(transfers: ICardTransfer[]) {
        if (!transfers)
            return;
        this.Items = transfers.map(i => new HistoryListItemViewModel(i)).reverse();
    }

    public hideItem(id: string) {
        this.Items = this.Items.filter(i => i.Id !== id);
    }

    /** TO DO */
    private filterItems() {

    }

}