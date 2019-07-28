import { ICardTransfer } from 'src/app/app-data/card-transfer.interface';
import { Helpers } from 'core-library/core/helpers';

export class HistoryListItemViewModel {

    public Id: string;
    public NumberFrom: string;
    public NumberTo: string;
    public Amount: number;
    public FormattedDate: string;

    constructor(data: ICardTransfer) {
        if (!data)
            return;
        this.Id = data.id;
        this.NumberFrom = data.cardFrom.number;
        this.NumberTo = data.cardTo.number;
        this.Amount = data.amount;
        this.FormattedDate = `${Helpers.getFormattedTime(data.docDate)}, ${Helpers.getFormattedDate(data.docDate)}`;
    }

}