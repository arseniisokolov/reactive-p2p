import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { LocalStorageAdapter } from 'core-library/core/services/local-storage.adapter';
import { ICardTransfer } from '../../../data/card-transfer.interface';

@Injectable()
export class HistoryService {

    private _localStorage: LocalStorageAdapter<ICardTransfer> = new LocalStorageAdapter();

    public getTransfers(): Observable<ICardTransfer[]> {
        return this._localStorage.get('transfers');
    }

    public getTransferById(id: string): Observable<ICardTransfer> {
        return this.getTransfers().pipe(
            first(),
            map(items => items.find(i => i.id === id))
        );
    }

    public deleteTransfer(id: string): Observable<void> {
        return this._localStorage.delete('transfers', id);
    }

}

