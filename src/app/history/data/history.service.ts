import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { LocalStorageAdapter } from 'core-library/core/services/local-storage.adapter';
import { ICardTransfer } from '../../app-data/card-transfer.interface';

@Injectable()
export class HistoryService {

    private _localStorage: LocalStorageAdapter<ICardTransfer> = new LocalStorageAdapter('transfers');

    public getTransfers(): Observable<ICardTransfer[]> {
        return this._localStorage.get();
    }

    public getTransferById(id: string): Observable<ICardTransfer> {
        return this.getTransfers().pipe(
            first(),
            map(items => items.find(i => i.id === id))
        );
    }

    public deleteTransfer(id: string): Observable<void> {
        return this._localStorage.delete(id);
    }

}

