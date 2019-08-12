import { Component, OnInit, isDevMode } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first, finalize, switchMap } from 'rxjs/operators';

import { TosterGlobalService } from 'core-library/angular/modals/data/toster/toster.global.service';
import { TosterTypes } from 'core-library/angular/modals/data/toster/toster-types.enum';
import { ICardTransfer } from '../../../../core/card-transfer.interface';
import { TransferService } from '../../data/transfer.service';
import { TransferFormViewModel } from '../../view-models/transfer-form.view-model';
import { forkJoin } from 'rxjs';

@Component({
    templateUrl: './transfer-layout.component.html',
    styleUrls: ['./styles/transfer-layout.component.scss'],
})
export class TransferLayoutComponent implements OnInit {

    public Model: TransferFormViewModel;
    public Loading: boolean;

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _transferService: TransferService,
        private _tosterService: TosterGlobalService
    ) { }

    public ngOnInit() {
        this.Loading = true;
        this._activatedRoute.queryParams
            .pipe(first())
            .subscribe(params => {
                this.Model = new TransferFormViewModel();
                this.initializeStrategy(params).subscribe(() => {
                    this.Loading = false;
                }, (error: any) => {
                    if (isDevMode())
                        console.error(error);
                    this._tosterService.showModal({ message: 'Попробуйте позже', type: TosterTypes.Error });
                });
            });
    }

    public submitForm() {
        this._transferService.handleNewTransfer(this.Model.toModel()).subscribe(() => {
            this._tosterService.showModal({ message: `Перевод на сумму ${this.Model.toModel().amount} отправлен.`, type: TosterTypes.Success });
            setTimeout(() => this.directToHistory(), 500);
        }, error => {
            this._tosterService.showModal({ message: error, type: TosterTypes.Error });
        });
    }

    private initializeStrategy({ id, srcId, tgtId }: { id?: string, srcId?: string, tgtId?: string }) {
        if (id)
            return this.initializeWithHistory(id);
        if (srcId)
            return this.initializeWithCards(srcId, tgtId);
        return this.initialize();
    }

    private initialize() {
        return this.Model.initialize();
    }

    private initializeWithHistory(id: string) {
        return this._transferService.getTransferById(id)
            .pipe(
                finalize(() => this.Loading = false),
                switchMap((savedTransfer: ICardTransfer) => {
                    return this.Model.initialize({ savedTransfer });
                })
            );
    }

    private initializeWithCards(srcId: string, tgtId: string) {
        return forkJoin(
            this._transferService.getCardFromCollection(srcId),
            this._transferService.getCardFromCollection(tgtId)
        ).pipe(
            finalize(() => this.Loading = false),
            switchMap(([senderCard, contragentCard]) => {
                return this.Model.initialize({ senderCard, contragentCard });
            })
        )
    }

    private directToHistory() {
        this._router.navigateByUrl('cabinet/timeline');
    }

}
