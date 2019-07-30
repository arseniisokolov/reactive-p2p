import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageAdapter } from 'core-library/core/services/local-storage.adapter';
import { ICardTransfer } from '../../../data/card-transfer.interface';
import { first, map } from 'rxjs/operators';

@Injectable()
export class TransferService {

    private _localStorage: LocalStorageAdapter<ICardTransfer> = new LocalStorageAdapter();

    public send(transfer: ICardTransfer): Observable<void> {
        return new Observable<void>(subscriber =>
            this._localStorage.post('transfers', [transfer])
                .subscribe(() => subscriber.next())
        );
    }

    public getTransfers(): Observable<ICardTransfer[]> {
        return this._localStorage.get('transfers');
    }

    public getTransferById(id: string): Observable<ICardTransfer> {
        return this.getTransfers().pipe(
            first(),
            map(items => items.find(i => i.id === id))
        );
    }

}

