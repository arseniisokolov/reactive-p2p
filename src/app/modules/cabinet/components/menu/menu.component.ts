import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuListItemViewModel } from '../../../../core/core/view-models/list-item.view-model';
import { Helpers } from '../../../../core/core/classes/helpers';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./styles/menu.component.scss']
})
export class MenuComponent {

  @Input()
  public tabs: MenuListItemViewModel[];

  @Output()
  public onAction: EventEmitter<string> = new EventEmitter<string>();

  public selectTab(tab: MenuListItemViewModel, event: Event) {
    Helpers.stopPropagation(event);
    this.onAction.emit(tab.Action);
  }

}
