import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CardsCollectionListViewModel } from '../../view-models/cards-collection-list.view-model';
import { CardsCollectionService } from '../../data/cards-collection.service';

@Component({
    selector: 'cards-collection-list',
    templateUrl: './cards-collection-list.component.html',
    styleUrls: ['./styles/cards-collection-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsCollectionListComponent implements OnInit {

    public Model$: Observable<CardsCollectionListViewModel>;

    constructor(
        private _cardsCollectionService: CardsCollectionService,
    ) {

    }

    public ngOnInit() {
        const vm = new CardsCollectionListViewModel();
        this.Model$ = this._cardsCollectionService.getCards().pipe(
            map(cards => {
                vm.initialize(cards);
                return vm;
            })
        );
    }

}
