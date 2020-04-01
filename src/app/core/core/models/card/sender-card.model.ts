import { CardModel } from './card.base.model';
import { ICardData } from './card.data';

/** Модель банковской карты отправителя */
export class SenderCardModel extends CardModel {

    /** Эмбоссированное имя держателя */
    public OwnerEmbossName: string;
    /** Срок действия */
    public ExpireDate: Date;

    constructor(data?: ICardData) {
        super(data);
    }

    public fromData(data: ICardData) {
        if (!data)
            return;
        this.Id = data.id;
        this.Number = data.number;
        this.OwnerEmbossName = data.ownerEmbossName;
        this.ExpireDate = new Date(parseInt(data.expireDate, 10));
        this.Alias = data.alias;
    }

    public toData(): ICardData {
        return {
            id: this.Id,
            number: this.Number,
            alias: this.Alias,
            isUser: true,
            ownerEmbossName: this.OwnerEmbossName,
            expireDate: this.ExpireDate.getTime().toString(),
        };
    }

    public getExpired(): { month: string, year: string } {
        let month = (this.ExpireDate.getMonth() + 1).toString();
        if (month.length === 1)
            month = '0' + month;
        const year = this.ExpireDate.getFullYear().toString().slice(2);
        return { month, year };
    }

}