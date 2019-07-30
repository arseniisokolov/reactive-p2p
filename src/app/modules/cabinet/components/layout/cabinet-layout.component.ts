import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';

import { MenuListItemViewModel } from 'core-library/core/view-models/list-item.view-model';
import { AppActionTypes } from '../../../../data/app-action-types.enum';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'cabinet-layout',
  templateUrl: './cabinet-layout.component.html',
  styleUrls: ['./styles/cabinet-layout.component.scss']
})
export class CabinetLayoutComponent implements OnInit, OnDestroy {

  /** TO DO: каунтеры, скрывать историю если нет платежей */
  public MenuTabs: MenuListItemViewModel[] = [
    new MenuListItemViewModel(AppActionTypes.toCreateTransfer, "Новый перевод"),
    new MenuListItemViewModel(AppActionTypes.toTimeline, "История переводов"),
    new MenuListItemViewModel(AppActionTypes.toMyCards, "Сохраненные карты"),
  ];

  private _unsubscriber = new Subject<void>();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.checkRoutingChanges();
  }

  public ngOnDestroy() {
    this._unsubscriber.next();
    this._unsubscriber.complete();
  }

  public handleMenuAction(name: AppActionTypes): void {
    switch (name) {
      case AppActionTypes.toCreateTransfer:
        this._router.navigate(['cabinet/create-transfer']);
        break;
      case AppActionTypes.toTimeline:
        this._router.navigate(['cabinet/timeline']);
        break;
      case AppActionTypes.toMyCards:
        this._router.navigate(['cabinet/my-cards']);
        break;
    }
  }

  /** Распознает активный таб (если его активировали через роутинг) */
  private checkRoutingChanges() {
    this.setActiveTab();
    this._router.events.pipe(filter(event => event instanceof NavigationEnd))
      .pipe(takeUntil(this._unsubscriber))
      .subscribe(() => {
        this.setActiveTab();
      });
  }

  private setActiveTab() {
    const action: AppActionTypes = this._activatedRoute.snapshot.firstChild.data.action;
    if (!action)
      return;
    const tab = this.MenuTabs.find(i => i.Action === action);
    if (tab) {
      this.MenuTabs.forEach(i => i.setActive(false));
      tab.setActive(true);
    }
  }

}
