import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageAdapter } from '../../../core/core/services/local-storage.adapter';
import { ICardData } from '../../../core/core/models/card/card.data';

@Injectable()
export class CardsCollectionService {

    private _localStorage: LocalStorageAdapter<ICardData> = new LocalStorageAdapter();

    public getCards(): Observable<ICardData[]> {
        return this._localStorage.get('cardsCollection');
    }

}

