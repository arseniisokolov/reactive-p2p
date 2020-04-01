import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'pure-loader',
  templateUrl: './pure-loader.component.html',
  styleUrls: ['./pure-loader.component.scss']
})

export class PureLoaderComponent {

  @Input()
  public loading: boolean;

  @Input()
  public bg: boolean;

  public Caption = '';
  private _captions = ['Loading', 'lOading', 'loAding', 'loaDing', 'loadIng', 'loadiNg', 'loadinG', 'loading'];

  constructor() {
    this.Caption = this._captions[0];
    this.animate();
  }

  private animate() {
    let step = 0;
    interval(250).subscribe(() => {
      if (step === this._captions.length)
        step = 0;
      this.Caption = this._captions[step];
      step++;
    });
  }

}
