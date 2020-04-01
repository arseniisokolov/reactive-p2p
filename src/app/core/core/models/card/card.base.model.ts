import { ICardData } from './card.data';
import { Helpers } from '../../classes/helpers';

/** Модель банковской карты */
export abstract class CardModel {

    public Id: string;
    public Number: string;
    public Alias: string;

    public static implodeNumber(numberParts: string[]): string {
        if (!numberParts)
            return '';
        return numberParts.reduce((accumulator, item) => accumulator + item);
    }

    public static calculateExpire(month: string, year: string): Date {
        if (month === undefined || year === undefined)
            return;
        return new Date(Date.parse(`01.${month}.${year}`));
    }

    constructor(data?: ICardData) {
        this.Id = Helpers.getGuid();
        this.fromData(data);
    }

    public abstract fromData(data: ICardData): void;

    public abstract toData(): ICardData;


    public getExplodedNumber(): string[] {
        return this.Number.match(/[\S\s]{1,4}/g);
    }

}