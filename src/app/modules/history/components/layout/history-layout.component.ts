import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './history-layout.component.html',
  styleUrls: ['./styles/history-layout.component.scss']
})
export class HistoryLayoutComponent {

  constructor(
    private _router: Router
  ) { }

  public repeatTransfer(id: string) {
    this._router.navigate(['cabinet/create-transfer'], { queryParams: { id } });
  }

}
