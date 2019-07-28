import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'history-tab',
  templateUrl: './history-tab.component.html',
  styleUrls: ['./styles/history-tab.component.scss']
})
export class HistoryTabComponent {

  constructor(
    private _router: Router
  ) { }

  public repeatTransfer(id: string) {
    this._router.navigate(['cabinet/create-transfer'], { queryParams: { id } });
  }

}
