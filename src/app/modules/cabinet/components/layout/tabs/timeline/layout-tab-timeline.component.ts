import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './layout-tab-timeline.component.html',
  styleUrls: ['./styles/layout-tab-timeline.component.scss']
})
export class LayoutTabTimelineComponent {

  constructor(
    private _router: Router
  ) { }

  public repeatTransfer(id: string) {
    this._router.navigate(['cabinet/create-transfer'], { queryParams: { id } });
  }

}
