import { CardModel } from './card.base.model';
import { ICardData } from './card.data';

/** Модель банковской карты держателя */
export class ContragentCardModel extends CardModel {

    public Alias: string;

    constructor(data?: ICardData) {
        super(data);
    }

    public fromData(data: ICardData) {
        if (!data)
            return;
        this.Id = data.id;
        this.Number = data.number;
        this.Alias = data.alias;
    }

    public toData(): ICardData {
        return {
            id: this.Id,
            number: this.Number,
            alias: this.Alias,
            isUser: false,
        };
    }

}