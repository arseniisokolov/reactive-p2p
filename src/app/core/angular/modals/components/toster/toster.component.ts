import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

import { Animations } from '../../../../core/classes/animations';
import { TosterGlobalService } from '../../data/toster/toster.global.service';
import { TosterViewModel } from '../../view-models/toster.view-model';

const Constants = {
    Time: 5000
};

@Component({
    selector: 'toster',
    templateUrl: './toster.component.html',
    styleUrls: ['./toster.component.scss'],
    animations: [Animations.getFadeInOut()]
})
export class TosterComponent implements OnInit, OnDestroy {

    public IsVisible: boolean;
    public Model: TosterViewModel;

    private _unsubscriber = new Subject<void>();

    constructor(
        private _tosterService: TosterGlobalService
    ) {
    }

    public ngOnInit() {
        this._tosterService.OnShowModal.subscribe(() => this.showModal());
    }

    public ngOnDestroy() {
        this._unsubscriber.next();
    }

    private showModal() {
        if (!this._tosterService.Model.IsInitialized)
            return;
        if (this.IsVisible)
            this._unsubscriber.next();
        this.Model = this._tosterService.Model;
        this.IsVisible = true;
        interval(this.Model.TimeToShow || Constants.Time)
            .pipe(
                first(),
                takeUntil(this._unsubscriber)
            )
            .subscribe(() => this.IsVisible = false);
    }

}
